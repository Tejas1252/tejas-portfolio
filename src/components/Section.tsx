import type { ReactNode } from 'react'
import { useReveal } from '../useReveal'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
}

export default function Section({ id, eyebrow, title, children }: SectionProps) {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section
      id={id}
      ref={ref}
      className={`section reveal ${visible ? 'is-visible' : ''}`}
    >
      <div className="section__head">
        <span className="section__eyebrow">{eyebrow}</span>
        <h2 className="section__title">{title}</h2>
      </div>
      {children}
    </section>
  )
}
