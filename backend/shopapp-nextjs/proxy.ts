// In your middleware.ts or proxy.ts file at the project root

// here all middlewares can be configured, like logging, auth, etc

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from "jsonwebtoken";

function isValid(token:string) {
  let payload = jwt.decode(token);
  // get exp, get roles
  return true;
}
export default function proxy(request: NextRequest) {
  // Check if the request is for a protected route
  // console.log("Proxy ", request.nextUrl)
  if (request.nextUrl.pathname.startsWith('/api/orders')) {
    const token = request.headers.get('Authorization')?.split(' ')[1];
    // If no token is found, redirect to the login page
    if (!token || !isValid(token!)) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
     console.log(jwt.decode(token));
  }

  // Allow the request to proceed otherwise
  return NextResponse.next();
}

// Optionally, define a matcher to run the middleware only on specific paths for performance
export const config = {
  matcher: ['/api/orders/:path*', '/api/secure/:path*'],
};