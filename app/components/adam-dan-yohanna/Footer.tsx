'use client'

import { useInView } from '@/app/hooks/useInView'

export default function Footer() {
  const { ref, isVisible } = useInView()

  return (
    <footer id="footer" className="footer relative w-full h-[710] bg-cover bg-center">
      <div className="relative flex flex-col items-center justify-center h-full text-[#FEFBF0] text-center">
        <h3 ref={ref} className={`font-cormorant font-normal text-[28px] leading-none uppercase ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          thank you
        </h3>
        <p ref={ref} className={`font-figtree font-normal text-xs leading-[18px] mt-[11px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          It would be a joy and honor for us to have you join our <br /> celebration and share your blessings.
        </p>
      </div>
      <img src="/images/adam-dan-yohanna/logo-provite.png" className="absolute pointer-events-none bottom-0 left-1/2 -translate-x-1/2 w-[89px]" alt="" />
    </footer>
  )
}