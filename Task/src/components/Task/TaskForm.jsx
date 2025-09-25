import React, { useState, useEffect } from "react";
import "../../index.css";
export default function TaskForm({ onSubmit, initialTask, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Low");
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialTask) {
      setTitle(initialTask.title);
      setDescription(initialTask.description);
      setDueDate(initialTask.dueDate);
      setPriority(initialTask.priority);
    } else {
      setTitle("");
      setDescription("");
      setDueDate("");
      setPriority("Low");
    }
    setError("");
  }, [initialTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Task title is required.");
      return;
    }
    setError("");
    onSubmit({
      id: initialTask ? initialTask.id : undefined,
      title,
      description,
      dueDate,
      priority,
      completed: initialTask ? initialTask.completed : false,
    });
  };

  return (
    <form
      className="space-y-4 bg-white p-6 rounded-xl shadow-md border border-gray-200"
      onSubmit={handleSubmit}
    >
      {error && <div className="text-red-600 text-sm font-semibold">{error}</div>}

      <label className="block">
        <span className="text-gray-700">Title (required):</span>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="mt-1 block w-full rounded-lg border-gray-300 focus:ring-islamicGreen focus:border-islamicGreen"
          placeholder="Enter task title"
        />
      </label>

      <label className="block">
        <span className="text-gray-700">Description (optional):</span>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="mt-1 block w-full rounded-lg border-gray-300 focus:ring-islamicGreen focus:border-islamicGreen"
          placeholder="Enter task description"
        ></textarea>
      </label>

      <label className="block">
        <span className="text-gray-700">Due Date:</span>
        <input
          type="date"
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
          className="mt-1 block w-full rounded-lg border-gray-300 focus:ring-islamicGreen focus:border-islamicGreen"
        />
      </label>

      <label className="block">
        <span className="text-gray-700">Priority:</span>
        <select
          value={priority}
          onChange={e => setPriority(e.target.value)}
          className="mt-1 block w-full rounded-lg border-gray-300 focus:ring-islamicGreen focus:border-islamicGreen"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </label>

      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-green text-black px-4 py-2 rounded hover:bg-green-700"
        >
          {initialTask ? "Update Task" : "Add Task"}
        </button>
        {initialTask && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
