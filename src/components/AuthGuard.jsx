import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { PERMISSION_ERROR_ROUTE, USER_PROFILE } from 'common/constant';
import authConfig from 'common/endpoints/auth';

/**
 * AuthGuard component to protect routes that require authentication
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render if authenticated
 * @returns {React.ReactNode} - Protected content or null while checking auth
 */
const AuthGuard = ({ children }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the user is authenticated
    const checkAuth = () => {
      // Get the token from localStorage
      const token = localStorage.getItem(authConfig.storageTokenKeyName);
      
      // If we're on a protected route and there's no token, redirect to 401
      if (router.pathname.startsWith(USER_PROFILE) && !token) {
        console.log('User not authenticated, redirecting to 401 page');
        router.push(PERMISSION_ERROR_ROUTE);
        return false;
      }
      
      return !!token;
    };

    const isAuth = checkAuth();
    setIsAuthenticated(isAuth);
    setIsLoading(false);
  }, [router]);

  // Show nothing while checking authentication
  if (isLoading) {
    return null;
  }

  // If the route requires authentication and the user is not authenticated,
  // the useEffect will handle the redirect, so we return null here
  if (router.pathname.startsWith(USER_PROFILE) && !isAuthenticated) {
    return null;
  }

  // If the user is authenticated or the route doesn't require authentication, render the children
  return children;
};

export default AuthGuard;
