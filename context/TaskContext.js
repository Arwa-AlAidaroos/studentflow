"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { initialTasks } from "@/data/initialTasks";

// TODO 1: Create TaskContext
const TaskContext = createContext(null);


export function TaskProvider({ children }) {
  // TODO 2: Initialize tasks state with initialTasks
  const [tasks, setTasks] = useState(initialTasks);

  // TODO 3: Load saved tasks from localStorage on initial mount (useEffect)
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");

  if (savedTasks) {
    setTasks(JSON.parse(savedTasks));
  }
  
}, []);

  // TODO 4: Save tasks to localStorage when tasks change (useEffect)
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  
}, [tasks]);

  // TODO 5: Implement addTask(newTask)
  const addTask = (newTask) => {
  setTasks((currentTasks) => [...currentTasks, newTask]);
};

  // TODO 6: Implement toggleTask(taskId)
  const toggleTask = (taskId) => {
  setTasks((currentTasks) =>
    currentTasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          status:
            task.status === "completed" ? "pending" : "completed",
        };
      }

      return task;
    })
  );
};

  // TODO 7: Implement deleteTask(taskId)
 const deleteTask = (taskId) => {
  setTasks((currentTasks) =>
    currentTasks.filter((task) => task.id !== taskId)
  );
};

  return (
    <TaskContext.Provider
      value={{
  tasks,
  addTask,
  toggleTask,
  deleteTask,
}}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
}
