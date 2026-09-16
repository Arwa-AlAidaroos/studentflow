import Link from "next/link";
export default function ResourceCard({resource})
{
    return(
        <div className="card resource-card">
            <div className="resource-card-header">
                <span className="badge badge-category">{resource.category}</span>
                <span className="text-muted">⏱️ {resource.readTime}</span>
            </div>
            <h3 className="resource-card-title">{resource.title}</h3>
            <p className="resource-card-desc">{resource.description}</p>
        
             <div className="resource-card-footer">
                <span className="resource-author">{resource.author}</span>
                <Link className="btn btn-primary btn-sm" href={resource.url}>Read Article ↗</Link>

             </div>
        </div>
    );
}