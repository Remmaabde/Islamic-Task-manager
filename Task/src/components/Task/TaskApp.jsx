import React, { useState, useMemo } from "react";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useFetch } from "./hooks/useFetch";

export default function TaskApp() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [editingTask, setEditingTask] = useState(null);
  const { data: quote, loading, error } = useFetch("https://api.quotable.io/random?tags=inspirational");

  const allCompleted = useMemo(
    () => tasks.length > 0 && tasks.every(task => task.completed),
    [tasks]
  );

  const handleAddTask = (taskData) => {
    if (editingTask) {
      // ✅ Update existing task
      setTasks(tasks.map(t => t.id === editingTask.id ? { ...t, ...taskData } : t));
      setEditingTask(null);
    } else {
      // ✅ Add new task
      const newTask = { ...taskData, id: Date.now(), completed: false };
      setTasks([newTask, ...tasks]);
    }
  };

  const handleToggleComplete = (id) =>
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));

  const handleDeleteTask = (id) =>
    setTasks(tasks.filter(t => t.id !== id));

  const handleEditTask = (task) =>
    setEditingTask(task);

  const handleCancelEdit = () =>
    setEditingTask(null);

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto font-sans">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-islamicGreen">
        📿 Islamic Task Manager
      </h1>

      {/* Islamic Quote */}
      <div className="mb-6 p-4 md:p-6 bg-islamicGold/20 rounded-lg text-center shadow-md">
        {loading ? (
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-islamicGreen mx-auto"></div>
        ) : error ? (
          <div className="text-red-600">
            Failed to load quote.{" "}
            <button
              onClick={() => window.location.reload()}
              className="underline text-islamicGreen"
            >
              Retry
            </button>
          </div>
        ) : (
          <p className="text-islamicGreen italic font-medium text-base md:text-lg">
            "{quote?.content || 'Seek knowledge from the cradle to the grave.'}" —{" "}
            {quote?.author || "Islamic Proverb"}
          </p>
        )}
      </div>

      {/* Task Form */}
      <TaskForm
        onSubmit={handleAddTask}
        initialTask={editingTask}
        onCancel={handleCancelEdit}
      />

      {/* Task List */}
      {tasks.length === 0 ? (
        <div className="mt-12 text-center text-lg md:text-xl text-gray-700 font-semibold">
          Start by adding your first task!
        </div>
      ) : allCompleted ? (
        <div className="mt-12 p-4 bg-green-100 text-green-800 rounded-lg text-lg md:text-xl font-semibold text-center shadow">
          🌙 Keep up the good work!
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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
