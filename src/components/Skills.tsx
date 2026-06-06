import { skills } from '../data'
import Section from './Section'
import { useSpotlight } from '../spotlight'
import SkillIcon from '../skillIcons'

export default function Skills() {
  const gridRef = useSpotlight<HTMLDivElement>()

  return (
    <Section id="skills" eyebrow="Toolbox" title="Skills & Technologies">
      <div className="skills__grid" ref={gridRef}>
        {skills.map((group) => (
          <div key={group.category} className="skill-card spot">
            <h3 className="skill-card__title">{group.category}</h3>
            <ul className="skill-card__tags">
              {group.items.map((item) => (
                <li key={item}>
                  <SkillIcon name={item} className="skill-icon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
