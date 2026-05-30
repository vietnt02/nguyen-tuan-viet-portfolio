import type { TimelineEntry } from '../data/cv';

type TimelineItemProps = {
  entry: TimelineEntry;
};

export function TimelineItem({ entry }: TimelineItemProps) {
  return (
    <article className="timeline-item">
      <div className="timeline-dot" aria-hidden="true" />
      <div>
        <p className="period">{entry.period}</p>
        <h3>{entry.title}</h3>
        <p className="organization">{entry.organization}</p>
        <ul>
          {entry.description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
