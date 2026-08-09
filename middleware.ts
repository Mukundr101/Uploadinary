import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
    "/sign-in",
    "/sign-up",
    "/",
    "/home"
])
const isPublicApiRoute = createRouteMatcher([
    "/api/videos"
])
export default clerkMiddleware((auth, req) => {
    const { userId } = auth();
    const currentUrl = new URL(req.url);
    const isAccessingDashboard = currentUrl.pathname === "/home";

    // If user is logged in and accessing a public route but not the dashboard
    if (userId && isPublicRoute(req) && !isAccessingDashboard) {
        return NextResponse.redirect(new URL("/home", req.url));
    }

    // If user is not logged in and trying to access a protected page
    if (!userId) {
        if (!isPublicRoute(req)) {
            return NextResponse.redirect(new URL("/sign-in", req.url));
        }
    }

    return NextResponse.next();
});

export const config = {
  // Only run middleware for application pages (exclude API and _next/static)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
