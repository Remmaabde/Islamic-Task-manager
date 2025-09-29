import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-100 overflow-hidden">
      {/* Decorative glowing circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold text-islamicGreen drop-shadow-lg"
        >
          📿 Welcome to the NSDA<br /> Islamic Task Manager
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed"
        >
          Manage your daily goals with{" "}
          <span className="text-islamicGreen font-semibold">
            niyyah (intention)
          </span>{" "}
          and barakah 🌙 stay productive, mindful, and connected.
        </motion.p>

        {/* Floating Cards Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-3 max-w-5xl"
        >
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-emerald-100"
          >
            <h3 className="text-xl font-semibold text-islamicGreen mb-3">
              ✍️ Add & Organize
            </h3>
            <p className="text-gray-600">
              Create, edit, and prioritize your tasks easily with a clean
              minimal workflow.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-emerald-100"
          >
            <h3 className="text-xl font-semibold text-islamicGreen mb-3">
              ✅ Stay Consistent
            </h3>
            <p className="text-gray-600">
              Track completed tasks and celebrate your productivity  keep
              growing daily.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-emerald-100"
          >
            <h3 className="text-xl font-semibold text-islamicGreen mb-3">
              🌙 Spiritual Balance
            </h3>
            <p className="text-gray-600">
              Align your productivity with your faith build habits with
              purpose & blessings.
            </p>
          </motion.div>
        </motion.div>

        {/* Call to Action Button */}
        <motion.a
          href="/incompleted"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 8px 25px rgba(16, 185, 129, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mt-12 inline-block bg-islamicGreen text-black px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-green-700 transition-colors"
        >
           Get Started
        </motion.a>
      </div>
    </div>
  );
}
