"use client";

import Link from "next/link";
import { useTasks } from "@/context/TaskContext";
import { useRouter } from "next/navigation";
import { formatDate, getPriorityClass, isOverdue ,getCourseTitle } from "@/lib/helpers";
import { courses } from "@/data/courses";

export default function TaskDetail({ taskId }) {
  const { tasks, toggleTask, deleteTask } = useTasks();
  const router = useRouter();
   
  const task = tasks.find((task) => task.id === taskId);
   if (!task) {
    return <p>Task not found.</p>;
  }
  const courseTitle = getCourseTitle(courses,task.courseId);

  return (
    <div className="container task-detail-container">
      <div className="page-back-btn">
        <Link href="/tasks" className="btn btn-ghost btn-sm">
          ← Back to Tasks
        </Link>
      </div>

      <div className="card task-detail-card">
        <div className="task-detail-header-row">
          <div className="task-detail-badges">
            <span className={`badge ${getPriorityClass(task.priority)}`}>
              {task.priority} PRIORITY
            </span>
           

            <span className={`badge badge-status ${task.status === "completed"? "badge-done" : "badge-pending"}`}>
              {task.status}
            </span>

            {isOverdue(task) && (  <span className="badge priority-high">
              OVERDUE
            </span>)}
          </div>

          <span className="task-detail-id">{task.id}</span>
        </div>

        <h1 className="task-detail-title">{task.title}</h1>

        <div className="task-meta-grid">
          <div>
            <span className="task-meta-label">COURSE</span>
            <span className="task-meta-value">{courseTitle}</span>
          </div>

          <div>
            <span className="task-meta-label">DUE DATE</span>
            <span className={`task-meta-value ${task.status !== "completed" && isOverdue(task)? " text-danger": ""}`}>
              📅 {formatDate(task.dueDate)}
            </span>
          </div>

          <div>
            <span className="task-meta-label">STATUS</span>
            <span className="task-meta-value">
               {task.status=== "completed" ? "✅ Completed" : "⏳ In Progress"}
            </span>
          </div>
        </div>

        <div className="task-detail-body">
          <h3 className="task-section-title">
            Task Details & Instructions {task.courseId}
          </h3>

          <p className="task-detail-text">{task.description}</p>
        </div>

        <div className="task-detail-actions">
          <button
            type="button"
            className={`btn ${task.status === "completed"? "btn-secondary" : "btn-primary"}`}
            onClick={() => toggleTask(task.id)}
          >
            {task.status === "completed"
              ? "↺ Mark as Incomplete"
              : "✓ Mark as Complete"}
          </button>

          <button
            type="button"
            className="btn btn-danger-ghost"
            onClick={() => {
              deleteTask(task.id);
              router.push("/tasks");
            }}
          >
            🗑️ Delete Task
          </button>
        </div>
      </div>
    </div>
  );
}