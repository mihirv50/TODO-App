import React from "react";

const Todoitem = ({ index, todo, removeTodo }) => {
  return (
    <li className="w-[60%] flex items-center justify-center ml-32 gap-10 text-md mb-5 font-semibold text-center">
      <span>{todo}</span>
      <button onClick={() => removeTodo(index)} className="px-3 py-1 bg-violet-500 text-white hover:bg-violet-700 duration-300 rounded-md">
        Delete
      </button>
    </li>
  );
};

export default Todoitem;
