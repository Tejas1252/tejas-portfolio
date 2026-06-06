import { experience } from '../data'
import Section from './Section'
import { useSpotlight } from '../spotlight'

export default function ExperienceSection() {
  const timelineRef = useSpotlight<HTMLDivElement>()

  return (
    <Section id="experience" eyebrow="Journey" title="Experience">
      <div className="timeline" ref={timelineRef}>
        {experience.map((company) => (
          <div key={company.company} className="xp-company">
            <div className="xp-company__head">
              <h3 className="xp-company__name">{company.company}</h3>
              <p className="xp-company__meta">
                {[company.duration, company.location].filter(Boolean).join(' · ')}
              </p>
            </div>

            <div className="xp-roles">
              {company.roles.map((role) => (
                <article key={role.title + role.period} className="xp-role">
                  <span className="xp-role__dot" aria-hidden="true" />
                  <div className="xp-role__body spot">
                    <div className="xp-role__head">
                      <h4 className="xp-role__title">{role.title}</h4>
                      <span className="xp-role__period">
                        {role.period}
                        {role.duration ? ` · ${role.duration}` : ''}
                      </span>
                    </div>

                    {(role.employmentType || role.location) && (
                      <p className="xp-role__sub">
                        {[role.employmentType, role.location]
                          .filter(Boolean)
                          .join(' · ')}
                      </p>
                    )}

                    {role.points && (
                      <ul className="xp-role__points">
                        {role.points.map((p, i) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ul>
                    )}

                    {role.skills && (
                      <ul className="xp-role__skills">
                        {role.skills.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
