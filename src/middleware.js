// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('next-auth.session-token'); // Adjust this according to your authentication method
  const url = new URL(request.url);

// console.log("middleware" ,token)
  if (url.pathname.startsWith('/build-planner/')) {
    if (!token) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/build-planner/:path*'],
};
