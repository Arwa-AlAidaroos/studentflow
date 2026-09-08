"use client";
import { useState  } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";



export default function Navbar() {
  const [isMobileOpen,setIsMobileOpen]= useState(false);
 
  // TODO: Build your Navbar component here
  return (
    <header className="navbar-wrapper">
      <div className="container navbar-inner">
        <Link href="/" className="logo-brand">
          <div className="logo-icon">⚡</div>
          <span className="logo-text">Student<span className="logo-accent">Flow</span></span>
        </Link>
        {/* TODO: Add navigation links for '/', '/courses', '/tasks', '/resources' and a link button for '/tasks/new' */}
         <button className="mobile-toggle-btn"onClick={() => setIsMobileOpen(!isMobileOpen)}>☰</button>
        
        <div className="desktop-nav">
        <Link href="/" className="nav-link">Dashboard </Link>
        <Link href="/courses" className="nav-link">Courses </Link>
        <Link href="/tasks" className="nav-link">Tasks </Link>
        <Link href="/resources" className="nav-link">Resources </Link>
        </div>
        <div className="nav-actions">
          <Link href="/tasks/new" className="btn btn-primary" > + New Task</Link>
        </div>
      </div>
      {isMobileOpen && (<div className="mobile-nav-menu">
            <div className="mobile-nav-links">
              <Link href="/" className="mobile-nav-link">Dashboard </Link>
              <Link href="/courses" className="mobile-nav-link">Courses </Link>
              <Link href="/tasks" className="mobile-nav-link">Tasks </Link>
              <Link href="/resources" className="mobile-nav-link">Resources </Link>
              </div>
              <div className="mobile-create-btn">
              <Link href="/tasks/new" className="btn btn-primary" > + New Task</Link>
              </div>
          </div>)}
    </header>
  );
}
