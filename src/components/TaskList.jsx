import React from "react";
import { useStore } from "../store/useStore";

export default function TaskList() {
  const { tasks, toggleTask } = useStore();

  return (
      <div className="task-list">
        {tasks.map((t) => (
            <div key={t.id} className={`task-item ${t.done ? "done" : ""}`}>
              <input
                  id={`task-${t.id}`}
                  className={`task-checkbox`}
                  type="checkbox"
                  checked={t.done}
                  onChange={() => toggleTask(t.id)}
              />
              <label htmlFor={`task-${t.id}`}>{t.text}</label>
            </div>
        ))}
      </div>
  );
}
