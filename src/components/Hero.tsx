import { useState } from 'react'
import { profile, stats, yearsExperience } from '../data'
import { useTilt } from '../useTilt'
import SkillIcon from '../skillIcons'

const photoSrc = `${import.meta.env.BASE_URL}tejas.jpg`

const badges: { label: string; icon: string | null }[] = [
  { label: 'React', icon: 'React' },
  { label: 'TypeScript', icon: 'TypeScript' },
  { label: `${yearsExperience}+ yrs`, icon: null },
  { label: 'AI', icon: 'AI' },
  { label: 'MERN', icon: 'MERN' },
  { label: 'Node.js', icon: 'Node.js' },
]

export default function Hero() {
  const tiltRef = useTilt<HTMLDivElement>()
  const [photoOk, setPhotoOk] = useState(true)

  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__hello">Hi, I'm</p>
          <h1 className="hero__name">{profile.name}</h1>
          <h2 className="hero__role">
            <span className="hero__role-grad">{profile.title}</span>
          </h2>
          <p className="hero__tagline">{profile.tagline}</p>
          <p className="hero__summary">{profile.summary}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View my work
            </a>
            <a className="btn btn--ghost" href="#resume">
              Résumé
            </a>
            <a
              className="btn btn--ghost"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>

          <ul className="hero__stats">
            {stats.map((s) => (
              <li key={s.label}>
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__portrait" aria-hidden="true">
          <div className="hero__portrait-inner" ref={tiltRef}>
            <div className="hero__photo">
              {photoOk ? (
                <img
                  src={photoSrc}
                  alt="Tejas Shinde"
                  loading="eager"
                  onError={() => setPhotoOk(false)}
                />
              ) : (
                <span className="hero__photo-fallback">TS</span>
              )}
            </div>
            {badges.map((b, i) => (
              <span key={b.label} className={`hero__badge hero__badge--${i + 1}`}>
                {b.icon && <SkillIcon name={b.icon} className="skill-icon" />}
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to about">
        <span />
      </a>
    </section>
  )
}
