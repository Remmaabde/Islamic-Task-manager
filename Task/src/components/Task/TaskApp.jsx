import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion"; // For animations
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";
import useLocalStorage from "./hooks/useLocalStorage";

export default function TaskApp() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [editingTask, setEditingTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allCompleted = useMemo(
    () => tasks.length > 0 && tasks.every((t) => t.completed),
    [tasks]
  );

  const handleAddTask = (taskData) => {
    if (editingTask) {
      setTasks(tasks.map(t => t.id === editingTask.id ? { ...t, ...taskData } : t));
      setEditingTask(null);
    } else {
      const newTask = { ...taskData, id: Date.now(), completed: false };
      setTasks([newTask, ...tasks]);
    }
    setIsModalOpen(false);
  };

  const handleToggleComplete = (id) =>
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));

  const handleDeleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));
  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };
  const handleCancelEdit = () => {
    setEditingTask(null);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-200">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-islamicGreen">📿 Islamic Task Manager</h1>
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 5px 15px rgba(16, 185, 129, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
          onClick={() => setIsModalOpen(true)}
          className="bg-islamicGreen text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-700 transition-colors"
        >
          ➕ Add Task
        </motion.button>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-lg"
            >
              <TaskForm
                onSubmit={handleAddTask}
                initialTask={editingTask}
                onCancel={handleCancelEdit}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {tasks.length === 0 ? (
        <div className="mt-12 text-center text-xl text-gray-600">
          Start by adding your first task!
        </div>
      ) : allCompleted ? (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="mt-12 p-4 bg-green-100 text-green-800 rounded-lg text-xl font-semibold text-center shadow-lg"
        >
          🌙 Keep up the good work!
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onToggleComplete={() => handleToggleComplete(task.id)}
              onDelete={() => handleDeleteTask(task.id)}
              onEdit={() => handleEditTask(task)}
            />
          ))}
        </div>
      )}
    </div>
  );
}