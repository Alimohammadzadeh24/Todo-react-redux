import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "./features/todoSlice";
import Input from "./components/input";

function App() {

  const dispath = useDispatch();

  const [input, setInput] = useState("");
  const handleChange = (event) => {
    setInput(event.target.value);
    console.log("value is:", event.target.value);
  };

  const addTask = () => {
    console.log(`Adding ${input}`);

    dispath(saveTodo({
      item : input,
      done : false,
      id : Date.now()
    }));

    console.log(localStorage.getItem('state'));
  }
  return (
    <div className="h-screen w-screen bg-[#3e3cb5] text-white">
      <div className="flex justify-center font-bold h-1/15 p-6">
        <h1 className="text-4xl">Todo App</h1>
      </div>
      <div className="mt-1.0 bg[#5cb53c] flex justify-center items-center font-bold h-1/15 p-8">
        <input
          onChange={handleChange}
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Add yout task ..."
          required
        />
        <button
        onClick={addTask}
          type="button"
          class="text-white ml-4 mt-2 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Add!
        </button>
      </div>
      <div className="flex justify-around">
        <div className="w-2/5 m-10 p-4 border-solid h-5/6 border-2 border-white rounded-xl text-center">
          <h1 className="text-2xl pb-2 font-bold border-b-2">Todo List</h1>
        </div>
        <div className="w-2/5 m-10 p-4 border-solid h-5/6 border-2 border-white rounded-xl text-center">
          <h1 className="text-2xl pb-2 font-bold border-b-2">Done Tasks</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
