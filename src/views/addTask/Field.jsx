import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

export default function Field({
  task,
  id,
  handleDelete,
  setTask,
  handleUpdate,
}) {
  const [check, setCheck] = useState();
  const [active, setActive] = useState(true);
  const [task2, setTask2] = useState(task);
  function handleUpdate1(e, id) {
    e.preventDefault();
    console.log(id);
    console.log(task2);
    handleUpdate(task2, id);
    setTask2(task2);
    setActive(!active);
  }
  return (
    <div className=" flex justify-center w-10/12  mt-3">
      {active ? (
        <>
          {" "}
          <input
            type="checkbox"
            className="w-5 "
            onChange={(e) => setCheck(e.target.checked)}
          />
          <div className=" w-9/12  mx-4   bg-violet-800 py-2 px-3 outline-none">
            {check ? <del className="permanent-marker ">{task2} </del> : <span className="text-lg font-bold">{task2}</span>}
          </div>{" "}
          <button
            className="bg-indigo-900 px-3 py-2 text-xl text-slate-300 rounded-lg mx-2 hover:shadow-indigo-500 shadow-md hover:translate-y-px    "
            id={id}
            onClick={() => setActive(!active)}
          >
            <FaEdit />
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            name="taskName"
            className="w-8/12 mx-4  focus:shadow-indigo-600 hover:shadow-indigo-600 shadow-md bg-violet-800 py-2 px-3 outline-none"
            value={task2}
            onChange={(e) => {
              setTask2(e.target.value);
            }}
          />
          <button
            className="bg-green-800 px-3 py-2 text-slate-300 font-semibold rounded-lg mx-2 hover:shadow-green-400 shadow-md hover:translate-y-px"
            onClick={(e) => handleUpdate1(e, id)}
          >
            Update
          </button>
        </>
      )}{" "}
      <button
        className="bg-red-900 px-3 py-2  text-slate-300 rounded-lg hover:shadow-red-500 shadow-md hover:translate-y-px"
        id={id}
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}
