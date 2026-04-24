'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function CountingDown({ isOpen, isMobile }: Props) {
  const bgImage = isMobile ? "/images/ryan-dan-catarina/bg-counting-down-mobile.png" : "/images/ryan-dan-catarina/bg-counting-down.png"
  const targetDate = new Date('2026-05-16T00:00:00')

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
      {isOpen ? (
        <section id="counting-down" className="counting-down relative w-full h-[504px] md:h-[946px] bg-cover bg-bottom md:bg-top bg-no-repeat" style={{ backgroundImage: bgImage ? `url('${bgImage}')` : 'none' }}>
          <div className="absolute inset-0 z-[1] bg-[#00000059]" />
          <div className="relative z-10 flex flex-col items-center h-full font-bellmt text-white">
            <div className="absolute bottom-[84px] md:bottom-[126px] text-center">
              <h2 className="text-2xl md:text-5xl font-bold leading-[111%] uppercase animate" data-animate="fade-up">counting down</h2>
              <div className="flex gap-2.5 md:gap-[24.73px] mx-auto mt-[27px] md:mt-[52px] animate" data-animate="fade-up">
                <TimeBox value={timeLeft.days} label="days" />
                <TimeBox value={timeLeft.hours} label="hours" />
                <TimeBox value={timeLeft.minutes} label="minutes" />
                <TimeBox value={timeLeft.seconds} label="seconds" />
              </div>
              <Link href="https://www.google.com/calendar/render?action=TEMPLATE&text=Wedding%20Adam%20%26%20Yohanna&dates=20260516T020000Z/20260502T050000Z&details=Join%20our%20wedding&location=Jakarta" target="_blank" className="flex justify-center items-center w-[205px] md:w-[321px] h-[33px] md:h-[40px] rounded-[73px] bg-[#60564D] mx-auto mt-[27px] md:mt-[52px] animate" data-animate="fade-up">
                <span className="text-xs md:text-lg font-semibold leading-[17px] uppercase">mark your calender</span>
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}

function TimeBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center w-[49px] md:w-[123px] h-[48px] md:h-[121px] rounded-[10px] md:rounded-[25.05px] bg-[#60564D]/40 border md:border-[2.51px] border-[#60564D] shadow-[0.47px 1.89px 4.27px 0.94px #00000026]">
      <p className="font-normal text-[32px] md:text-[84px] leading-[104%]">
        {value}
      </p>
      <p className="font-normal text-[5.66px] md:text-[14.17px] leading-none">
        {label}
      </p>
    </div>
  )
}