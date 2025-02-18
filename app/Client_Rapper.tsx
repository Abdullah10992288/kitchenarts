"use client";
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import Lenis from "lenis";

export default function Client_Rapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return <SessionProvider>{children}</SessionProvider>;
}
