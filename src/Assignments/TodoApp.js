import React, { useState } from "react";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((data, id) => id !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div>
        <h2 className="text-center headingFont">Todo List</h2>
        <div className="mt-5 text-center">
          <input
            type="text"
            placeholder="Enter a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <div className="btn btn" onClick={addTask}>Add</div>
        </div>
        <div className="text-center mt-4 justify-content-evenly" style={{width:'270px', marginLeft:'32rem'}}>
        <ul>
          {tasks.map((data, index) => (
            <li key={index} className="text-center mt-3">
              {data} <div className="btn btn-danger" onClick={() => deleteTask(index)}>Delete</div>
            </li>
          ))}
        </ul>
          </div>
      </div>
    </div>
  );
}
