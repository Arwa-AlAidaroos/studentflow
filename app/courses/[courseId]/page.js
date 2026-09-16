{/* TODO: Fetch course details, topics, and course-specific tasks with progress bar */}

import Link from "next/link";
import CourseTasksSection from "./CourseTasksSection";
import { notFound } from "next/navigation";
import {courses} from "@/data/courses";
export function generateStaticParams() {
  return [
    { courseId: "1" },
    { courseId: "2" },
    { courseId: "3" },
  ];
}

export default async function CourseDetailPage({ params }) {
  const { courseId } = await params;
 const course = courses.find(
  (course) => course.id === (courseId)
);

if (!course) {
  notFound();
  }


  return (
    
    <div className="container">
      <div className="page-back-btn">
      <Link className="btn btn-ghost btn-sm" href="/courses">← Back to Course Catalog</Link>
      </div>
      <div className="hero-banner">
        <div className="hero-header-row">
          <span className="hero-header-icon">{course.icon} </span>
          <span className="badge badge-category-glass">{course.category}</span>
        </div>
        <h1 className="hero-title">{course.title}</h1>
        <p className="hero-subtitle">{course.description}</p>
        <div className="hero-meta-row">
          <div>
            <div className="hero-meta-lable">INSTRUCTOR</div>
            <div className="hero-meta-value">{course.instructor}</div>
          </div>
          <div>
            <div className="hero-meta-lable">DURATION</div>
            <div className="hero-meta-value">{course.duration}</div>
          </div>
           <div>
            <div className="hero-meta-lable">LEVEL</div>
            <div className="hero-meta-value">{course.level}</div>
          </div>
        </div>
      </div>
      <div className="course-detail-layout">
        <div className="card">
        <h3 className="topics-title">📖 Key Sellbus Topics</h3>
        <ul className="topics-list">
          <li className="topics-item"><span className="topics-number">1.</span><span >{course.topics[0]}</span></li>
          <li className="topics-item"><span className="topics-number">2.</span><span >{course.topics[1]}</span></li>
          <li className="topics-item"><span className="topics-number">3.</span><span >{course.topics[2]}</span></li>
          <li className="topics-item"><span className="topics-number">4.</span><span >{course.topics[3]}</span></li>
          <li className="topics-item"><span className="topics-number">5.</span><span >{course.topics[4]}</span></li>
        </ul>
        </div>
      <CourseTasksSection courseId={courseId} courses={courses}/>
      </div>
      <h1 className="page-title">Course Detail: {courseId}</h1>
   </div>
    
  );
}
