import React from "react";

export default function TaskCard({ task }) {
  // we receive the entire task object as props now

  // pick priority colors
  const priorityColors = {
    High: "bg-red-200 text-red-800",
    Medium: "bg-yellow-200 text-yellow-800",
    Low: "bg-green-200 text-green-800",
  };

  return (
    <div
      className={`task-card p-4 m-2 rounded-lg shadow-md border 
        ${task.completed ? "bg-gray-100 line-through" : "bg-white"}`}
    >
      {/* Task title with completion style */}
      <h2 className="text-xl font-bold">
        {task.title}
      </h2>

      {/* Only show teh description if it exists */}
      {task.description && (
        <p className="text-gray-600">{task.description}</p>
      )}

      {/* Due_date */}
      <p className="text-sm text-gray-500">Due: {task.dueDate}</p>

      {/* Priority */}
      <span
        className={`inline-block px-2 py-1 rounded text-sm font-semibold ${priorityColors[task.priority]}`}
      >
        {task.priority}
      </span>

      {/* I just completed the checkbox checkbox */}
      <div>
        <input type="checkbox" checked={task.completed} readOnly />
        <span className="ml-2">Completed</span>
      </div>
    </div>
  );
}
