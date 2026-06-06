/**
 * Picks a random dark-friendly accent palette on every visit and applies it
 * by writing the accent CSS custom properties on :root. The page background
 * stays dark; only the accent (gradients, glows, highlights) changes.
 */

type Palette = {
  name: string
  brand: string
  brandL: string
  brand2: string
  brand2L: string
}

// Each palette is a deep + light shade for two accent colors.
const PALETTES: Palette[] = [
  { name: 'indigo→cyan', brand: '#6366f1', brandL: '#818cf8', brand2: '#06b6d4', brand2L: '#22d3ee' },
  { name: 'violet→pink', brand: '#8b5cf6', brandL: '#a78bfa', brand2: '#ec4899', brand2L: '#f472b6' },
  { name: 'emerald→teal', brand: '#10b981', brandL: '#34d399', brand2: '#0ea5e9', brand2L: '#38bdf8' },
  { name: 'orange→rose', brand: '#f97316', brandL: '#fb923c', brand2: '#f43f5e', brand2L: '#fb7185' },
  { name: 'blue→sky', brand: '#3b82f6', brandL: '#60a5fa', brand2: '#06b6d4', brand2L: '#22d3ee' },
  { name: 'fuchsia→indigo', brand: '#d946ef', brandL: '#e879f9', brand2: '#6366f1', brand2L: '#818cf8' },
  { name: 'amber→red', brand: '#f59e0b', brandL: '#fbbf24', brand2: '#ef4444', brand2L: '#f87171' },
  { name: 'teal→lime', brand: '#14b8a6', brandL: '#2dd4bf', brand2: '#84cc16', brand2L: '#a3e635' },
]

const STORAGE_KEY = 'accent-index'

function hexToRgb(hex: string): string {
  const n = Number.parseInt(hex.slice(1), 16)
  const r = (n >> 16) & 255
  const g = (n >> 8) & 255
  const b = n & 255
  return `${r}, ${g}, ${b}`
}

export function applyRandomTheme() {
  const last = Number.parseInt(localStorage.getItem(STORAGE_KEY) ?? '-1', 10)

  let index = Math.floor(Math.random() * PALETTES.length)
  // Avoid repeating the same palette two visits in a row.
  if (PALETTES.length > 1) {
    while (index === last) index = Math.floor(Math.random() * PALETTES.length)
  }
  localStorage.setItem(STORAGE_KEY, String(index))

  const p = PALETTES[index]
  const root = document.documentElement
  root.style.setProperty('--brand', p.brand)
  root.style.setProperty('--brand-l', p.brandL)
  root.style.setProperty('--brand-2', p.brand2)
  root.style.setProperty('--brand2-l', p.brand2L)
  root.style.setProperty('--brand-rgb', hexToRgb(p.brand))
  root.style.setProperty('--brand-l-rgb', hexToRgb(p.brandL))
  root.style.setProperty('--brand-2-rgb', hexToRgb(p.brand2))
  root.style.setProperty('--brand2-l-rgb', hexToRgb(p.brand2L))
}
