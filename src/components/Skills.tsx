import { skills } from '../data'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Toolbox" title="Skills & Technologies">
      <div className="skills__grid">
        {skills.map((group) => (
          <div key={group.category} className="skill-card">
            <h3 className="skill-card__title">{group.category}</h3>
            <ul className="skill-card__tags">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
