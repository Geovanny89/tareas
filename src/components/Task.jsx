import React, { useState } from "react";

export default function Task(props) {
  const [newTaskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTaskName.trim() !== "") {
      props.createNewTask(newTaskName);
      setTaskName("");
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="my-3">
        <div className="input-group">
          <input
            type="text"
            placeholder="Ingresa una nueva tarea"
            value={newTaskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="form-control"
            aria-label="Nueva tarea"
          />
          <button className="btn btn-primary" type="submit">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}
