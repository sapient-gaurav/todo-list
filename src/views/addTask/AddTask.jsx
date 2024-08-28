import React, { useEffect, useState } from "react";
import Field from "./Field";

export default function AddTask({ task, setTask }) {
  console.log(task);
  const [task1, setTask1] = useState(task);
 // Should log true if it's an array
 useEffect(() => {
  setTask1(task);
}, [task]);

  function handleDelete(e, id) {
    e.preventDefault();
    // console.log(id);
    const index = id;
    const updatedTasks = task?.filter((task, id) => id !== index);

    console.log(updatedTasks);
    console.log(task);
    setTask1(updatedTasks);
    setTask(updatedTasks);

    // console.log(task);
  }
  function handleUpdate( id,task2) {

    console.log(id);
    console.log(Array.isArray(task2));
    task[id] = task2;
    setTask(task);  
    console.log(task);
  }
console.log("task1:",task1);

  return (
    <div>
      {task &&
        task1?.map((task, id) => (
          <form key={id}>
            <div className="flex justify-center">
              {" "}
              <Field
                task={task}
                id={id}
                handleDelete={handleDelete}
                setTask={setTask}
                handleUpdate={handleUpdate}
              />
            </div>
          </form>
        ))}
    </div>
  );
}
