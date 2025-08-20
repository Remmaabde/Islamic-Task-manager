import React, { useState } from "react";

export default function TaskForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
const [priority, setPriority] = useState("Low");

const handleSubmit = (e) => {
    e.preventDefault();

    // send data to parent (TaskApp)
    onSubmit({ title, description, dueDate, priority });

    // reset form
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("Low");
};

return (
    <form className="task-form" onSubmit={handleSubmit}>
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
        <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        </select>
    </label>

    <button type="submit">Add Task</button>
    </form>
);
}
