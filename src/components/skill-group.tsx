import type { SkillGroup as SkillGroupType } from '../data/cv';

type SkillGroupProps = {
  group: SkillGroupType;
};

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <article className="skill-group">
      <h3>{group.title}</h3>
      <div className="chip-row">
        {group.skills.map((skill) => (
          <span className="chip" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
