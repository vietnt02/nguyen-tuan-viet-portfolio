import type { ReactNode } from 'react';

type SectionProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  id?: string;
};

export function Section({ eyebrow, title, children, id }: SectionProps) {
  return (
    <section className="section" id={id}>
      <div className="section-heading">
        <span>{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}
