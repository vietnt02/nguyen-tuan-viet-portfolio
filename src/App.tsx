import { ArrowDownToLine, Send } from 'lucide-react';
import { AnalystVisual } from './components/analyst-visual';
import { ProjectCard } from './components/project-card';
import { Section } from './components/section';
import { SkillGroup } from './components/skill-group';
import { TimelineItem } from './components/timeline-item';
import {
  activities,
  certificates,
  contactLinks,
  education,
  experience,
  focusAreas,
  profile,
  projects,
  skillGroups,
  stats,
} from './data/cv';

function App() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#experience">Kinh nghiệm</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>

      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio / Data Analyst CV</p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">
              <Send size={18} aria-hidden="true" />
              Liên hệ tuyển dụng
            </a>
            <a className="button secondary" href={profile.cvPath} download>
              <ArrowDownToLine size={18} aria-hidden="true" />
              Tải CV PDF
            </a>
          </div>
        </div>
        <AnalystVisual />
      </header>

      <section className="stats-band" aria-label="Resume highlights">
        {stats.map((item) => (
          <article key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <Section eyebrow="Work" title="Kinh nghiệm nổi bật" id="experience">
        <div className="timeline">
          {experience.map((entry) => (
            <TimelineItem entry={entry} key={`${entry.organization}-${entry.title}`} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Projects" title="Portfolio project" id="projects">
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Education" title="Học vấn và hoạt động">
        <div className="two-column">
          <div className="timeline compact">
            {education.map((entry) => (
              <TimelineItem entry={entry} key={entry.organization} />
            ))}
          </div>
          <div className="timeline compact">
            {activities.map((entry) => (
              <TimelineItem entry={entry} key={`${entry.organization}-${entry.title}`} />
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Stack" title="Kỹ năng phân tích dữ liệu" id="skills">
        <div className="skill-layout">
          {skillGroups.map((group) => (
            <SkillGroup group={group} key={group.title} />
          ))}
        </div>
        <div className="focus-grid">
          {focusAreas.map(({ label, Icon }) => (
            <span key={label}>
              <Icon size={18} aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>
      </Section>

      <Section eyebrow="Proof" title="Chứng chỉ">
        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <article key={certificate.name}>
              <span>{certificate.date}</span>
              <h3>{certificate.name}</h3>
              <p>{certificate.issuer}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Sẵn sàng trao đổi về cơ hội Data Analyst.</h2>
          <p>
            Thông tin dưới đây lấy trực tiếp từ CV PDF. Nút tải CV giữ bản gốc
            để nhà tuyển dụng có thể lưu và chia sẻ nội bộ.
          </p>
        </div>
        <div className="contact-grid">
          {contactLinks.map(({ href, label, value, Icon }) => (
            <a
              href={href}
              key={label}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              target={href.startsWith('http') ? '_blank' : undefined}
            >
              <Icon size={20} aria-hidden="true" />
              <span>{label}</span>
              <strong>{value}</strong>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
