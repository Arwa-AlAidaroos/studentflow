"use client";

import StatsCard from "@/components/StatsCard";
import TaskCard from "@/components/TaskCard";
import Link from "next/link";
import { useTasks } from "@/context/TaskContext";
import { isOverdue, getUpcomingTasks } from "@/lib/helpers";
import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";

export default function HomePage() {
   const { tasks } = useTasks();
   const totalTasks = tasks.length;

const completedTasks = tasks.filter(
  (task) => task.status === "completed"
).length;

const pendingTasks = tasks.filter(
  (task) => task.status !== "completed"
).length;

const overdueTasks = tasks.filter(
  (task) => task.status !== "completed" && isOverdue(task)
).length;
const completedPercentage =  totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
const upcomingTasks = getUpcomingTasks(tasks, 7);
  return (
    <div className="container">
      <section className="hero-banner">
        <h1 className="hero-title">Welcome to StudentFlow 🚀</h1>
        <p className="hero-subtitle">Track your course progression, organize your assignments, and discover curated frontend learning resources all in one place.</p>
        <div className="hero-actions">
          <Link href="/tasks/new" className="btn btn-primary">+ Create New Task</Link>
          <Link href="/courses" className="btn btn-secondary">Explore Courses</Link>
        </div>
      </section>
      <section className="dashboard-stats-section">
        <div className="stats-grid">
          <StatsCard  title="Total Tasks"value={totalTasks} icon="📝" colorVariant="primary" subtitle="All assigned tasks"/>
          <StatsCard title="Completed" value={completedTasks} icon="✅" colorVariant="success" subtitle={`${completedPercentage}% completion rate`} />
          <StatsCard title="Pending" value={pendingTasks} icon="⏳"colorVariant="warning" subtitle="Tasks in progress" />
           <StatsCard title="Overdue" value={overdueTasks} icon="⚠️" colorVariant="danger" subtitle="Need attention" />
        </div>
        <div className="dashboard-upcoming-section">
          <div className="page-header dashboard-upcoming-header">
            <div>
              <h3 className="dashboard-upcoming-title">⏰ Upcoming Deadlines (Next 7 Days)</h3>
              <p className="dashboard-upcoming-subtitle">Stay on top of your upcoming course milestones.</p>
            </div>
            <Link href="/tasks" className="btn btn-outline btn-sm">View All Tasks →</Link>
          </div>
          <div className="tasks-list">
           {upcomingTasks.length > 0 ? (
    upcomingTasks.map((task) => (
      <TaskCard
        key={task.id}
        task={task}
        courses={courses}
      />
    ))
  ) : (
    <p>No upcoming tasks in the next 7 days.</p>
  )}
          </div>
        </div>
      </section>
      <section className="dashboard-courses-section">
        <div className="page-header">
          <div>
          <h2 className="page-title">Enrolled Courses</h2>
          <p className="page-subtitle">Your core curriculum in the frontend development program.</p>
          </div>
          <Link href="/courses" className="btn btn-outline btn-sm">Browse All ({courses.length}) →</Link>
        </div>
        <div className="cards-grid">
          
          {courses.map((course) => ( <CourseCard key={course.id} course={course} /> ))}

        </div>
      </section>
      
     
    </div>
  );
}
