"use client";

export default function SearchBar({ value, onChange,category,onCategoryChange, placeholder = "Search..." }) {
  
  return (
    <div className="search-and-category" >
      <div className="search-bar-wrapper">
      <span className="search-icon">🔍</span>
      <input className="search-input" value={value} onChange={onChange} placeholder={placeholder}/>
      <button className="search-clear-btn" onClick={() => onChange({ target: { value: "" } })}>X</button>
      </div>
  
        {onCategoryChange && (  <div className="filter-group">
          <label className="filter-label">category</label>
            <div className="filter-buttons">
          <button className={`filter-btn ${category === "ALL" ? "active" : ""}`} onClick={() => onCategoryChange("ALL")}>ALL</button>
          <button className={`filter-btn ${category === "frontend" ? "active" : ""}`} onClick={() => onCategoryChange("frontend")}>FRONTEND</button>
          <button className={`filter-btn ${category === "javascript" ? "active" : ""}`} onClick={() => onCategoryChange("javascript")}>JAVASCRIPT</button>
          <button className={`filter-btn ${category === "react" ? "active" : ""}`} onClick={() => onCategoryChange("react")}>REACT</button>
          <button className={`filter-btn ${category === "nextjs" ? "active" : ""}`} onClick={() => onCategoryChange("nextjs")}>NEXTJS</button>
         </div>
        
        </div>
       
        
      )}
      
    </div>
  );
}
