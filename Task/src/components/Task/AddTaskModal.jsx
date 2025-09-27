import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function AddTaskModal({ isOpen, onClose, onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;
    onAdd(text);
    setText("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
          <Dialog.Title className="text-lg font-bold">➕ Add New Task</Dialog.Title>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="mt-3 w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter task..."
          />
          <div className="flex justify-end mt-4 gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Add Task
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
