import React from "react";

const Todoinput = ({ todo, setTodo, handleSubmit }) => {
  return (
    <div className="w-full h-14 text-center mt-5">
      <form onSubmit={handleSubmit} action="">
        <input
          className="w-[50%] h-10 mr-2 border-2 border-zinc rounded p-3"
          type="text"
          placeholder="Write your tasks ???"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" className="px-3 py-2 rounded-md bg-violet-500 hover:bg-violet-700 text-white duration-200">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Todoinput;
