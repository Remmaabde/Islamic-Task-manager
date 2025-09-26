import React from "react";

export default function TaskCard({ task, onToggleComplete, onDelete, onEdit }) {
  const priorityColors = {
    Low: "text-gray-600",
    Medium: "text-yellow-600",
    High: "text-red-600 font-semibold",
  };

  return (
    <div
      className={`p-5 rounded-xl shadow-md border transition transform hover:scale-105 
      ${task.completed ? "bg-green-100 border-green-400" : "bg-white border-gray-200"}`}
    >
      <h3
        className={`font-bold text-lg mb-2 
        ${task.completed ? "line-through text-gray-500" : "text-islamicGreen"}`}
      >
        {task.title}
      </h3>
      <p className="text-gray-600 mb-1">{task.description || "No description"}</p>
      <p className="text-sm text-gray-500">Due: {task.dueDate || "No due date"}</p>
      <p className={`text-sm ${priorityColors[task.priority]}`}>
        Priority: {task.priority}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        <button
          onClick={onToggleComplete}
          className={`px-3 py-1 rounded text-white transition 
          ${task.completed ? "bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400" : "bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-400"}`}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={onEdit}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:ring-2 focus:ring-red-400"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
