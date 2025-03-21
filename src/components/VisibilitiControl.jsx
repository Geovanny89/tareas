import React from "react";

export default function VisibilitiControl({ isChecked, setShowCompleted, cleanTask }) {
  const handleDelete = () => {
    if (window.confirm("¿Estás seguro de eliminar las tareas completadas?")) {
      cleanTask();
    }
  };

  return (
    <div className="my-3">
      <div className="form-check form-switch">
        <input
          type="checkbox"
          className="form-check-input"
          id="showCompletedTasks"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="showCompletedTasks">
          Mostrar tareas completadas
        </label>
      </div>
      <button className="btn btn-danger mt-2" onClick={handleDelete}>
        Limpiar tareas completadas
      </button>
    </div>
  );
}
