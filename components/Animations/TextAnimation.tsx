"use client";

import { motion } from "framer-motion";

export default function TextAnimation({
  heading,
  styles,
  delay,
}: {
  heading: string;
  styles: string;
  delay?: number;
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%", opacity: 50 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        transition={{
          delay: delay || 0.3,
          ease: [0.76, 0, 0.24, 1],
          duration: 1.5,
        }}
        className={`${styles}`}
      >
        {heading}
      </motion.div>
    </div>
  );
}
