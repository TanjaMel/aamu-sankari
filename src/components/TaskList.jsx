import React from "react";
import { useStore } from "../store/useStore";

export default function TaskList() {
  const { tasks, toggleTask } = useStore();

  return (
      <ul className="list">
        {tasks.map((t) => (
            <li key={t.id} className={`item ${t.done ? "done" : ""}`}>
              <input
                  id={`task-${t.id}`}
                  type="checkbox"
                  checked={t.done}
                  onChange={() => toggleTask(t.id)}
              />
              <label htmlFor={`task-${t.id}`}>{t.text}</label>
            </li>
        ))}
      </ul>
  );
}
