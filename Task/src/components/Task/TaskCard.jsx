import React from "react";

export default function TaskCard({ task, onToggleComplete, onDelete, onEdit }) {
  return (
    <div className={`task-card p-4 rounded shadow ${task.completed ? "bg-green-200" : "bg-white"}`}>
      <h3 className={`font-bold ${task.completed ? "line-through" : ""}`}>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {task.dueDate}</p>
      <p>Priority: {task.priority}</p>

      <div className="flex gap-2 mt-2">
        <button onClick={onToggleComplete} title={task.completed ? "Undo Complete" : "Mark Complete"}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={onEdit} title="Edit Task">
          Edit
        </button>
        <button onClick={onDelete} title="Delete Task" className="text-red-600">
          Delete
        </button>
      </div>
    </div>
  );
}
