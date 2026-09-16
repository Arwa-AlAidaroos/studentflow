"use client";

import { useState } from "react";
import CourseCard from "@/components/CourseCard";
import SearchBar from "@/components/SearchBar";
import {courses} from "@/data/courses";

export default function CoursesPage() {
   const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ALL");
   
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
    course.title.toLowerCase().includes(search.toLowerCase()) ||
    course.instructor.toLowerCase().includes(search.toLowerCase()) ||
    course.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "ALL" || course.category === category;

    return matchesSearch && matchesCategory;
  });
  return (
    <div className="container">
      <div className="page-header">
        <div>
      <h1 className="page-title">Course Catalog</h1>
      <p className="page-subtitle">Explore modules designed to take you from web fundamentals to modern React & Next.js.</p>
      </div>
      </div>
      <div className="filters-container">
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} category={category} onCategoryChange={setCategory} placeholder="Search courses,instructors,topics..."/>
      </div>
      <div className="cards-grid">
      {filteredCourses.map((course)=><CourseCard key={course.id} course={course}/>)}
      </div>
    </div>
  );
}
