import React from "react";
import { motion } from "framer-motion";
import useLocalStorage from "../components/Task/hooks/useLocalStorage";
import TaskCard from "../components/Task/TaskCard";

export default function Incompleted() {
  const [tasks] = useLocalStorage("tasks", []);
  const incompleted = tasks.filter(t => !t.completed);

  return (
    <div className="p-6 bg-gradient-to-br from-emerald-50 to-emerald-200 min-h-screen">
      <h2 className="text-2xl font-semibold text-islamicGreen mb-6">⏳ Incompleted Tasks</h2>
      {incompleted.length === 0 ? (
        <p className="text-gray-600">All tasks are completed, mashaAllah! 🌙</p>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {incompleted.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onToggleComplete={() => {}}
              onDelete={() => {}}
              onEdit={() => {}}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}