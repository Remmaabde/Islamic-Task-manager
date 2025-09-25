import { useLocalStorage } from "../components/Task/hooks/useLocalStorage";
import TaskCard from "../components/Task/TaskCard";

export default function Incompleted() {
  const [tasks] = useLocalStorage("tasks", []);
  const incompleted = tasks.filter(t => !t.completed);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-islamicGreen mb-6">⏳ Incompleted Tasks</h2>
      {incompleted.length === 0 ? (
        <p className="text-gray-600">All tasks are completed, mashaAllah! 🌙</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {incompleted.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}
