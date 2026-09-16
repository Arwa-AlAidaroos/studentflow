"use client";

import { useState } from "react";
import { useTasks } from "@/context/TaskContext";
import SearchBar from "@/components/SearchBar";
import TaskFilters from "@/components/TaskFilters";
import TaskCard from "@/components/TaskCard";
import { courses } from "@/data/courses";
import Link from "next/link";
export default function TasksPage() {
  const { tasks, toggleTask, deleteTask } = useTasks();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [priorityFilter, setPriorityFilter] = useState("ALL");
  const [courseFilter, setCourseFilter] = useState("ALL");

  const filteredTasks = tasks.filter((task) => {
  const matchesSearch =
    task.title.toLowerCase().includes(search.toLowerCase()) ||
    task.description.toLowerCase().includes(search.toLowerCase());

  const matchesStatus =
    statusFilter === "ALL" || task.status === statusFilter;

  const matchesPriority =
    priorityFilter === "ALL" || task.priority === priorityFilter;

  const matchesCourse =
    courseFilter === "ALL" || task.courseId === courseFilter;

  return (
    matchesSearch &&
    matchesStatus &&
    matchesPriority &&
    matchesCourse
  );
});

  const handleReset = () => {
  setStatusFilter("ALL");
  setPriorityFilter("ALL");
  setCourseFilter("ALL");
};

const hasActiveFilters = statusFilter !== "ALL" || priorityFilter !== "ALL" || courseFilter !== "ALL";
const completedTasks = tasks.filter( (task) => task.status === "completed").length;

const totalTasks = tasks.length;
  return (
    <div className="container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Task Manager</h1>
          <p className="page-subtitle">Manage, filter, and track all your course assignments ({completedTasks} of {totalTasks} completed).</p>
        </div>
        <div className="page-header-actions">
           <Link href="/tasks/new" className="btn btn-primary" > + New Task</Link>
        </div>
      </div>
      <div className="search-margin">
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)}  placeholder="Search tasks by keyword or description..."/>
      </div>
      <div className="filter-container">
        <TaskFilters statusFilter={statusFilter} setStatusFilter={setStatusFilter} priorityFilter={priorityFilter} setPriorityFilter={setPriorityFilter} courseFilter={courseFilter} setCourseFilter={setCourseFilter} courses={courses} onReset={hasActiveFilters ? handleReset : null}/>
      </div>
      <div className="list-margin">
       {filteredTasks.map((task) => (<TaskCard  key={task.id} task={task} courses={courses}   onToggle={toggleTask} onDelete={deleteTask} />))}
      </div>
    </div>
  );
}
