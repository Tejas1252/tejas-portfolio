import {
  profile,
  skills,
  experience,
  projects,
  education,
} from '../data'
import { roleDuration, companyDuration } from '../duration'

export default function Resume() {
  return (
    <div className="resume">
      <div className="resume__bar">
        <a className="btn btn--ghost" href="#top">
          ← Back to site
        </a>
        <button className="btn btn--primary" onClick={() => window.print()}>
          Download PDF
        </button>
      </div>

      <article className="resume__sheet">
        <header className="resume__header">
          <h1>{profile.name}</h1>
          <p className="resume__role">
            {profile.title} · {profile.tagline}
          </p>
          <p className="resume__contact">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span>·</span>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
            <span>·</span>
            <span>{profile.location}</span>
            <span>·</span>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <span>·</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p>
        </header>

        <section className="resume__section">
          <h2>Summary</h2>
          <p>{profile.summary}</p>
        </section>

        <section className="resume__section">
          <h2>Skills</h2>
          <ul className="resume__skills">
            {skills.map((g) => (
              <li key={g.category}>
                <strong>{g.category}:</strong> {g.items.join(', ')}
              </li>
            ))}
          </ul>
        </section>

        <section className="resume__section">
          <h2>Experience</h2>
          {experience.map((company) => (
            <div key={company.company} className="resume__company">
              <div className="resume__job-head">
                <strong>{company.company}</strong>
                <span>
                  {[
                    companyDuration(
                      company.roles.map((r) => r.period),
                      company.duration,
                    ),
                    company.location,
                  ]
                    .filter(Boolean)
                    .join(' · ')}
                </span>
              </div>
              {company.roles.map((role) => {
                const dur = roleDuration(role.period, role.duration)
                return (
                <div key={role.title + role.period} className="resume__job">
                  <div className="resume__job-head">
                    <strong>{role.title}</strong>
                    <span>
                      {role.period}
                      {dur ? ` · ${dur}` : ''}
                    </span>
                  </div>
                  {role.points && (
                    <ul>
                      {role.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  )}
                </div>
                )
              })}
            </div>
          ))}
        </section>

        <section className="resume__section">
          <h2>Key Projects</h2>
          {projects.map((p) => (
            <div key={p.name} className="resume__job">
              <div className="resume__job-head">
                <strong>{p.name}</strong>
                {p.live && (
                  <span>
                    <a href={p.live} target="_blank" rel="noreferrer">
                      {p.live.replace(/^https?:\/\//, '')}
                    </a>
                  </span>
                )}
              </div>
              <p className="resume__proj-tech">{p.tech.join(' · ')}</p>
              <ul>
                {p.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume__section">
          <h2>Education</h2>
          {education.map((e) => (
            <div key={e.degree} className="resume__job-head">
              <strong>{e.degree} — {e.school}</strong>
              <span>{e.period}</span>
            </div>
          ))}
        </section>
      </article>
    </div>
  )
}
