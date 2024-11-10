import React, { useState, useRef, useEffect } from "react";

interface Item {
  id: number;
  text: string;
  completed: boolean;
}

function Todolist() {
  const [todos, setTodos] = useState<Item[]>([]);
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleClick = () => {
    if (input.trim()) {
      const newTodo: Item = { id: Date.now(), text: input, completed: false };
      setTodos([...todos, newTodo]);
      setInput("");
      inputRef.current?.focus();
    }
  };

  const handlekeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="w-[700px]  bg-inherit">
      <div className="flex items-center gap-3 pb-10">
        <input
          className="w-[600px] pl-5 pt-3 outline-none text-white font-semibold  pb-3 bg-[#222] rounded-md  shadow-md  border-b"
          ref={inputRef}
          type="text"
          value={input}
          placeholder="Enter . . ."
          onChange={(e) => setInput(e.currentTarget.value)}
          onKeyDown={handlekeydown}
        />
        <button
          className=" bg-[#222] shadow-md  text-xl font-semibold text-white pl-11 pr-11 pt-3 pb-3 rounded-md"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className=" border-b flex items-center justify-between p-2 bg-[#222] text-white  w-[700px] rounded-md "
          >
            <p
              onClick={() => handleToggle(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </p>
            <button
              onClick={() => handleDelete(todo.id)}
              className="bg-red-900 pl-4 pr-4 rounded-md hover:bg-red-800"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todolist;
