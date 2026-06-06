import { experience } from '../data'
import Section from './Section'
import { useSpotlight } from '../spotlight'
import { roleDuration, companyDuration } from '../duration'
import SkillIcon from '../skillIcons'
import CompanyLogo from './CompanyLogo'

export default function ExperienceSection() {
  const timelineRef = useSpotlight<HTMLDivElement>()

  return (
    <Section id="experience" eyebrow="Journey" title="Experience">
      <div className="timeline" ref={timelineRef}>
        {experience.map((company) => {
          const totalDuration = companyDuration(
            company.roles.map((r) => r.period),
            company.duration,
          )
          return (
          <div key={company.company} className="xp-company">
            <div className="xp-company__head">
              <CompanyLogo
                name={company.company}
                logo={company.logo}
                initials={company.initials}
                accent={company.accent}
              />
              <div>
                <h3 className="xp-company__name">{company.company}</h3>
                <p className="xp-company__meta">
                  {[totalDuration, company.location].filter(Boolean).join(' · ')}
                </p>
              </div>
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
                        {(() => {
                          const d = roleDuration(role.period, role.duration)
                          return d ? ` · ${d}` : ''
                        })()}
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
                          <li key={s}>
                            <SkillIcon name={s} className="skill-icon" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
          )
        })}
      </div>
    </Section>
  )
}
