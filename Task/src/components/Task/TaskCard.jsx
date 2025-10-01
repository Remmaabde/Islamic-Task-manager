import { CheckCircle, Circle, Trash2, CreditCard as Edit, Clock, Star } from 'lucide-react';

export default function TaskCard({ task, onToggleComplete, onDelete, onEdit }) {
  const priorityColors = {
    high: 'from-red-400 to-red-600',
    medium: 'from-yellow-400 to-yellow-600',
    low: 'from-green-400 to-green-600',
  };

  const priorityBorderColors = {
    high: 'border-red-300',
    medium: 'border-yellow-300',
    low: 'border-green-300',
  };

  return (
    <div
      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 ${
        priorityBorderColors[task.priority]
      } transform hover:-translate-y-2 ${task.completed ? 'opacity-75' : ''}`}
    >
      <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${priorityColors[task.priority]}`}></div>

      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Star
          className={`w-5 h-5 ${task.priority === 'high' ? 'text-red-500 fill-red-500' : 'text-gray-300'}`}
        />
      </div>

      <div className="p-6 pt-8">
        <div className="flex items-start gap-4">
          <button
            onClick={() => onToggleComplete(task.id, !task.completed)}
            className="flex-shrink-0 mt-1 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-full"
            aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
          >
            {task.completed ? (
              <CheckCircle className="w-7 h-7 text-emerald-600 animate-bounce" fill="currentColor" />
            ) : (
              <Circle className="w-7 h-7 text-gray-400 hover:text-emerald-500 transition-colors" />
            )}
          </button>

          <div className="flex-1 min-w-0">
            <h3
              className={`text-lg font-bold text-gray-800 mb-2 break-words ${
                task.completed ? 'line-through text-gray-500' : ''
              }`}
            >
              {task.title}
            </h3>

            {task.description && (
              <p className="text-sm text-gray-600 mb-3 break-words leading-relaxed">
                {task.description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${priorityColors[task.priority]} text-white shadow-sm`}
              >
                {task.priority.toUpperCase()}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                {task.category}
              </span>
            </div>

            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Clock className="w-3 h-3" />
              <span>{new Date(task.created_at).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={() => onEdit(task)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <Edit className="w-4 h-4" />
            <span className="text-sm font-medium">Edit</span>
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <Trash2 className="w-4 h-4" />
            <span className="text-sm font-medium">Delete</span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-emerald-50 to-transparent rounded-tl-full opacity-50"></div>
    </div>
  );
}
