import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import ProgressBar from "./components/ProgressBar";
import { useStore } from "./store/useStore.js";
import Language from "./components/Language";
import "./App.css";
import Reward from "./components/Reward";


export default function App() {
  const { resetTasks, clearCompleted, getLabels } = useStore();
  const t = getLabels();

  return (
      <div className="app">
        <div className="top-bar">
          <Language />
        </div>

        <ProgressBar />
        <TaskList />
        <TaskInput />
        <Reward />

        <div className="footer">
          <button onClick={resetTasks}>{t.reset}</button>
          <button onClick={clearCompleted}>{t.clear}</button>
          <p className="note">{t.note}</p>
        </div>
      </div>
  );
}
