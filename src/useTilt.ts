import { useEffect, useRef } from 'react'

/**
 * Subtle 3D tilt that follows the cursor. Writes rotation into CSS custom
 * properties (--rx, --ry) read by a `transform: rotateX()/rotateY()`. Uses a
 * ref + native listeners (no JSX handlers on non-interactive elements), and
 * is disabled on touch devices and when reduced motion is preferred.
 */
export function useTilt<T extends HTMLElement = HTMLDivElement>(max = 9) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width - 0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5
      node.style.setProperty('--rx', `${(-py * max).toFixed(2)}deg`)
      node.style.setProperty('--ry', `${(px * max).toFixed(2)}deg`)
    }
    const reset = () => {
      node.style.setProperty('--rx', '0deg')
      node.style.setProperty('--ry', '0deg')
    }

    node.addEventListener('mousemove', onMove)
    node.addEventListener('mouseleave', reset)
    return () => {
      node.removeEventListener('mousemove', onMove)
      node.removeEventListener('mouseleave', reset)
    }
  }, [max])

  return ref
}
