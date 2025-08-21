import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";

export default function TaskApp() {
const [tasks, setTasks] = useState([]);

const handleAddTask = (taskData) => {
    const newTask = {
    id: Date.now(),
    ...taskData,
    completed: false,
    };
    setTasks([newTask, ...tasks]);
};

return (
    <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">📿 Islamic Task Manager</h1>

    <TaskForm onSubmit={handleAddTask} />

      {/* Task listing using map() Js(built-in) */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
