"use client";

import { useEffect, useState } from "react";
import ResourceCard from "@/components/ResourceCard";

export default function ResourcesPage() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

    useEffect(() => {
    async function fetchResources() {
      try {
        const response = await fetch("/api/resources");

        if (!response.ok) {
          throw new Error("Failed to fetch resources");
        }

        const data = await response.json();
        setResources(data.resources);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchResources();
  }, []);
  return (
    <div className="container">
      <div className="page-header">
        <div>
        <h1 className="page-title">
          Learning Resources & Articles
        </h1>
         <p className="page-subtitle">
          Curated web development articles fetched from our internal API route.
         </p>
         </div>
      </div>
     
{loading && (
  <div className="status-screen">
    <div className="status-icon-sm">⏳</div>
    <h3>Loading Resources...</h3>
    <p className="text-muted">
      Connecting to the internal API route and articles.
    </p>
  </div>
)}

{error && (
  <div className="status-screen">
    <div className="status-icon">⚠️</div>
    <h3>Failed to Load Resources</h3>
    <p className="text-muted">{error}</p>
  </div>
)}

{!loading && !error && (
  <div className="cards-grid">
    {resources.map((resource) => (
      <ResourceCard
        key={resource.id}
        resource={resource}
      />
    ))}
  </div>
)}
       </div>
  );
}
