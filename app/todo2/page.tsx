'use client'
import { useState } from 'react';
import { useTodoStore } from '../store/todoStore';
import Sidebar from '../components/Sidebar';

export default function TodoPage2() {
  const [newTodo, setNewTodo] = useState('');
  const [showState, setShowState] = useState(false);
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodoStore();

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div className="flex min-h-screen bg-white">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-red-100 p-4 rounded">Column 1</div>
        <div className="bg-yellow-100 p-4 rounded">Column 2</div>
        <div className="bg-purple-100 p-4 rounded">Column 3</div>
      </div>
      
    </div>
  );
}
