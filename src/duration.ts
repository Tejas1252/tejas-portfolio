const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

type MonthYear = { month: number; year: number }

function parseMonthYear(value: string): MonthYear | null {
  const [mon, yearStr] = value.trim().split(/\s+/)
  const month = MONTHS.indexOf(mon)
  const year = Number.parseInt(yearStr, 10)
  if (month < 0 || Number.isNaN(year)) return null
  return { month, year }
}

/** Formats a month count the way LinkedIn does, e.g. "1 yr 6 mos". */
function formatMonths(totalMonths: number): string {
  const months = Math.max(1, totalMonths)
  const yrs = Math.floor(months / 12)
  const mos = months % 12
  const parts: string[] = []
  if (yrs > 0) parts.push(`${yrs} ${yrs === 1 ? 'yr' : 'yrs'}`)
  if (mos > 0) parts.push(`${mos} ${mos === 1 ? 'mo' : 'mos'}`)
  return parts.join(' ')
}

/** Inclusive month span from a start date to now (matches LinkedIn). */
function monthsSince({ month, year }: MonthYear): number {
  const now = new Date()
  return (now.getFullYear() - year) * 12 + (now.getMonth() - month) + 1
}

const isPresent = (period: string) => /present/i.test(period)
const startOf = (period: string) => parseMonthYear(period.split(/[–-]/)[0])

/**
 * Returns a role's duration. If the role is ongoing ("… – Present"), the
 * duration is computed live from the start date so it never goes stale;
 * otherwise the provided static value is used.
 */
export function roleDuration(period: string, fallback?: string): string | undefined {
  if (!isPresent(period)) return fallback
  const start = startOf(period)
  return start ? formatMonths(monthsSince(start)) : fallback
}

/**
 * Returns a company's total duration. If any role is ongoing, it's computed
 * live from the earliest role start date; otherwise the static value is used.
 */
export function companyDuration(
  periods: string[],
  fallback?: string,
): string | undefined {
  if (!periods.some(isPresent)) return fallback
  const starts = periods
    .map(startOf)
    .filter((s): s is MonthYear => s !== null)
    .map((s) => s.year * 12 + s.month)
  if (starts.length === 0) return fallback
  const earliest = Math.min(...starts)
  const now = new Date()
  const months = now.getFullYear() * 12 + now.getMonth() - earliest + 1
  return formatMonths(months)
}
