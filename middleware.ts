export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    `${process.env.SITE_URL}/dashboard`,
    `${process.env.SITE_URL}/dashboard/subscribers`,
    `${process.env.SITE_URL}/dashboard/menu`,
  ],
};
