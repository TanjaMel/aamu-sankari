import React, { useMemo } from "react";
import { useStore } from "../store/useStore";

export default function ProgressBar() {
  const { tasks } = useStore();

  const progress = useMemo(() => {
    const total = tasks.length || 1;
    const done = tasks.filter((t) => t.done).length;
    return Math.round((done / total) * 100);
  }, [tasks]);

  return (
      <section className="mb-5">
        <label className="label">Progress: {progress}%</label>
        <div className="progress">
          <div style={{ width: `${progress}%` }} />
        </div>
      </section>
  );
}
