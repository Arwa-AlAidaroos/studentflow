 import TaskForm from "@/components/TaskForm";
import {courses} from "@/data/courses";
import Link from "next/link";

export default function NewTaskPage() {
  return (
    <div className="container">
      <div className="page-back-btn">
        <Link href="/tasks" className="btn btn-ghost btn-sm">←Back to Tasks</Link>
      </div>
      <div className="page-title-center">
      <h1 className="page-title">Add New Assigment</h1>
      <p className="page-subtitle">Fill in the details below to add a new task to your tracker.</p>
      </div>
      <TaskForm courses={courses}/>
    </div>
  );
}
