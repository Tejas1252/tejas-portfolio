import { profile } from '../data'
import Section from './Section'
import EmailButton from './EmailButton'
import { useSpotlight } from '../spotlight'

export default function Contact() {
  const cardsRef = useSpotlight<HTMLDivElement>()

  return (
    <Section id="contact" eyebrow="Say Hello" title="Let's Build Something">
      <div className="contact">
        <p className="contact__lead">
          I'm open to interesting frontend roles and freelance collaborations. The
          fastest way to reach me is email — I usually reply within a day.
        </p>

        <div className="contact__cards" ref={cardsRef}>
          <a className="contact__card spot" href={`mailto:${profile.email}`}>
            <span className="contact__card-label">Email</span>
            <span className="contact__card-value">{profile.email}</span>
          </a>
          <a
            className="contact__card spot"
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
          >
            <span className="contact__card-label">Phone</span>
            <span className="contact__card-value">{profile.phone}</span>
          </a>
          <a
            className="contact__card spot"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact__card-label">GitHub</span>
            <span className="contact__card-value">@Tejas1252</span>
          </a>
          <a
            className="contact__card spot"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact__card-label">LinkedIn</span>
            <span className="contact__card-value">Connect with me</span>
          </a>
          <div className="contact__card contact__card--static">
            <span className="contact__card-label">Location</span>
            <span className="contact__card-value">{profile.location}</span>
          </div>
        </div>

        <EmailButton className="contact__main-cta" />
      </div>
    </Section>
  )
}
