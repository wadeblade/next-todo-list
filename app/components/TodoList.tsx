"use client"

import { useState } from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../types/todo';

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;

    const newTodoItem: Todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <form onSubmit={addTodo} className="mb-4 flex flex-col justify-center items-center gap-[20px]">
        <input
          type="text"
          className="border border-color[#6e6e6e] rounded-[20px] w-full px-[20px] py-[10px] text-[#111] outline-none font-syne"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit" className="font-syne">Add Todo</button>
      </form>

      {todos.length === 0 ? (
        <p className="text-center font-syne text-gray-500">No tasks yet!</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </div>
  );
}
