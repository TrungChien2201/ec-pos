const AUTH_ENDPOINT = {
  // Endpoints
  loginEndpoint: '/ecsite/login',
  getMeEndpoint: '/ecsite/me',
  loginByLiffTokenEndpoint: '/line/access-account',
  registerEndpoint: '/ecsite/sign-up',
  logoutEndpoint: '/users/logout',
  forgotPasswordEndpoint: '/ecsite/forgot-password',
  resetPasswordEndpoint: '/ecsite/reset-password',
  refreshTokenEndpoint: '/ecsite/refresh-token',
  verifyOTPEndpoint: '/ecsite/verify-otp',
  infoEndpoint: '/users/info',
  tokenType: 'Bearer',
  storageTokenKeyName: 'accessToken',
  storageLiffTokenKeyName: 'liffToken',
  storageRefreshTokenKeyName: 'refreshToken',
  syncLineAccount: '/ecsite/sync-line-account',
}

export default AUTH_ENDPOINT
