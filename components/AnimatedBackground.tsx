"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const shapes = [
    {
      width: 300,
      height: 300,
      color: "bg-purple-500/10 dark:bg-purple-500/5",
      top: "10%",
      left: "-10%",
      delay: 0,
    },
    {
      width: 400,
      height: 400,
      color: "bg-blue-500/10 dark:bg-blue-500/5",
      top: "40%",
      right: "-10%",
      delay: 2,
    },
    {
      width: 250,
      height: 250,
      color: "bg-emerald-500/10 dark:bg-emerald-500/5",
      bottom: "10%",
      left: "20%",
      delay: 4,
    },
    {
      width: 200,
      height: 200,
      color: "bg-orange-500/10 dark:bg-orange-500/5",
      top: "20%",
      right: "20%",
      delay: 1,
    }
  ];

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-3xl ${shape.color}`}
          style={{
            width: shape.width,
            height: shape.height,
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
          }}
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
}

