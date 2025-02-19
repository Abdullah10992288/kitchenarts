export { default } from "next-auth/middleware";

export const config = {
  matcher: [`/dashboard`, `/dashboard/subscribers`, `/dashboard/menu`],
};
