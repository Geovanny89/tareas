import React from "react";

export default function TaskRow({ task, toggleTask, index }) {
  return (
    <tr>
      <td>{index}</td> {/* Aquí mostramos el índice (número de tarea) */}
      <td>
        <label
          style={{
            textDecoration: task.done ? "line-through" : "none",
            cursor: "pointer",
          }}
          onClick={() => toggleTask(task)}
        >
          {task.name}
        </label>
      </td>
    </tr>
  );
}