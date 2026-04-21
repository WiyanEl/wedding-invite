'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function CountingDown({ isOpen, isMobile }: Props) {
  const bgImage = !isOpen ? isMobile ? "/images/ryan-dan-inggrid/bg-counting-down-mobile.png" : "/images/ryan-dan-inggrid/bg-counting-down.png" : "/images/ryan-dan-inggrid/bg-counting-down-mobile.png"
  const targetDate = new Date('2026-06-12T00:00:00')

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
        <section id="counting-down" className="counting-down relative w-full h-[260px] md:h-[945px] bg-cover bg-center" style={{ backgroundImage: bgImage ? `url('${bgImage}')` : 'none' }}>
          <div className="absolute inset-0 z-[1] bg-[#00000059]" />
          <div className="relative z-10 flex flex-col items-center h-full pt-[34px] md:pt-[110px] pb-[30px] md:pb-[124.74px] font-lora text-white">
            <h2 className="text-xl md:text-5xl font-normal leading-none animate" data-animate="fade-up">SATURDAY, JUNE 20th 2026</h2>
            <div className="absolute bottom-[30px] md:bottom-[124.74px] flex gap-2.5 md:gap-[24.73px] mx-auto animate" data-animate="fade-up">
              <TimeBox value={timeLeft.days} label="days" />
              <TimeBox value={timeLeft.hours} label="hours" />
              <TimeBox value={timeLeft.minutes} label="minutes" />
              <TimeBox value={timeLeft.seconds} label="seconds" />
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}

function TimeBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-[2px] justify-center items-center w-[49px] md:w-[125.27px] h-[48px] md:h-[120.26px] rounded-[10px] md:rounded-[25.05px] bg-[#63595391] border md:border-[2.51px] border-[#FFFFFF91] shadow-[0.47px_1.89px_4.27px_0.94px_rgba(0,0,0,0.15)]">
      <p className="font-normal text-[28px] md:text-[70.15px] leading-[104%]">
        {value}
      </p>
      <p className="font-normal text-[5.56px] md:text-[14.17px] leading-none mt-1">
        {label}
      </p>
    </div>
  )
}