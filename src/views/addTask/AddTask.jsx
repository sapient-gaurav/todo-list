import React from "react";
import Field from "./Field";

export default function AddTask({ task, setTask }) {

  

  // console.log(task);
  // console.log(task1);

  function handleDelete(e) {
    e.preventDefault();
    const index = e.target.id;
    const updatedTasks = task.filter((_, id) => id !== parseInt(index));
    setTask(updatedTasks);
  }
 function handleUpdate(task2,id){
console.log(id);
console.log(task2);
task[id]=task2;
setTask(task)
console.log(task);
 }

  return (
    <div>
      {task &&
        task.map((task, id) => (
          <form key={id}>
            <div
              className="flex justify-center"
            >  <Field task={task} id={id} handleDelete={handleDelete} setTask={setTask} handleUpdate={handleUpdate}/>  
                
            
            </div>
          </form>
        ))}
    </div>
  );
}
