import { experience } from '../data'
import Section from './Section'

export default function ExperienceSection() {
  return (
    <Section id="experience" eyebrow="Journey" title="Experience">
      <div className="timeline">
        {experience.map((job) => (
          <article key={job.role + job.company} className="timeline__item">
            <div className="timeline__dot" aria-hidden="true" />
            <div className="timeline__content">
              <div className="timeline__head">
                <h3 className="timeline__role">{job.role}</h3>
                <span className="timeline__period">{job.period}</span>
              </div>
              <p className="timeline__company">{job.company}</p>
              <ul className="timeline__points">
                {job.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
