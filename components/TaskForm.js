"use client";

import { useState,useRef,useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTasks } from "@/context/TaskContext";
import { generateId } from "@/lib/helpers";
import Link from "next/link";

export default function TaskForm({ courses = [] }) {
 
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [courseId,setCourseId]=useState("html-css");
  const [dueDate,setDueDate] = useState("");
  const [priority,setPriority]= useState("medium");
  const [error,setError] = useState("");
  const { addTask } = useTasks();
  const router = useRouter();
  const titleRef = useRef(null);

  useEffect(() => {
  titleRef.current.focus();
}, []);

  const handleSubmit = (e) => {
  e.preventDefault();

 if (!title.trim() && !dueDate) {
    setError("⚠️ Please enter a task title and choose a due date.");
    return;
  } else if (!dueDate) {
    setError("⚠️ Please choose a due date.");
    return;
  } else if (!title.trim()) {
    setError("⚠️ Please enter a task title.");
    return;
  }

  

  setError("");

    addTask({
    id: generateId(),
    title: title.trim(),
    description: description.trim(),
    courseId,
    dueDate,
    priority,
    status: "pending",
  });

  router.push("/tasks");
};

  return (
    <form className="task-form card" onSubmit={handleSubmit}>
      
      {error && <p className="form-error-banner">{error}</p>}
      <div className="form-group">
        <label htmlFor="title" className="form-label">Task Title *</label>
        <input id="title" className="form-input" placeholder="e.g. Build responsive navbar"type="text" value={title}onChange={(e) => setTitle(e.target.value)} ref={titleRef}/>
      </div>
      <div className="form-group">
        <label htmlFor="description" className="form-lable">Description (optinal)</label>
        <textarea id="description" className="form-textarea" rows="3" placeholder="Add instructions,links or notes..."  value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="courseId" className="form-label">Course</label>
        <select id="courseId" className="form-select"  value={courseId} onChange={(e) => setCourseId(e.target.value)}>
          {courses.map((course)=> <option key={course.id} value={course.id}>{course.title}</option>)}
        </select>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="dueDate" className="form-label">Due Date *</label>
          <input id="dueDate" className="form-input" type="date" value={dueDate}onChange={(e) => setDueDate(e.target.value)}/>
        </div>
         <div className="form-group">
          <label htmlFor="priority" className="form-label">Priority Level</label>
          <select id="priority" className="form-select"  value={priority}onChange={(e) => setPriority(e.target.value)}>
           <option value="low">🟢 Low Priority</option>
           <option value="medium">🟡 Medium Priority</option>
           <option value="high"> 🔴 High Priority</option>
          </select>
         </div>
      </div>
      <div className="form-actions">
        
        <Link href="/tasks" className="btn btn-secondary">Cancel</Link>
        <button type="submit" className="btn btn-primary">Save Task</button>
      </div>
    </form>
  );
}
