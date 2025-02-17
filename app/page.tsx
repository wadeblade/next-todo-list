import TodoList from "./components/TodoList";
import "./globals.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-[1440px] max-w-[100vw] mx-auto bg-[#a6c5ed]">
      <h1 className="text-[60px] font-syne text-center">Todo List Application</h1>
      <div className="flex justify-center items center mb-[24px]">
        <p className="font-syne text-[20px] text-center ">Write your first task</p>
      </div>
      <TodoList />
    </div>
  );
}
