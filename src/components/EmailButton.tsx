import { profile } from '../data'
import { useEmailAction } from '../useEmailAction'

type EmailButtonProps = {
  className?: string
}

export default function EmailButton({ className = '' }: Readonly<EmailButtonProps>) {
  const { copied, trigger } = useEmailAction()

  return (
    <button
      type="button"
      className={`btn btn--primary email-btn ${copied ? 'is-copied' : ''} ${className}`}
      onClick={trigger}
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
