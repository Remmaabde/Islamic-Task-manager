import React from "react";
import { motion } from "framer-motion";

export default function TaskCard({ task, onToggleComplete, onDelete, onEdit }) {
  const priorityColors = {
    Low: "text-gray-600",
    Medium: "text-yellow-600",
    High: "text-red-600 font-semibold",
  };

  return (
    <motion.div
      className={`p-5 rounded-xl shadow-md border transition-all duration-300 ${task.completed ? "bg-green-100 border-green-400" : "bg-white border-gray-200"}`}
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3
        className={`font-bold text-lg mb-2 transition ${task.completed ? "line-through text-gray-500" : "text-islamicGreen"}`}
      >
        {task.title}
      </h3>
      <p className="text-gray-600 mb-1">{task.description || "No description"}</p>
      <p className="text-sm text-gray-500">Due: {task.dueDate || "No due date"}</p>
      <p className={`text-sm ${priorityColors[task.priority]}`}>
        Priority: {task.priority}
      </p>

      <div className="flex gap-2 mt-4">
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: task.completed ? "#f59e0b" : "#10b981" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          onClick={onToggleComplete}
          className={`px-3 py-1 rounded text-white ${task.completed ? "bg-yellow-500" : "bg-green-600"}`}
        >
          {task.completed ? "Undo" : "Complete"}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          onClick={onEdit}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          Edit
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#ef4444" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          onClick={onDelete}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          Delete
        </motion.button>
      </div>

      {task.completed && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
          className="absolute -top-4 -right-4 bg-emerald-500 rounded-full p-2 shadow-lg"
        >
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
      )}
    </motion.div>
  );
}