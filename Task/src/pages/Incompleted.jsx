import React, { useState } from "react";
import { motion } from "framer-motion";
import useLocalStorage from "../components/Task/hooks/useLocalStorage";
import TaskCard from "../components/Task/TaskCard";
import TaskForm from "../components/Task/TaskForm";

export default function Incompleted() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [editingTask, setEditingTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const incompleted = tasks.filter(t => !t.completed);

  const handleToggleComplete = (id) =>
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));

  const handleDeleteTask = (id) =>
    setTasks(tasks.filter(t => t.id !== id));

  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleSubmitEdit = (taskData) => {
    setTasks(tasks.map(t => t.id === editingTask.id ? { ...t, ...taskData } : t));
    setEditingTask(null);
    setIsModalOpen(false);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
    setIsModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-100 overflow-hidden">
      {/* Decorative glowing circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      <div className="relative z-10 p-8 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-islamicGreen text-center mb-10"
        >
          ⏳ Incompleted Tasks
        </motion.h2>

        {incompleted.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-center text-lg"
          >
            All tasks are completed, ma sha Allah! 🌙
          </motion.p>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {incompleted.map(task => (
              <motion.div
                key={task.id}
                whileHover={{ scale: 1.03 }}
                className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border border-emerald-100 p-4"
              >
                <TaskCard
                  task={task}
                  onToggleComplete={() => handleToggleComplete(task.id)}
                  onDelete={() => handleDeleteTask(task.id)}
                  onEdit={() => handleEditTask(task)}
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Edit Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-lg">
              <TaskForm
                onSubmit={handleSubmitEdit}
                initialTask={editingTask}
                onCancel={handleCancelEdit}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
