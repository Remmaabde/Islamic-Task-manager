import { useState, useEffect } from 'react';
import { Plus, Filter, Search } from 'lucide-react';
import { taskAPI } from '../../services/api';
import { useLocalStorage } from '../../components/Task/hooks/useLocalStorage';
import TaskCard from './TaskCard';
import AddTaskModal from './AddTaskModal';
import QuranAyah from '../QuranAyah';

export default function TaskApp() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [filterStatus, setFilterStatus] = useLocalStorage('taskFilter', 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPriority, setSelectedPriority] = useLocalStorage('priorityFilter', 'all');
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const allTasks = await taskAPI.getAllTasks();
    setTasks(allTasks);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAddTask = async (newTask) => {
    try {
      if (editingTask) {
        await taskAPI.updateTask(editingTask.id, newTask);
      } else {
        await taskAPI.createTask(newTask);
      }
      loadTasks();
      setEditingTask(null);
    } catch (err) {
      // Handle error
    }
  };

  const handleToggleComplete = async (id, completed) => {
    try {
      await taskAPI.toggleComplete(id, completed);
      loadTasks();
    } catch (err) {
      // Handle error
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await taskAPI.deleteTask(id);
      loadTasks();
    } catch (err) {
      // Handle error
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const filteredTasks = tasks?.filter((task) => {
    const matchesStatus =
      filterStatus === 'all' ||
      (filterStatus === 'active' && !task.completed) ||
      (filterStatus === 'completed' && task.completed);

    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPriority = selectedPriority === 'all' || task.priority === selectedPriority;

    return matchesStatus && matchesSearch && matchesPriority;
  });

  const stats = {
    total: tasks?.length || 0,
    active: tasks?.filter((t) => !t.completed).length || 0,
    completed: tasks?.filter((t) => t.completed).length || 0,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="container mx-auto px-4 py-8">
        <QuranAyah />

        <div className="mb-8 bg-white rounded-2xl shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-5 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <p className="text-sm font-medium opacity-90">Total Tasks</p>
              <p className="text-3xl font-bold mt-1">{stats.total}</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-5 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <p className="text-sm font-medium opacity-90">Active</p>
              <p className="text-3xl font-bold mt-1">{stats.active}</p>
            </div>
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl p-5 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <p className="text-sm font-medium opacity-90">Completed</p>
              <p className="text-3xl font-bold mt-1">{stats.completed}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tasks..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 outline-none"
              />
            </div>

            <div className="flex gap-2">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 outline-none bg-white"
              >
                <option value="all">All Tasks</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
              </select>

              <select
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 outline-none bg-white"
              >
                <option value="all">All Priorities</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="fixed bottom-8 right-8 z-40 flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full shadow-2xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-110 hover:shadow-emerald-300/50 focus:outline-none focus:ring-4 focus:ring-emerald-400 group"
        >
          <Plus className="w-6 h-6 transition-transform duration-300 group-hover:rotate-90" />
          <span className="font-semibold text-lg">Add Task</span>
        </button>

        {filteredTasks && filteredTasks.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl">
            <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <Filter className="w-12 h-12 text-emerald-600" />
            </div>
            <p className="text-gray-600 font-medium text-lg">No tasks found</p>
            <p className="text-gray-500 text-sm mt-2">Try adjusting your filters or create a new task</p>
          </div>
        )}

        {filteredTasks && filteredTasks.length > 0 && (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredTasks.map((task) => (
              <div key={task.id} className="break-inside-avoid">
                <TaskCard
                  task={task}
                  onToggleComplete={handleToggleComplete}
                  onDelete={handleDeleteTask}
                  onEdit={handleEditTask}
                />
              </div>
            ))}
          </div>
        )}

        <AddTaskModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleAddTask}
          editingTask={editingTask}
        />
      </div>
    </div>
  );
}
