import { Todo } from "../types/todo";


interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export default function TodoItem({ todo, toggleComplete, deleteTodo }: TodoItemProps) {
  return (
    <div className="flex justify-between items-center p-2 border-b">
      <span
        className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''} font-syne`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </span>
      <button
        className="text-red-500 ml-2 font-syne"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}
