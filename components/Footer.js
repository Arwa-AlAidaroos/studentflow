import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container footer-inner">
      <div className="footer-brand">
      <Link href="/" className="logo-brand">
          <div className="logo-icon">⚡</div>
          <span className="logo-text">StudentFlow</span>
        </Link>
        <div className="footer-desc">
          <p>The all-in-one learning workspace and task tracker for modern frontend development students.</p>
        </div>
        </div>
        
        <div className="footer-links-group">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/courses">All Courses</a></li>
            <li><a href="/tasks">Task Manager</a></li>
            <li><a href="/resources">Learning Resources</a></li>
          </ul>
          </div>
          <div className="footer-links-group">
          <h4>Capstone Project</h4>
          <ul>
            <li>Next.js 15+ App Router</li>
            <li> React 19 & Context API</li>
            <li>Vanilla CSS System</li>
            <li>Local Storage Sync</li>
            </ul>
        </div>
     
      </div>
       <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} StudentFlow. Frontend Web Development Final Project.</p>
        <div className="footer-badge">
          <p>Built for students with ❤️</p>
        </div>
      </div>
    </footer>
  );
}
