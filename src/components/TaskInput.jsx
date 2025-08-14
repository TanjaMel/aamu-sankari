import React, { useState } from "react";
import { useStore } from "../store/useStore.js";

export default function TaskInput() {
  const [text, setText] = useState("");
  const { addTask, getLabels } = useStore();
  const t = getLabels();

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    addTask({ id: Date.now(), text: trimmed, done: false });
    setText("");
  }

  return (
      <form onSubmit={handleSubmit}>
        <input
            placeholder={t.placeholder}
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">{t.add}</button>
      </form>
  );
}
