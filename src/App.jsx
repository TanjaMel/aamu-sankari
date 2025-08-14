import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import ProgressBar from "./components/ProgressBar";
import { useStore } from "./store/useStore.js";
import Language from "./components/Language";

export default function App() {
  const { resetTasks, clearCompleted } = useStore();

  return (
      <div className="app">
        <div className="card">
          <h1 className="h1">Aamu Sankari</h1>
          <p className="sub">Супергерой твоего утра 🦸‍♀️🦸‍♂️</p>

          <Language />
          <ProgressBar />
          <TaskList />
          <TaskInput />


          <div className="footer">
            <button className="btn" onClick={clearCompleted}>
              Убрать выполненные
            </button>
            <button className="btn danger" onClick={resetTasks}>
              Сбросить всё
            </button>
          </div>

          <p className="note">Задачи сохраняются в браузере (localStorage)</p>
        </div>
      </div>
  );
}
