import React from "react";
import { useStore } from "../store/useStore";

export default function Reward() {
  const { tasks, getLabels } = useStore();
  const t = getLabels();

  const allDone = tasks.length > 0 && tasks.every((t) => t.done);

  if (!allDone) return null;

  return (
      <div className="reward">
        🎉 {t.reward || "Great job!"}
      </div>
  );
}
