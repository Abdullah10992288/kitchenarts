import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Page_components/Navbar/Navbar";
import Client_Rapper from "./Client_Rapper";
import Footer from "@/components/Page_components/Footer/Footer";

export const metadata: Metadata = {
  keywords: [
    "kitchen",
    "art",
    "arts",
    "perfect",
    "pint",
    "partners",
    "food",
    "restaurent",
    "abdullah",
    "azhar",
  ],
  icons: {
    icon: "https://3f47x3dz4b.ufs.sh/f/nYrIvOGsVnL7DL8Zq8QCZ8jcoGipYuJD9yxqtdFBmrXVRUTW",
  },
  title: "Kitchen Arts | perfect Pint Partners",
  description:
    "Our menu features foodie-friendly street and finger foods for you to pair with the perfect pint. We feature many classic pub favorites while incorporating subtle but unique Southeast Asian flavors to give your taste buds a wake up call.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font" cz-shortcut-listen="true">
        <Client_Rapper>
          <header>
            <Navbar />
          </header>
          {children}
          <Footer />
        </Client_Rapper>
      </body>
    </html>
  );
}
