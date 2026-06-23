'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function CountingDown({ isOpen, isMobile }: Props) {
  const targetDate = new Date('2026-11-17T00:00:00')

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
      <section id="counting-down" className="counting-down relative w-full min-h-min bg-[url('/images/steven-dan-bella/bg-counting-down-mobile.png')] bg-[#BCAE9F] bg-blend-multiply bg-cover bg-no-repeat">
        <div className="relative h-full pt-[55px] pb-[52px] text-center font-century text-white">
          <h2 className="font-constantia text-[20px] font-medium leading-[18px] uppercase animate" data-animate="zoom-in">saturday, 17 october 2026</h2>
          <div className="flex gap-[10px] justify-center mt-[18px]">
            <TimeBox value={timeLeft.days} label="days" />
            <TimeBox value={timeLeft.hours} label="hours" />
            <TimeBox value={timeLeft.minutes} label="minutes" />
            <TimeBox value={timeLeft.seconds} label="seconds" />
          </div>
        </div>
      </section>
    </>
  )
}

function TimeBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1 items-center w-[59px] h-[58px] rounded-[10px] bg-white shadow-[0.47px_1.89px_4.27px_0.94px_#00000026] pt-1.5 text-[#3C475E] animate" data-animate="zoom-in">
      <p className="font-medium text-[28px] leading-[104%]">
        {value}
      </p>
      <p className="font-medium text-[6px] leading-none capitalize">
        {label}
      </p>
    </div>
  )
}