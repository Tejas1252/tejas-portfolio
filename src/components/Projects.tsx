import { projects } from '../data'
import Section from './Section'
import { useSpotlight } from '../spotlight'

export default function Projects() {
  const gridRef = useSpotlight<HTMLDivElement>()

  return (
    <Section id="projects" eyebrow="Selected Work" title="Projects">
      <div className="projects__grid" ref={gridRef}>
        {projects.map((p) => (
          <article key={p.name} className="project-card spot">
            <div className="project-card__body">
              <h3 className="project-card__title">{p.name}</h3>
              <p className="project-card__blurb">{p.blurb}</p>
              <ul className="project-card__points">
                {p.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
            <div className="project-card__footer">
              <ul className="project-card__tech">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {(p.live || p.github) && (
                <div className="project-card__links">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer">
                      Live ↗
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer">
                      Code ↗
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
