import React, { useState, useMemo } from "react";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";

export default function TaskApp() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  // Derived state: are all tasks completed and there is at least one task?
  const allCompleted = useMemo(() => {
    return tasks.length > 0 && tasks.every(task => task.completed);
  }, [tasks]);

  // Add new task or update existing task
  const handleAddTask = (taskData) => {
    if (editingTask) {
      setTasks(tasks.map(t => t.id === editingTask.id ? { ...t, ...taskData } : t));
      setEditingTask(null);
    } else {
      const newTask = { ...taskData, id: Date.now(), completed: false };
      setTasks([newTask, ...tasks]);
    }
  };

  // Toggle task complete/undo
  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t));
  };

  // Delete task
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  // Set task into edit mode
  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  // Cancel editing and reset form
  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-800">📿 Islamic Task Manager</h1>

      <TaskForm
        onSubmit={handleAddTask}
        initialTask={editingTask}
        onCancel={handleCancelEdit}
      />

      {tasks.length === 0 ? (
        <div className="mt-12 text-center text-xl text-gray-700 font-semibold">
          Start by adding your first task!
        </div>
      ) : allCompleted ? (
        <div className="mt-12 p-4 bg-green-100 text-green-800 rounded text-xl font-semibold text-center">
          Keep up the good work!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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
