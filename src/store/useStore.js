
import { create } from "zustand";

const LABELS = {
  en: {
    add: "Add",
    reset: "Reset all",
    clear: "Clear completed",
    progress: "Progress",
    placeholder: "Add task...",
    note: "Tasks are saved in your browser (localStorage).",
    language: "Language"
  },
  ru: {
    add: "Добавить",
    reset: "Сбросить всё",
    clear: "Убрать выполненные",
    progress: "Прогресс",
    placeholder: "Добавить дело...",
    note: "Задачи сохраняются в браузере (localStorage).",
    language: "Язык"
  },
  fi: {
    add: "Lisää",
    reset: "Nollaa kaikki",
    clear: "Poista valmiit",
    progress: "Edistyminen",
    placeholder: "Lisää tehtävä...",
    note: "Tehtävät tallennetaan selaimeen (localStorage).",
    language: "Kieli"
  }
};
const TASKS_EN = [
  { id: 1, text: "Wake up and stretch", done: false },
  { id: 2, text: "Wash face and brush teeth", done: false },
  { id: 3, text: "Get dressed", done: false },
  { id: 4, text: "Make the bed", done: false },
  { id: 5, text: "Have breakfast", done: false },
  { id: 6, text: "Pack the backpack", done: false },
];

const TASKS_RU = [
  { id: 1, text: "Проснуться и потянуться", done: false },
  { id: 2, text: "Умыться и почистить зубы", done: false },
  { id: 3, text: "Одеться", done: false },
  { id: 4, text: "Заправить кровать", done: false },
  { id: 5, text: "Позавтракать", done: false },
  { id: 6, text: "Собрать рюкзак", done: false },
];

const TASKS_FI = [
  { id: 1, text: "Herää ja venyttele", done: false },
  { id: 2, text: "Pese kasvot ja harjaa hampaat", done: false },
  { id: 3, text: "Pukeudu", done: false },
  { id: 4, text: "Petaa sänky", done: false },
  { id: 5, text: "Syö aamiainen", done: false },
  { id: 6, text: "Pakkaa reppu", done: false },
];


function getDefaultTasks(lang) {
  if (lang === "ru") return TASKS_RU;
  if (lang === "fi") return TASKS_FI;
  return TASKS_EN;
}

export const useStore = create((set, get) => ({
  language: localStorage.getItem("lang") || "en",
  tasks: JSON.parse(localStorage.getItem("tasks")) || getDefaultTasks(localStorage.getItem("lang") || "en"),
  getLabels: () => LABELS[get().language],

  setLanguage: (lang) => set(() => {
    localStorage.setItem("lang", lang);
    return { language: lang };
  }),

  addTask: (task) => set((state) => {
    const updated = [...state.tasks, task];
    localStorage.setItem("tasks", JSON.stringify(updated));
    return { tasks: updated };
  }),

  toggleTask: (id) => set((state) => {
    const updated = state.tasks.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
    );
    localStorage.setItem("tasks", JSON.stringify(updated));
    return { tasks: updated };
  }),

  resetTasks: () => set(() => {
    const lang = get().language;
    const base = getDefaultTasks(lang);
    localStorage.setItem("tasks", JSON.stringify(base));
    return { tasks: base };
  }),

  clearCompleted: () => set((state) => {
    const updated = state.tasks.filter((t) => !t.done);
    localStorage.setItem("tasks", JSON.stringify(updated));
    return { tasks: updated };
  })

}));
