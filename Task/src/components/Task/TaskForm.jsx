import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    <motion.form
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", bounce: 0.3 }}
      className="space-y-4 bg-white p-6 rounded-xl shadow-md border border-gray-200"
      onSubmit={handleSubmit}
    >
      {error && <div className="text-red-600 text-sm font-semibold">{error}</div>}

      <motion.label
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="block"
      >
        <span className="text-gray-700">Title (required):</span>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="mt-1 block w-full rounded-lg border-gray-300 focus:ring-islamicGreen focus:border-islamicGreen shadow-sm"
          placeholder="Enter task title"
        />
      </motion.label>

      <motion.label
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="block"
      >
        <span className="text-gray-700">Description:</span>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="mt-1 block w-full rounded-lg border-gray-300 focus:ring-islamicGreen focus:border-islamicGreen shadow-sm"
          placeholder="Enter task description"
        />
      </motion.label>

      <motion.label
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="block"
      >
        <span className="text-gray-700">Due Date:</span>
        <input
          type="date"
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
          className="mt-1 block w-full rounded-lg border-gray-300 focus:ring-islamicGreen focus:border-islamicGreen shadow-sm"
        />
      </motion.label>

      <motion.label
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="block"
      >
        <span className="text-gray-700">Priority:</span>
        <select
          value={priority}
          onChange={e => setPriority(e.target.value)}
          className="mt-1 block w-full rounded-lg border-gray-300 focus:ring-islamicGreen focus:border-islamicGreen shadow-sm"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </motion.label>

      <div className="flex gap-4 justify-end">
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#10b981" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          type="submit"
          className="bg-islamicGreen text-white px-4 py-2 rounded hover:bg-green-700 shadow-md"
        >
          {initialTask ? "Update Task" : "Add Task"}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#6b7280" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          type="button"
          onClick={onCancel}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 shadow-md"
        >
          Cancel
        </motion.button>
      </div>
    </motion.form>
  );
}