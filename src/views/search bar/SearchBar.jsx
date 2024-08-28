import React, { useState } from "react";
import AddTask from "../addTask/AddTask";
// import axios from "axios";
export default function SearchBar() {
  const [item, setItem] = useState("");
  const [task, setTask] = useState([]);
  console.log(task);
  function hanleClick() {
    console.log(item);
    if (item === "") {
      return alert("enter the item");
    }
    setTask([...task, item]);
    setItem("");
  }
  return (
    <div className="bg-violet-950 min-h-screen flex justify-center pt-16">
      <div className="  w-[800px]  max-h-[800px] min-h-[500px] bg-violet-950 border-4 rounded-lg border-violet-500 shadow-2xl   shadow-indigo-500">
        <div className="flex justify-center mt-10">
          <input
            type="text"
            className="w-8/12 py-2 px-3 bg-gradient-to-l text-xl  from-indigo-300 to-violet-700 rounded-xl border-none outline-none mx-3 shadow-red-400 shadow-md "
            value={item}
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />{" "}
          <button
            className="bg-indigo-400 text-xl font-semibold py-2 px-7 rounded-xl hover:shadow-indigo-600 shadow-md hover:translate-y-px        "
            onClick={hanleClick}
          >
            Add
          </button>
        </div>
        <div className="mt-6 overflow-y-scroll h-[680px]  ">
          {task && <AddTask task={task} setTask={setTask} />}
        </div>
      </div>
    </div>
  );
}
