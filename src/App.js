// import { useState, useEffect } from "react";
// import "./App.css";
// import Task from "./components/Task";
// import TaskTable from "./components/TaskTable";
// import VisibilitiControl from "./components/VisibilitiControl";


// function App() {
//   const [tasksItems, setTaskItem] = useState([]);
//   const [showCompleted, setShowCompleted] = useState(false);
  

//   function createNewTask(taskName) {
//     if (!tasksItems.find((task) => task.name === taskName)) {
//       setTaskItem([...tasksItems, { name: taskName, done: false }]);
//     }
//   }
//   function toggleTask(task) {
//     setTaskItem(
//       tasksItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
//     );
//   }
//   useEffect(() => {
//     let data = localStorage.getItem("task");
//     if (data) {
//       setTaskItem(JSON.parse(data));
//     }
//   }, []);
//   const cleanTask = (()=> {
//     setTaskItem(tasksItems.filter((task) => !task.done))
//     setShowCompleted(false)
//   })
//   useEffect(() => {
//     localStorage.setItem("task", JSON.stringify(tasksItems));
//   }, [tasksItems]);

//   return (
//     <main className="bg-dark vh-100 text-white">
//      <div className="container col-md-4 offset-md-4 row justify-content-center">
//      <Task createNewTask={createNewTask} />
//       <TaskTable tasks={tasksItems} toggleTask={toggleTask} />
//       <VisibilitiControl
//       isChecked={showCompleted}
//       setShowCompleted={(checked)=>setShowCompleted(checked)}
//       cleanTask ={cleanTask}
      
//       />
      
      
//       {showCompleted === true && (
//         <TaskTable
//           tasks={tasksItems}
//           toggleTask={toggleTask}
//           showCompleted={showCompleted}
//         />
//       )}
//      </div>
//     </main>
//   );
// }

// export default App;
import { useState, useEffect } from "react";
import "./App.css";
import Task from "./components/Task";
import TaskTable from "./components/TaskTable";
import VisibilitiControl from "./components/VisibilitiControl";

function App() {
  const [tasksItems, setTaskItem] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function createNewTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTaskItem([...tasksItems, { name: taskName, done: false }]);
    }
  }

  function toggleTask(task) {
    setTaskItem(
      tasksItems.map((t) =>
        t.name === task.name ? { ...t, done: !t.done } : t
      )
    );
  }

  useEffect(() => {
    let data = localStorage.getItem("task");
    if (data) {
      setTaskItem(JSON.parse(data));
    }
  }, []);

  const cleanTask = () => {
    setTaskItem(tasksItems.filter((task) => !task.done));
    setShowCompleted(false);
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <main className="bg-dark vh-100 text-white">
      <div className="container">
        <div className="row">
          {/* Formulario para agregar tareas */}
          <div className="col-12 my-3">
            <Task createNewTask={createNewTask} />
          </div>
          
          {/* Control de visibilidad */}
          <div className="col-12 my-3">
            <VisibilitiControl
              isChecked={showCompleted}
              setShowCompleted={(checked) => setShowCompleted(checked)}
              cleanTask={cleanTask}
            />
          </div>

          {/* Tareas pendientes */}
          <div className="col-md-6">
            <h3>Tareas Pendientes</h3>
            {tasksItems.filter((task) => !task.done).length === 0 ? (
              <p>No hay tareas pendientes aún. 😁</p>
            ) : (
              <TaskTable tasks={tasksItems.filter((task) => !task.done)} toggleTask={toggleTask} />
            )}
          </div>


          {/* Tareas completadas */}
          {showCompleted && (
            <div className="col-md-6">
              <h3>Tareas Completadas</h3>
              {tasksItems.filter((task) => task.done).length === 0 ? (
                <p>No hay tareas completadas aún .😞</p>
              ) : (
                <TaskTable
                  tasks={tasksItems.filter((task) => task.done)}
                  toggleTask={toggleTask}
                  showCompleted={showCompleted}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
