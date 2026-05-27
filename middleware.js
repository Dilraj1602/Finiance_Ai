import arcjet, {
  createMiddleware,
  detectBot,
  shield,
} from "@arcjet/next";

import {
  clerkMiddleware,
  createRouteMatcher,
} from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

/**
 * Protected routes
 */
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/account(.*)",
  "/transaction(.*)",
]);

/**
 * Arcjet configuration
 */
const aj = arcjet({
  key: process.env.ARCJET_KEY,

  // Optional: Track requests by Clerk user ID
  // characteristics: ["userId"],

  rules: [
    /**
     * Shield protection
     */
    shield({
      mode: "LIVE",
    }),

    /**
     * Bot detection
     */
    detectBot({
      mode: "LIVE", // Use "DRY_RUN" for logging only

      allow: [
        "CATEGORY:SEARCH_ENGINE", // Google, Bing, etc.
        "GO_HTTP", // Required for Inngest
      ],
    }),
  ],
});

/**
 * Clerk middleware
 */
const clerk = clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  /**
   * Redirect unauthenticated users
   * from protected routes
   */
  if (!userId && isProtectedRoute(req)) {
    const { redirectToSignIn } = await auth();
    return redirectToSignIn();
  }

  return NextResponse.next();
});

/**
 * Chain middlewares
 * Arcjet runs first, then Clerk
 */
export default createMiddleware(aj, clerk);

/**
 * Middleware matcher configuration
 */
export const config = {
  matcher: [
    /**
     * Skip Next.js internals and static files
     */
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",

    /**
     * Always run for API routes
     */
    "/(api|trpc)(.*)",
  ],
};