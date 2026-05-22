'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function CountingDown({ isOpen, isMobile }: Props) {
  const targetDate = new Date('2026-07-04T00:00:00')

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
    <>
      <section id="counting-down" className="counting-down relative w-full h-[169.3px] bg-[#6C7852] shadow-[0px_3.55px_15.07px_0px_#00000033]">
        <div className="relative h-full pt-[27px] pb-[29.25px] text-center font-sorts text-[#FEF8EF]">
          <h2 className="text-[21.27px] font-medium leading-none tracking-[0.89px] uppercase animate" data-animate="fade-up">Saturday, 04 july 2026</h2>
          <div className="flex gap-[17.73px] justify-center mt-[17.32px]">
            <TimeBox value={timeLeft.days} label="day" />
            <TimeBox value={timeLeft.hours} label="hour" />
            <TimeBox value={timeLeft.minutes} label="minutes" />
            <TimeBox value={timeLeft.seconds} label="second" />
          </div>
        </div>
      </section>
    </>
  )
}

function TimeBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-2 items-center w-[66.48px] h-[69.14px] rounded-[14.18px] bg-white shadow-[4px_4px_7.4px_0px_#00000040] pt-2 text-[#645353] animate" data-animate="zoom-in">
      <p className="font-medium text-[34px] leading-none tracking-[0.89px]">
        {value}
      </p>
      <p className="font-medium text-[10px] leading-none capitalize">
        {label}
      </p>
    </div>
  )
}