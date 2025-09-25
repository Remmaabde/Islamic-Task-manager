import { useLocalStorage } from "../components/Task/hooks/useLocalStorage";
import TaskCard from "../components/Task/TaskCard";

export default function Completed() {
  const [tasks] = useLocalStorage("tasks", []);
  const completed = tasks.filter(t => t.completed);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-islamicGreen mb-6">✅ Completed Tasks</h2>
      {completed.length === 0 ? (
        <p className="text-gray-600">No completed tasks yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completed.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}
