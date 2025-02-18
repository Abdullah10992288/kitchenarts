"use client";
import { motion } from "framer-motion";

export default function ImageAnimation({
  children,
  styles,
  delay,
}: Readonly<{
  children: React.ReactNode;
  styles?: string;
  delay?: number;
}>) {
  return (
    <motion.div
      initial={{ y: "30%", opacity: 50 }}
      whileInView={{ y: 0, opacity: 100 }}
      viewport={{ once: true }}
      transition={{
        delay: delay || 0.3,
        ease: [0.76, 0, 0.24, 1],
        duration: 1.5,
      }}
      className={styles}
    >
      {children}
    </motion.div>
  );
}
