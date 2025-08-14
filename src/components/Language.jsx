import React from "react";
import { useStore } from "../store/useStore";

export default function Language() {
  const { language, setLanguage, resetTasks, getLabels } = useStore();
  const t = getLabels();

  function handleChange(e) {
    const selected = e.target.value;
    setLanguage(selected);
    resetTasks();
  }

  return (
      <div className="lang-toggle">
        <label htmlFor="lang">{t.language}:</label>
        <select id="lang" value={language} onChange={handleChange}>
          <option value="en">English</option>
          <option value="ru">Русский</option>
          <option value="fi">Suomi</option>
        </select>
      </div>
  );
}
