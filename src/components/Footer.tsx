import { profile } from '../data'
import { useEmailAction } from '../useEmailAction'

export default function Footer() {
  const { copied, trigger } = useEmailAction()

  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript & Vite.
      </p>
      <div className="footer__links">
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <button type="button" className="footer__email" onClick={trigger}>
          {copied ? 'Copied ✓' : 'Email'}
        </button>
        <a href="#top" className="footer__top">
          Top ↑
        </a>
      </div>
    </footer>
  )
}
