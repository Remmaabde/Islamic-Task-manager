import React, { useState } from "react";
//import "./TaskForm.css"; // import the CSS file

export default function TaskForm() {
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [dueDate, setDueDate] = useState("");
const [priority, setPriority] = useState("Low");

const handleSubmit = (e) => {
    e.preventDefault();

    const taskData = {
    title,
    description,
    dueDate,
    priority,
    };

    console.log("Task Created:", taskData);

    // Reset form after submit
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("Low");
};

return (
    <form className="task-form" onSubmit={handleSubmit}>
    <h2>📿Islamic Task Manager</h2>

    <label>
        Title (required):
        <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        />
    </label>

    <label>
        Description (optional):
        <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        ></textarea>
    </label>

    <label>
        Due Date:
        <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        />
    </label>

    <label>
        Priority:
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        </select>
    </label>

    <button type="submit">Add Task </button>
    </form>
);
};


