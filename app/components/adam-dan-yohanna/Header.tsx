'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useScrollSmooth } from '@/app/hooks/useScrollSmooth'

export default function Header({ isOpen }: {isOpen: boolean}) {
  const [show, setShow] = useState(true)
  const [lastScroll, setLastScroll] = useState(0)
  const [open, setOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const { handleScrollDown } = useScrollSmooth()

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY

      if (current <= 10) {
        setShow(true)
      } else if (current > lastScroll) {
        setShow(false)
      } else {
        setShow(true)
      }

      setLastScroll(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScroll])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setOpen(false)
      setIsClosing(false)
    }, 250)
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
        md:left-auto md:right-0 md:w-[390px] md:top-6
        md:translate-x-0
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`
      }>
      <div className="w-[92vw] max-w-6xl">
        {!open && (
          <div className="flex items-center justify-start text-white">
            <button onClick={() => setOpen(!open)} className="relative top-[45px] left-[25px] w-[34px] h-[11px] border-y-[3px] border-[#BC5E38]"></button>
          </div>
        )}

        {(open || isClosing) && (
          <div className={`relative top-[20px] left-[25px] w-[255px] bg-[#9A3929B3] flex gap-2 rounded-br-md rounded-bl-md rounded-tr-[10px] py-[17px] ps-[9px] ${isClosing ? 'animate-menu-out' : 'animate-menu-in'}`} style={{ transformOrigin: 'top left' }}>
            <div>
              <button className={`font-ibm text-2xl leading-none text-white uppercase opacity-0 ${isClosing ? 'animate-close-menu-out' : 'animate-close-menu-in'}`} onClick={() => handleClose()}>x</button>
            </div>
            <div className={`mt-1 flex flex-col gap-4 ${isClosing ? 'animate-close-menu-out' : ''}`}>
              <div className="overflow-hidden">
                <Link href="#hero" className="flex items-center gap-1 relative left-[-18px] hover:left-0 transition-all duration-300 font-figtree text-xs leading-none text-white text-medium uppercase opacity-0 animate-item-menu-in" onClick={handleScrollDown}>
                  <img src="/images/adam-dan-yohanna/arrow-right.png" className="w-[15px]" alt="" />
                  <span>home</span>
                </Link>
              </div>
              <div className="overflow-hidden">
                <Link href="#profile" className="flex items-center gap-1 relative left-[-18px] hover:left-0 transition-all duration-300 font-figtree text-xs leading-none text-white text-medium uppercase opacity-0 animate-item-menu-in" onClick={handleScrollDown} style={{ animationDelay: '0.05s' }}>
                  <img src="/images/adam-dan-yohanna/arrow-right.png" className="w-[15px]" alt="" />
                  <span>the couple</span>
                </Link>
              </div>
              <div className="overflow-hidden">
                <Link href="#location" className="flex items-center gap-1 relative left-[-18px] hover:left-0 transition-all duration-300 font-figtree text-xs leading-none text-white text-medium uppercase opacity-0 animate-item-menu-in" onClick={handleScrollDown} style={{ animationDelay: '0.25s' }}>
                  <img src="/images/adam-dan-yohanna/arrow-right.png" className="w-[15px]" alt="" />
                  <span>event details</span>
                </Link>
              </div>
              <div className="overflow-hidden">
                <Link href="#gallery" className="flex items-center gap-1 relative left-[-18px] hover:left-0 transition-all duration-300 font-figtree text-xs leading-none text-white text-medium uppercase opacity-0 animate-item-menu-in" onClick={handleScrollDown} style={{ animationDelay: '0.35s' }}>
                  <img src="/images/adam-dan-yohanna/arrow-right.png" className="w-[15px]" alt="" />
                  <span>gallery</span>
                </Link>
              </div>
              <div className="overflow-hidden">
                <Link href="#dresscode" className="flex items-center gap-1 relative left-[-18px] hover:left-0 transition-all duration-300 font-figtree text-xs leading-none text-white text-medium uppercase opacity-0 animate-item-menu-in" onClick={handleScrollDown} style={{ animationDelay: '0.45s' }}>
                  <img src="/images/adam-dan-yohanna/arrow-right.png" className="w-[15px]" alt="" />
                  <span>dress code</span>
                </Link>
              </div>
              <div className="overflow-hidden">
                <Link href="#reservation" className="flex items-center gap-1 relative left-[-18px] hover:left-0 transition-all duration-300 font-figtree text-xs leading-none text-white text-medium uppercase opacity-0 animate-item-menu-in" onClick={handleScrollDown} style={{ animationDelay: '0.45s' }}>
                  <img src="/images/adam-dan-yohanna/arrow-right.png" className="w-[15px]" alt="" />
                  <span>rsvp</span>
                </Link>
              </div>
              <div className="overflow-hidden">
                <Link href="#wedding-gift" className="flex items-center gap-1 relative left-[-18px] hover:left-0 transition-all duration-300 font-figtree text-xs leading-none text-white text-medium uppercase opacity-0 animate-item-menu-in" onClick={handleScrollDown} style={{ animationDelay: '0.55s' }}>
                  <img src="/images/adam-dan-yohanna/arrow-right.png" className="w-[15px]" alt="" />
                  <span>wedding gifts</span>
                </Link>
              </div>
              <div className="overflow-hidden">
                <Link href="#wishes" className="flex items-center gap-1 relative left-[-18px] hover:left-0 transition-all duration-300 font-figtree text-xs leading-none text-white text-medium uppercase opacity-0 animate-item-menu-in" onClick={handleScrollDown} style={{ animationDelay: '0.55s' }}>
                  <img src="/images/adam-dan-yohanna/arrow-right.png" className="w-[15px]" alt="" />
                  <span>wishes</span>
                </Link>
              </div>
              <div className="overflow-hidden">
                <p className="font-figtree text-[8px] font-light leading-[106%] text-white mt-[13px] opacity-0 animate-item-in" style={{ animationDelay: '0.65s' }}>
                  Please click one of the menu <br />
                  options above to navigate directly <br />
                  to your desired page.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  )
}