import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import ProgressBar from "./components/ProgressBar";
import Language from "./components/Language";
import Reward from "./components/Reward";
import { useStore } from "./store/useStore";

export default function App() {
  const { resetTasks, clearCompleted, getLabels } = useStore();
  const t = getLabels();

  return (
      <div className="app">
        <div className="top-bar">
          <Language />
          <ProgressBar />
        </div>

        <TaskList />
        <TaskInput />
        <Reward />

        <div className="footer-buttons">
          <button onClick={resetTasks}>{t.reset}</button>
          <button onClick={clearCompleted}>{t.clear}</button>
        </div>

        <p className="note">{t.note}</p>
      </div>
  );
}
