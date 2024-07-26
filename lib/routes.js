/* 
An array of routes that are accessible to the public.
*/

export const publicRoutes = ['/']

/*
An array of routes that are used for authentication
*/

export const authRoutes = [
  '/auth/login',
  '/auth/register',
  '/auth/error',
  '/auth/new-verification',
]

// the prefix for the api authentication routes
export const apiAuthPrefix = '/api/auth'

//The default redirect path after login
export const DEFAULT_LOGIN_REDIRECT = '/dashboard/home'
