import React from "react";

export default function TaskCard({ task, onToggleComplete, onDelete, onEdit }) {
  return (
    <div className={`task-card p-4 rounded shadow ${task.completed ? "bg-green-200" : "bg-white"} border border-gray-200`}>
      <h3 className={`font-bold text-lg ${task.completed ? "line-through text-gray-500" : "text-gray-800"}`}>{task.title}</h3>
      <p className="text-gray-600">{task.description || "No description"}</p>
      <p className="text-sm text-gray-500">Due: {task.dueDate || "No due date"}</p>
      <p className="text-sm text-gray-500">Priority: {task.priority}</p>

      <div className="flex gap-2 mt-4">
        <button
          onClick={onToggleComplete}
          title={task.completed ? "Undo Complete" : "Mark Complete"}
          className={`px-3 py-1 rounded ${task.completed ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-500 hover:bg-green-600"} text-white`}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={onEdit}
          title="Edit Task"
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          title="Delete Task"
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}