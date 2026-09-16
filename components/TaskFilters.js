"use client";

export default function TaskFilters({
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
  courseFilter,
  setCourseFilter,
  courses = [],
  onReset,
}) {

  return (
    <div className="filters-container">
     
      <div className="filter-group">
          <label className="filter-label">STATUS</label>
          <div className="filter-buttons">
              <button className={`filter-btn ${statusFilter === "ALL" ? "active" : ""}`} onClick={() => setStatusFilter("ALL")}>ALL</button>
              <button className={`filter-btn ${statusFilter === "pending" ? "active" : ""}`} onClick={() => setStatusFilter("pending")}>Pending</button>
              <button className={`filter-btn ${statusFilter === "completed" ? "active" : ""}`} onClick={() => setStatusFilter("completed")}>Completed</button>
          </div>
      </div>
      <div className="filter-group">
          <label className="filter-label">PRIORITY</label>
          <select className="filter-select" value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}>
           <option value="ALL">All Priorities</option>
           <option value="high">High</option>
           <option value="medium">Medium</option>
           <option value="low">Low</option>
          </select>
      </div>
      <div className="filter-group">
         <label className="filter-label">COURSES</label>
          <select  className="filter-select" value={courseFilter} onChange={(e) => setCourseFilter(e.target.value)}>
           <option value="ALL">All Courses</option>
            {courses.map((course) => (  <option key={course.id} value={course.id}>  {course.title} </option>))}
          </select>   
      </div>
      {onReset && ( <button className="btn btn-ghost " onClick={onReset}>Reset Filters X</button>)}
    </div>
  );
}
