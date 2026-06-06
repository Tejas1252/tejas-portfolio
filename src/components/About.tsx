import { education, activities } from '../data'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" eyebrow="Background" title="About Me">
      <div className="about__grid">
        <div className="about__col">
          <h3 className="about__subtitle">What I do</h3>
          <p className="about__text">
            I build scalable, accessible, and high-performance interfaces with React
            and TypeScript. Over the past 5 years I've shipped e-learning products used
            by 300K+ learners — owning reusable component systems, taming complex async
            state with Redux-Saga, and squeezing out meaningful performance wins.
          </p>
          <p className="about__text">
            I care about clean architecture, accessibility (WCAG, screen readers), and
            developer experience — and I lean on modern AI tooling to ship faster
            without compromising quality.
          </p>

          <h3 className="about__subtitle">Leadership & Activities</h3>
          <ul className="about__list">
            {activities.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>

        <div className="about__col">
          <h3 className="about__subtitle">Education</h3>
          <div className="about__edu">
            {education.map((e) => (
              <div key={e.degree} className="about__edu-item">
                <span className="about__edu-period">{e.period}</span>
                <strong className="about__edu-degree">{e.degree}</strong>
                <span className="about__edu-school">{e.school}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
