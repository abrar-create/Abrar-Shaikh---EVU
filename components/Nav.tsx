"use client";

import { motion } from "framer-motion";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="text-sm font-semibold tracking-[0.2em] text-white/90">g2m.xyz</div>
        <motion.button
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          className="min-h-11 rounded-xl bg-white px-5 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.35)] transition hover:shadow-[0_0_28px_rgba(255,255,255,0.35)]"
        >
          Get Started
        </motion.button>
      </div>
    </header>
  );
}
