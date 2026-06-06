import { useEffect, useState } from 'react'
import type { Theme } from '../useTheme'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

type NavProps = {
  theme: Theme
  onToggleTheme: () => void
}

export default function Nav({ theme, onToggleTheme }: Readonly<NavProps>) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__logo" onClick={() => setOpen(false)}>
          <span className="nav__logo-mark">TS</span>
          <span className="nav__logo-text">Tejas Shinde</span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a className="nav__cta" href="#resume" onClick={() => setOpen(false)}>
            Résumé
          </a>
        </nav>

        <div className="nav__controls">
          <button
            className="nav__theme"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            onClick={onToggleTheme}
          >
            {theme === 'dark' ? (
              // sun
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <circle cx="12" cy="12" r="4.2" fill="currentColor" />
                <g
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="12" y1="1.5" x2="12" y2="4" />
                  <line x1="12" y1="20" x2="12" y2="22.5" />
                  <line x1="1.5" y1="12" x2="4" y2="12" />
                  <line x1="20" y1="12" x2="22.5" y2="12" />
                  <line x1="4.2" y1="4.2" x2="6" y2="6" />
                  <line x1="18" y1="18" x2="19.8" y2="19.8" />
                  <line x1="19.8" y1="4.2" x2="18" y2="6" />
                  <line x1="6" y1="18" x2="4.2" y2="19.8" />
                </g>
              </svg>
            ) : (
              // moon
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"
                />
              </svg>
            )}
          </button>

          <button
            className={`nav__burger ${open ? 'is-open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
