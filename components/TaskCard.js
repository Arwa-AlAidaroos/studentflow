"use client";

import Link from "next/link";
import { formatDate, getPriorityClass, isOverdue,getCourseTitle } from "@/lib/helpers";



export default function TaskCard({ task, courses = [], onToggle, onDelete }) {
 const courseTitle = getCourseTitle(courses,task.courseId, );
 
  return (
    <div className={`task-card ${task.status === "completed" ? "completed" : ""} ${task.status !== "completed" && isOverdue(task)? "overdue-card": ""}`}>
        <div className="task-card-main">
        <button type="button" onClick={() => onToggle(task.id)} className={`checkbox-custom${task.status === "completed" ? " checked" : ""}`} aria-label={ task.status === "completed" ? "mark task as incomplete": "mark task as complete"}>{task.status === "completed" && "✓"}</button>
        <div className="task-content">
          <div className="task-header-row">
            <Link href={`/tasks/${task.id}`} className={`task-title-link ${task.status === "completed" ? "completed" : ""}`}> {task.title}</Link>
          </div>
          <p className="task-desc">{task.description}</p>
          <div className="task-tags-row">
            <span className={`badge ${getPriorityClass(task.priority)}`}>{task.priority}</span> 
            <span className="badge badge-course">{courseTitle}</span>
            <span className={`task-due-date ${task.status !== "completed" && isOverdue(task)? " text-danger": ""}`}>📅 {formatDate(task.dueDate)}{task.status !== "completed" && isOverdue(task) && " (Overdue)"}</span>
            <span className={`badge badge-status ${task.status === "completed"? "badge-done" : "badge-pending"}`}>{task.status}</span>
           </div>
        </div>

      </div>
      <div className="task-card-actions">
        <Link href={`/tasks/${task.id}`} className="btn btn-ghost btn-sm">Details</Link>
        <button type="button" className="btn btn-danger-ghost btn-sm" aria-label="Delete-task" onClick={() =>onDelete(task.id)}>🗑️</button>

      </div>
    </div>
  );
}
