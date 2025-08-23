import React, { useState, useEffect } from "react";

export default function TaskForm({ onSubmit, initialTask, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Low");

  // Populate it 
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
  }, [initialTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <form className="task-form" onSubmit={handleSubmit}>
      <label>
        Title (required):
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
      </label>

      <label>
        Description (optional):
        <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
      </label>

      <label>
        Due Date:
        <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
      </label>

      <label>
        Priority:
        <select value={priority} onChange={e => setPriority(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </label>

      <button type="submit">{initialTask ? "Update Task" : "Add Task"}</button>
      {initialTask && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
}
