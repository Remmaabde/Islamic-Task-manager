import React, { useState } from "react";
import TaskForm from "./TaskForm";

export default function TaskApp() {
  // Manage task list state
const [tasks, setTasks] = useState([]);

  // Handle new task submissions
const handleAddTask = (taskData) => {
    const newTask = {
      id: Date.now(), // unique id
      ...taskData,    // spread the form data based on their ..(title, desc, date, priority)
      completed: false, // default status
    };

    // add new task to the top of the list
    setTasks([newTask, ...tasks]);

    // update in console
    console.log("Updated Task List:", [newTask, ...tasks]);
};

return (
    <div>
    <h1>📿 Islamic Task Manager</h1>

      {/* Pass down the handleAddTask function */}
    <TaskForm onSubmit={handleAddTask} />

    {/*Render tasks*/}
    <ul>
        {tasks.map((task) => (
        <li key={task.id}>
            <strong>{task.title}</strong> – {task.description} (Due: {task.dueDate}) | Priority: {task.priority}
        </li>
        ))}
    </ul>
    </div>
);
}
