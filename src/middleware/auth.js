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

    // Get the token from localStorage if on client side
    let token = null;

    if (isClient) {
      // Client-side: Check localStorage for accessToken
      token = localStorage.getItem(authConfig.storageTokenKeyName);
    } else {
      // Server-side: Check cookies for accessToken
      token = context.req?.cookies?.[authConfig.storageTokenKeyName];
    }

    // Log for debugging
    console.log('Auth middleware:', {
      isClient,
      token,
      path: context.resolvedUrl || context.asPath,
      cookieName: authConfig.storageTokenKeyName,
      redirectPath: PERMISSION_ERROR_ROUTE
    });

    // If there's no token, redirect to the 401 page
    if (!token) {
      return {
        redirect: {
          destination: PERMISSION_ERROR_ROUTE,
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
