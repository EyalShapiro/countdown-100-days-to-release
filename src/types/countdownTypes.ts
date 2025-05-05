export enum TimeFormat {
  DHM = 'dhm',
  H = 'h',
}

export type TimeData = { days?: number; hours: number; minutes?: number }

export type TimeDataKeys = 'days' | 'hours' | 'minutes'
