import { useEffect, useRef } from 'react'

/**
 * Cursor-following glow for cards. Attaches a single delegated mousemove
 * listener to a container and writes the pointer position (relative to the
 * hovered `.spot` card) into CSS custom properties (--mx, --my) that a
 * radial-gradient highlight reads. One listener per grid — no per-card
 * handlers, and nothing attached to non-interactive elements in JSX.
 */
export function useSpotlight<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (window.matchMedia('(pointer: coarse)').matches) return // skip on touch

    const onMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const card = target.closest<HTMLElement>('.spot')
      if (!card || !node.contains(card)) return
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`)
      card.style.setProperty('--my', `${e.clientY - rect.top}px`)
    }

    node.addEventListener('mousemove', onMove)
    return () => node.removeEventListener('mousemove', onMove)
  }, [])

  return ref
}
