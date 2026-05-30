import { Database, ExternalLink } from 'lucide-react';
import type { Project } from '../data/cv';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-icon" aria-hidden="true">
        <Database size={28} />
      </div>
      <p className="period">{project.period}</p>
      <h3>{project.name}</h3>
      <p>{project.summary}</p>
      <ul>
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      <div className="chip-row">
        {project.tools.map((tool) => (
          <span className="chip" key={tool}>
            {tool}
          </span>
        ))}
      </div>
      <a className="text-link" href="#contact">
        Trao đổi về project <ExternalLink size={16} aria-hidden="true" />
      </a>
    </article>
  );
}
