'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function CountingDown({ isOpen, isMobile }: Props) {
  const bgImage = !isOpen ? isMobile ? "/images/weiliang-dan-cecillia/bg-counting-down-mobile.png" : "/images/weiliang-dan-cecillia/bg-counting-down.png" : "/images/weiliang-dan-cecillia/bg-counting-down-mobile.png"
  const targetDate = new Date('2026-05-31T00:00:00')

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
        <section id="counting-down" className="counting-down relative w-full min-h-min bg-cover bg-center" style={{ backgroundImage: bgImage ? `url('${bgImage}')` : 'none' }}>
          <Image src="/images/weiliang-dan-cecillia/img-tumbuhan-kecil-kanan-counting-down.png" alt="Tumbuhan Kanan" width={100} height={100} className={`absolute top-[44px] right-0 animate`} data-animate="fade-left" />
          <Image src="/images/weiliang-dan-cecillia/img-tumbuhan-kecil-kiri-counting-down.png" alt="Tumbuhan Kiri" width={100} height={100} className={`absolute top-[209px] left-0 animate`} data-animate="fade-right" />
          <Image src="/images/weiliang-dan-cecillia/img-gapura-counting-down.png" alt="Gapura" width={227} height={161} className={`absolute bottom-[7px] right-0 animate`} data-animate="fade-up" />
          <Image src="/images/weiliang-dan-cecillia/img-awan-counting-down.png" alt="Awan" width={249} height={177} className={`absolute bottom-[-90px] left-[-50px] animate`} data-animate="fade-up" />
          <Image src="/images/weiliang-dan-cecillia/img-air-mancur-counting-down.png" alt="Air Mancur" width={131} height={186} className={`absolute bottom-0 left-0 animate`} data-animate="fade-right" />
          <Image src="/images/weiliang-dan-cecillia/img-tumbuhan-kanan-counting-down.png" alt="Tumbuhan Kanan" width={161} height={186} className={`absolute bottom-0 right-0 animate`} data-animate="fade-left" />
          <Image src="/images/weiliang-dan-cecillia/img-tumbuhan-bawah-counting-down.png" alt="Tumbuhan Bawah" width={456} height={130} className={`absolute z-10 bottom-[-70px] left-0 animate`} data-animate="fade-up" />
          <div className="flex flex-col items-center text-center h-full text-[#724232] pt-[155px] md:pt-[242px] pb-[210px] md:pb-[238px]">
            <h3 className="font-channe text-2xl leading-[26px] uppercase animate" data-animate="zoom-in">
              the beginning of <br />
              forever
            </h3>
            <h6 className="font-perpetua text-lg leading-[32.22px] mt-[26px] animate" data-animate="zoom-in">
              SATURDAY, JULY 25th 2026
            </h6>
            <div className="grid grid-cols-2 gap-5 mt-[27px]">
              <TimeBox value={timeLeft.days} label="days" />
              <TimeBox value={timeLeft.hours} label="hours" />
              <TimeBox value={timeLeft.minutes} label="minutes" />
              <TimeBox value={timeLeft.seconds} label="seconds" />
            </div>
            <Link href="https://www.google.com/calendar/render?action=TEMPLATE&text=Wedding%20Tan%20Wei%20Liang%20%26%20Cecilia%20Joicelyn%20Widjojo&dates=20260725T020000Z/20260725T050000Z&details=Join%20our%20wedding&location=Jakarta" target="_blank" className="flex items-center justify-center bg-[#AB6A7C] hover:bg-[#E6D8DC] w-[160px] py-[10px] font-perpetua font-normal text-xs leading-none text-[#E6D8DC] hover:text-[#AB6A7C] uppercase mt-[20px] animate" data-animate="zoom-in">
              mark your calender
            </Link>
          </div>
        </section>
      ) : null}
    </>
  )
}

function TimeBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="w-[70px] h-[80px] bg-[#AB6A7C] shadow-[0.8px_3.21px_7.27px_1.61px_#00000026] py-[16px] text-center text-[#E6D8DC] font-normal animate" data-animate="zoom-in">
      <h3 className="font-channe text-[38px] leading-none">
        {value}
      </h3>
      <p className="font-perpetua text-xs leading-none">
        {label}
      </p>
    </div>
  )
}