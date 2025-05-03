import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { ITask } from "../interfaces/ITask";
import { getStorageData, storeData } from "../util/localStorage";

interface ITasksContext {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  updateTask: (task: ITask) => void;
  deleteTask: (id: number) => void;
  sortTasks: (criteria: 'priority' | 'id' | 'created' | 'title') => void;
  reverseOrder: () => void;
}

const TasksContext = createContext<ITasksContext>({} as ITasksContext);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isReversed, setIsReversed] = useState(false);

  useEffect(() => {
    (async () => {
      const cache = await getStorageData('tasks');
      if (cache) setTasks(cache);
    })();
  }, []);

  function saveAndUpdate(newList: ITask[]) {
    setTasks(newList);
    storeData('tasks', newList);
  }

  function addTask(task: ITask) {
    const newList = [...tasks, task];
    saveAndUpdate(newList);
  }

  function updateTask(updated: ITask) {
    const newList = tasks.map(t => t.id === updated.id ? updated : t);
    saveAndUpdate(newList);
  }

  function deleteTask(id: number) {
    const newList = tasks.filter(t => t.id !== id);
    saveAndUpdate(newList);
  }

  function sortTasks(criteria: 'priority' | 'id' | 'created' | 'title') {
    const sorted = [...tasks].sort((a, b) => {
      if (criteria === 'priority') return a.priority - b.priority;
      if (criteria === 'id') return a.id - b.id;
      if (criteria === 'created') return b.id - a.id;
      return a.title.localeCompare(b.title);
    });
    setIsReversed(false);
    saveAndUpdate(sorted);
  }

  function reverseOrder() {
    const reversed = [...tasks].reverse();
    setIsReversed(prev => !prev);
    saveAndUpdate(reversed);
  }

  return (
    <TasksContext.Provider value={{ tasks, addTask, updateTask, deleteTask, sortTasks, reverseOrder }}>
      {children}
    </TasksContext.Provider>
  );
};

export function useTasks(): ITasksContext {
  return useContext(TasksContext);
}
