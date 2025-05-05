import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import moment, { type Moment } from 'moment-timezone'
import _ from 'lodash'

import { TimeFormat, type TimeData } from '@/types/countdownTypes'
import { getTimeData } from '@/utils/getTimeData'

import TEXT from '@/texts.json'

const LABELS: Record<string, string> = {
  days: TEXT.time.days,
  hours: TEXT.time.hours,
  minutes: TEXT.time.minutes,
}

export const CountdownTimer: React.FC = () => {
  const [timeNow, setTimeNow] = useState<Moment>(
    moment.tz(moment(), 'Asia/Jerusalem')
  )
  const [timeFormat, setTimeFormat] = useState<TimeFormat>(TimeFormat.DHM)

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the time every second
      setTimeNow(moment.tz(moment(), 'Asia/Jerusalem'))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const timeData: TimeData = getTimeData(timeNow, timeFormat)

  const handleClick = () => {
    const newTimeFormat =
      timeFormat === TimeFormat.DHM ? TimeFormat.H : TimeFormat.DHM
    setTimeFormat(newTimeFormat)
  }
  return (
    <Display onClick={handleClick}>
      {_.map(timeData, (value, key: keyof typeof LABELS) => (
        <TimeLabel key={key}>
          {LABELS[key] && (
            <>
              <div>{LABELS[key]}</div>
              <div>{value}</div>
            </>
          )}
        </TimeLabel>
      ))}
    </Display>
  )
}
const Display = styled.div`
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  color: white;
  text-align: center;
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: row;
  place-content: center;
  gap: 2rem;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    font-size: 1.2rem;
    gap: 0.5rem;
  }
`

const TimeLabel = styled.div`
  font-size: 1.5rem;
  display: grid;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`
