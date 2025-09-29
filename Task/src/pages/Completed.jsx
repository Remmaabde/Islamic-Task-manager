import React, { useState } from "react";
import { motion } from "framer-motion";
import useLocalStorage from "../components/Task/hooks/useLocalStorage";
import TaskCard from "../components/Task/TaskCard";
import TaskForm from "../components/Task/TaskForm";

export default function Completed() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [editingTask, setEditingTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const completed = tasks.filter(t => t.completed);

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
    <div className="p-6 bg-gradient-to-br from-emerald-50 to-emerald-200 min-h-screen">
      <h2 className="text-2xl font-semibold text-islamicGreen mb-6">✅ Completed Tasks</h2>
      {completed.length === 0 ? (
        <p className="text-gray-600">No completed tasks yet.</p>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {completed.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onToggleComplete={() => handleToggleComplete(task.id)}
              onDelete={() => handleDeleteTask(task.id)}
              onEdit={() => handleEditTask(task)}
            />
          ))}
        </motion.div>
      )}

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
  );
}
