export { auth as middleware } from "../auth";

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"],
};

//   "/dashboard/:path*"  dashboard is a path that is protected by the middleware
