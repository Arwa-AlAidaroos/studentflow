import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container status-screen">
      <div className="status-icon">🔍</div>

      <h2 className="status-title">404 - Page Not Found</h2>

      <p className="status-desc">
       The page or resource you are looking for doesn&apos;t exist or may have been moved.
      </p>

      <Link href="/" className="btn btn-primary">
        Return to Dashboard
      </Link>
    </div>
  );
}