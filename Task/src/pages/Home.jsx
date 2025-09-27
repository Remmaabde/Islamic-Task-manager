import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="text-center mt-10 px-4 bg-gradient-to-br from-emerald-50 to-emerald-200 min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-islamicGreen"
      >
        📿 Welcome to the Islamic Task Manager
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-4 text-gray-600 text-lg md:text-xl"
      >
        Manage your tasks with intention and barakah.
      </motion.p>
    </div>
  );
}