import { useState } from 'react'
import { profile } from '../data'

type EmailButtonProps = {
  className?: string
}

export default function EmailButton({ className = '' }: Readonly<EmailButtonProps>) {
  const [copied, setCopied] = useState(false)

  const handleClick = async () => {
    // 1) Copy the address so the action always succeeds, even when no
    //    desktop mail client is registered to handle mailto: links.
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      // Clipboard API may be blocked (e.g. non-secure context) — ignore.
    }
    // 2) Still try to open the user's mail client.
    window.location.href = `mailto:${profile.email}`
  }

  return (
    <button
      type="button"
      className={`btn btn--primary email-btn ${copied ? 'is-copied' : ''} ${className}`}
      onClick={handleClick}
    >
      <span className="email-btn__icon" aria-hidden="true">
        {copied ? (
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 12.5l5 5L20 6.5"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 6.5h18v11H3zM3 7l9 6 9-6"
            />
          </svg>
        )}
      </span>
      <span>{copied ? 'Address copied!' : 'Email me'}</span>
      <span className="email-btn__live" role="status" aria-live="polite">
        {copied ? `${profile.email} copied to clipboard` : ''}
      </span>
    </button>
  )
}
