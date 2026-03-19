'use client'

import { useInView } from '@/app/hooks/useInView'
import Link from 'next/link'

export default function Profile() {
  const { ref, isVisible } = useInView()

  return (
    <section id="profile" className="profile relative w-full min-h-min bg-cover bg-center">
      <div className="absolute inset-0 bg-[#B95F38] opacity-[0.12] mix-blend-multiply" />
      <div className="flex flex-col items-center py-[76px] h-full text-[#635953] text-center">
        <p ref={ref} className={`font-figtree font-normal text-xs leading-[18px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          Together with their families <br />
          invite you to celebrate <br />
          their marriage
        </p>
        <h3 ref={ref} className={`font-cormorant font-bold text-[28px] leading-none uppercase mt-[44px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          adam hardiman
        </h3>
        <p ref={ref} className={`font-figtree font-normal text-xs leading-[18px] mt-2 ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          The Son of
        </p>
        <p ref={ref} className={`font-figtree font-light text-xs leading-[18px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          Mr. Selamat Hardiman and <br />
          Mrs. Annie Hardiman
        </p>
        <div ref={ref} className={`mt-[14px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          <Link href="https://instagram.com/adamhardiman" target="_blank" className="flex gap-2 cursor-pointer hover:text-[#FEFBF0]">
            <img src="/images/adam-dan-yohanna/icon-ig.png" alt="Icon Instagram" className="w-[13px]" />
            <p className="font-figtree font-normal text-xs leading-[16px]">
              adamhardiman
            </p>
          </Link>
        </div>
        <h3 ref={ref} className={`font-cormorant font-bold text-[28px] leading-none uppercase mt-[33px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          &
        </h3>
        <h3 ref={ref} className={`font-cormorant font-bold text-[28px] leading-none uppercase mt-[28px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          yohanna yulianty <br /> usman
        </h3>
        <p ref={ref} className={`font-figtree font-normal text-xs leading-[18px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'} mt-2`}>
          The Daughter of
        </p>
        <p ref={ref} className={`font-figtree font-light text-xs leading-[18px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          Mr. Fransiscus Usman and <br />
          Mrs. Fransisca Meylinda
        </p>
        <div ref={ref} className={`mt-[14px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          <Link href="https://instagram.com/yohannayu" target="_blank" className="flex gap-2 cursor-pointer hover:text-[#FEFBF0]">
            <img src="/images/adam-dan-yohanna/icon-ig.png" alt="Icon Instagram" className="w-[13px]" />
            <p className="font-figtree font-normal text-xs leading-[16px]">
              yohannayu
            </p>
          </Link>
        </div>
        <p ref={ref} className={`font-figtree font-normal text-xs leading-[18px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'} mt-[45px]`}>
          Your presence and blessings <br />
          would mean the world to us.
        </p>
      </div>
    </section>
  )
}