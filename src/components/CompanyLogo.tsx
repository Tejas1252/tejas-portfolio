import { useState } from 'react'

type CompanyLogoProps = {
  name: string
  logo?: string
  initials?: string
  accent?: string
}

function deriveInitials(name: string): string {
  const words = name
    .replace(/[(].*?[)]/g, '') // drop parenthetical asides
    .split(/[\s&]+/)
    .filter((w) => w.length > 1 && /[A-Za-z]/.test(w[0]))
  const letters = words.slice(0, 2).map((w) => w[0].toUpperCase())
  return letters.join('') || name.slice(0, 2).toUpperCase()
}

export default function CompanyLogo({
  name,
  logo,
  initials,
  accent = '#6366f1',
}: Readonly<CompanyLogoProps>) {
  const [imgOk, setImgOk] = useState(Boolean(logo))
  const label = initials ?? deriveInitials(name)

  if (logo && imgOk) {
    return (
      <span className="company-logo company-logo--img">
        <img src={logo} alt={`${name} logo`} onError={() => setImgOk(false)} />
      </span>
    )
  }

  return (
    <span
      className="company-logo"
      style={{ background: `linear-gradient(135deg, ${accent}, ${accent}cc)` }}
      aria-hidden="true"
    >
      {label}
    </span>
  )
}
