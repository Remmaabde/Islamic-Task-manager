import { completedTasks } from '../pages/completedTasks';
import { incompletedTasks } from '../pages/IncompletedTasks';

let localTasks = [...completedTasks, ...incompletedTasks];
let nextId = Math.max(...localTasks.map(t => t.id)) + 1;

export const taskAPI = {
  async getAllTasks() {
    await new Promise(resolve => setTimeout(resolve, 500));
    return [...localTasks].sort((a, b) =>
      new Date(b.created_at) - new Date(a.created_at)
    );
  },

  async getTaskById(id) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return localTasks.find(task => task.id === id);
  },

  async createTask(newTask) {
    await new Promise(resolve => setTimeout(resolve, 500));
    const task = {
      id: nextId++,
      ...newTask,
      created_at: new Date().toISOString(),
    };
    localTasks.push(task);
    return task;
  },

  async updateTask(id, updates) {
    await new Promise(resolve => setTimeout(resolve, 500));
    const index = localTasks.findIndex(task => task.id === id);
    if (index !== -1) {
      localTasks[index] = { ...localTasks[index], ...updates };
      return localTasks[index];
    }
    throw new Error('Task not found');
  },

  async deleteTask(id) {
    await new Promise(resolve => setTimeout(resolve, 500));
    localTasks = localTasks.filter(task => task.id !== id);
    return { success: true };
  },

  async toggleComplete(id, completed) {
    return this.updateTask(id, { completed });
  },

  async getCompletedTasks() {
    await new Promise(resolve => setTimeout(resolve, 300));
    return localTasks.filter(task => task.completed);
  },

  async getIncompletedTasks() {
    await new Promise(resolve => setTimeout(resolve, 300));
    return localTasks.filter(task => !task.completed);
  },
};
