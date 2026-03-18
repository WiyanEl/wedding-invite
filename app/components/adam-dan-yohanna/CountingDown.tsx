'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CountingDown() {
  const targetDate = new Date('2026-05-02T00:00:00')

  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance <= 0) {
        clearInterval(interval)
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((distance / (1000 * 60)) % 60)
      const seconds = Math.floor((distance / 1000) % 60)

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="counting-down" className="counting-down relative w-full min-h-min bg-cover bg-center">
      <div className="flex flex-col items-center h-full py-[167px] text-[#FDFDFD] text-center">
        <h3 className="font-cormorant font-bold text-2xl leading-[26px] uppercase animate-fade-up">
          Counting Down
        </h3>
        <div className="flex gap-[33px] mt-[34px] animate-fade-up">
          <TimeBox value={timeLeft.days} label="days" />
          <TimeBox value={timeLeft.hours} label="hours" />
          <TimeBox value={timeLeft.minutes} label="minutes" />
          <TimeBox value={timeLeft.seconds} label="seconds" />
        </div>
        <Link href="https://www.google.com/calendar/render?action=TEMPLATE&text=Wedding%20Adam%20%26%20Yohanna&dates=20260502T020000Z/20260502T050000Z&details=Join%20our%20wedding&location=Jakarta" target="_blank" className="bg-[#9B3A29] w-[160px] h-[29px] flex items-center justify-center rounded-[5px] text-xs text-[#FEFBF0] uppercase mt-[48px] animate-fade-up">
          mark your calender
        </Link>
      </div>
    </section>
  )
}

function TimeBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-cormorant font-semibold text-5xl leading-none">
        {value}
      </p>
      <p className="font-figtree font-bold text-[8px] uppercase mt-[6px]">
        {label}
      </p>
    </div>
  )
}