import { useState } from 'react'
import { profile } from './data'

/**
 * Shared "email me" behaviour: copy the address to the clipboard (so the
 * action always succeeds, even with no desktop mail client) and also try
 * to open the user's mail app. Returns a `copied` flag for UI feedback.
 */
export function useEmailAction() {
  const [copied, setCopied] = useState(false)

  const trigger = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      // Clipboard API unavailable (e.g. non-secure context) — fall through.
    }
    window.location.href = `mailto:${profile.email}`
  }

  return { copied, trigger }
}
