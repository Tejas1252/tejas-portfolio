import { profile, stats } from '../data'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__inner">
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

      <a href="#about" className="hero__scroll" aria-label="Scroll to about">
        <span />
      </a>
    </section>
  )
}
