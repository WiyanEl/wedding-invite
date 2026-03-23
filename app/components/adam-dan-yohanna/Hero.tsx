'use client'

import { useState, useEffect } from 'react'

type HeroProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Hero({ isOpen, setIsOpen }: HeroProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const bgImage = !isOpen ? isMobile ? "/images/adam-dan-yohanna/bg-hero-mobile.png" : "/images/adam-dan-yohanna/bg-hero.png" : "/images/adam-dan-yohanna/bg-hero-mobile.png"

  return (
    <section id="hero" className={`hero relative w-full h-screen bg-cover bg-center md:bg-top`} style={{ backgroundImage: bgImage ? `url('${bgImage}')` : 'none' }}>
      <div className={`hidden ${!isOpen ? 'md:block' : ''} absolute inset-0 bg-[#B95F38]/30 backdrop-blur-sm`} />
      <div className={`hidden ${!isOpen ? 'md:block' : ''} absolute right-0 top-0 h-full w-[390px] bg-white/30 backdrop-blur-sm`} />
      <div className={`relative z-10 flex ${isOpen ? 'items-end pb-[85px]' : 'items-center'} justify-center h-full`}>

        {!isOpen && (
          <div className="text-center rounded-2xl md:rounded-[15px] md:backdrop-blur-sm bg-[#9A3929]/70 text-[#FEFBF0] w-[290px] md:w-[528px] h-[340px] md:min-h-min pt-[57px] md:pb-[60px] animate-zoom-in">
            <p className="font-figtree font-medium text-[10px] md:text-lg uppercase">
              we invite you to celebrate
            </p>
            <h2 className="font-cormorant font-normal text-[26px] md:text-[46px] uppercase mt-3.5 md:mt-2">
              adam & yohanna
            </h2>
            <p className="font-figtree font-medium text-[10px] md:text-lg uppercase mt-3.5 md:mt-[14px]">
              saturday, 02 may 2026
            </p>
            <p className="font-figtree font-normal text-[12px] md:text-lg uppercase mt-[30px] md:mt-[38px]">
              Dear Mr./Mrs./Ms.
              <br />
              ......
            </p>
            <button onClick={() => setIsOpen(true)} className="bg-[#FEFBF0] rounded md:rounded-[10px] uppercase w-[160px] md:w-[187px] h-[29px] md:h-[40] text-[10px] md:text-[18px] text-[#9A3929] mt-54px mt-[53px] md:mt-[38px]">open invitation</button>
          </div>
        )}

        {isOpen && (
          <div className="text-center text-[#4B2B15] animate-fade-up">
            <p className="font-figtree font-medium text-xs uppercase">
              the wedding of
            </p>
            <h2 className="font-cormorant font-normal text-[28px] uppercase mt-3">
              adam & yohanna
            </h2>
            <p className="font-figtree font-medium text-xs uppercase mt-3">
              saturday, 02 may 2026
            </p>
          </div>
        )}

      </div>
    </section>
  )
}