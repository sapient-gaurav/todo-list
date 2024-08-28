import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";

export default function Field({
  task,
  id,
  handleDelete,
  handleUpdate,
  setTask,
}) {
  const [task2, setTask2] = useState(task);

  const [check, setCheck] = useState(false);
  const [active, setActive] = useState(true);
  console.log("task", task);
  console.log("task2", task2);
 
  useEffect(() => {
    setTask2(task);
  }, [task]);
  function handleUpdate1(e) {
    e.preventDefault();
    
    console.log(id);
    console.log(typeof(task2));
     handleUpdate(task2, id);
    // console.log(id);
  //  console.log(typeof(task));
    // setTask(task);
    setTask2(task2);   
    setActive(true);
  }

  return (
    <div className=" flex justify-center w-10/12  mt-3">
      {active ? (
        <>
          <input
            type="checkbox"
            className="w-5"
            onChange={(e) => setCheck(e.target.checked)}
          />
          <div className="w-9/12 mx-4 bg-violet-800 py-2 px-3 outline-none">
            {check ? (
              <del className="permanent-marker">{task2}</del>
            ) : (
              <span className="text-lg font-bold">{task2}</span>
            )}
          </div>
          <button
            className="bg-indigo-900 px-3 py-2 text-xl text-slate-300 rounded-lg mx-2 hover:shadow-indigo-500 shadow-md hover:translate-y-px"
            onClick={() => setActive(false)} // Switch to edit mode
          >
            <FaEdit />
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            className="w-8/12 mx-4 bg-violet-800 py-2 px-3 outline-none shadow-md"
            value={task2}
            onChange={(e) => setTask2(e.target.value)}
          />
          <button
            className="bg-green-800 px-3 py-2 text-slate-300 font-semibold rounded-lg mx-2 hover:shadow-green-400 shadow-md hover:translate-y-px"
            onClick={(e)=>handleUpdate1(e,id)} // Call update function
          >
            Update
          </button>
        </>
      )}
      <button
        className="bg-red-900 px-3 py-2 text-slate-300 rounded-lg hover:shadow-red-500 shadow-md hover:translate-y-px"
        onClick={(e) => handleDelete(e, id)} // Correctly pass the id to handleDelete
      >
        Delete
      </button>
    </div>
  );
}
