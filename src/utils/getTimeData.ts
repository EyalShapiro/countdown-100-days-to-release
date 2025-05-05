import moment, { type Moment } from 'moment-timezone'
import { TimeFormat, type TimeData } from '../types/countdownTypes'

export function getTimeData(timeNow: Moment, format: TimeFormat): TimeData {
  const diff = moment.duration(getEndDate().diff(timeNow))

  if (format === TimeFormat.H) {
    return { hours: Math.floor(diff.asHours()) }
  }

  return {
    days: Math.floor(diff.asDays()),
    hours: Math.floor(diff.hours()),
    minutes: Math.floor(diff.minutes()),
  }
}
export const getEndDate = () =>
  moment.tz('2025-08-13T08:00:00', 'Asia/Jerusalem')
