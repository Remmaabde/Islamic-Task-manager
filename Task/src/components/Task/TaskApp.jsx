import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";

export default function TaskApp() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

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
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">📿 Islamic Task Manager</h1>

      <TaskForm
        onSubmit={handleAddTask}
        initialTask={editingTask}
        onCancel={handleCancelEdit}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
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
    </div>
  );
}
