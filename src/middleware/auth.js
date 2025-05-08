import { getToken } from 'services/auth';
import { PERMISSION_ERROR_ROUTE } from 'common/constant';
import authConfig from 'common/endpoints/auth';

/**
 * Authentication middleware for protected routes
 * @param {Function} gssp - getServerSideProps function (optional)
 * @returns {Function} - Enhanced getServerSideProps function with authentication check
 */
export const withAuth = (gssp) => {
  return async (context) => {
    // Check if we're on the client side
    const isClient = typeof window !== 'undefined';

    // Get the token (client-side from localStorage, server-side from cookies)
    const token = isClient
      ? getToken()
      : context.req?.cookies?.[authConfig.storageTokenKeyName];

    // Log for debugging
    console.log('Auth middleware:', {
      isClient,
      token,
      cookies: context.req?.cookies,
      cookieName: authConfig.storageTokenKeyName,
      redirectPath: PERMISSION_ERROR_ROUTE
    });

    // If there's no token, redirect to the 401 page
    if (!token) {
      return {
        redirect: {
          destination: '/401', // Use hardcoded string to avoid any issues
          permanent: false,
        },
      };
    }

    // Continue with the original getServerSideProps if it exists
    if (gssp) {
      return await gssp(context);
    }

    // Otherwise, just return empty props
    return { props: {} };
  };
};
