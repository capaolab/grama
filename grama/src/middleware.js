
import authMiddleware from "./lib/middlewares/authMiddleware"
export default async function middleware(req) {
  // Auth Middleware
  authMiddleware(req)
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
