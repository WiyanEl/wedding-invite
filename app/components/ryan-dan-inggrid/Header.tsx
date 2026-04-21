'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
      className={`md:hidden fixed top-0 left-0 w-full z-30 transition-all duration-500
        md:left-auto md:right-0 md:w-[390px] md:top-6
        md:translate-x-0
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`
      }>
      <div className="w-[92vw] max-w-6xl">
        {!open && (
          <div className="flex items-center justify-start text-white">
            <button onClick={() => setOpen(!open)} className="relative top-[21px] left-[22px]">
              <Image src="/images/ryan-dan-inggrid/icon-menu-toggle.png" alt="Picture of icon menu" width={25} height={17} className="w-full" />
            </button>
          </div>
        )}

        {(open || isClosing) && (
          <>
            <div onClick={handleClose} className="w-screen h-screen fixed inset-0 bg-black/25 z-40" />
            <div className={`relative z-50 top-[12px] left-[22px] w-[255px] h-[254px] bg-[#FEFBF052] flex gap-2 ps-[6px] ${isClosing ? 'animate-menu-out' : 'animate-menu-in'}`} style={{ transformOrigin: 'top left' }}>
              <div>
                <button className={`font-ibm text-2xl leading-none text-white uppercase opacity-0 mt-[6px] ${isClosing ? 'animate-close-menu-out' : 'animate-close-menu-in'}`} onClick={() => handleClose()}>x</button>
              </div>
              <div className={`flex flex-col gap-[9px] font-noto text-white mt-[36px] mb-[32px] ${isClosing ? 'animate-close-menu-out' : ''}`}>
                <div className="overflow-hidden">
                  <Link href="#hero" className="flex items-center gap-1 relative left-[-18px] hover:left-0 transition-all duration-300 uppercase opacity-0 animate-item-menu-in" onClick={handleScrollDown}>
                    <img src="/images/adam-dan-yohanna/arrow-right.png" className="w-[15px]" alt="" />
                    <span className="text-xs leading-none font-medium">home</span>
                  </Link>
                </div>
                <div className="overflow-hidden">
                  <Link href="#profile" className="flex items-center gap-1 relative left-[-18px] hover:left-0 transition-all duration-300 uppercase opacity-0 animate-item-menu-in" onClick={handleScrollDown} style={{ animationDelay: '0.05s' }}>
                    <img src="/images/adam-dan-yohanna/arrow-right.png" className="w-[15px]" alt="" />
                    <span className="text-xs leading-none font-medium">profile</span>
                  </Link>
                </div>
                <div className="overflow-hidden">
                  <Link href="#counting-down" className="flex items-center gap-1 relative left-[-18px] hover:left-0 transition-all duration-300 uppercase opacity-0 animate-item-menu-in" onClick={handleScrollDown} style={{ animationDelay: '0.25s' }}>
                    <img src="/images/adam-dan-yohanna/arrow-right.png" className="w-[15px]" alt="" />
                    <span className="text-xs leading-none font-medium">counting down</span>
                  </Link>
                </div>
                <div className="overflow-hidden">
                  <Link href="#our-story" className="flex items-center gap-1 relative left-[-18px] hover:left-0 transition-all duration-300 uppercase opacity-0 animate-item-menu-in" onClick={handleScrollDown} style={{ animationDelay: '0.45s' }}>
                    <img src="/images/adam-dan-yohanna/arrow-right.png" className="w-[15px]" alt="" />
                    <span className="text-xs leading-none font-medium">our story</span>
                  </Link>
                </div>
                <div className="overflow-hidden">
                  <Link href="#reservation" className="flex items-center gap-1 relative left-[-18px] hover:left-0 transition-all duration-300 uppercase opacity-0 animate-item-menu-in" onClick={handleScrollDown} style={{ animationDelay: '0.45s' }}>
                    <img src="/images/adam-dan-yohanna/arrow-right.png" className="w-[15px]" alt="" />
                    <span className="text-xs leading-none font-medium">rsvp</span>
                  </Link>
                </div>
                <div className="overflow-hidden">
                  <Link href="#gallery" className="flex items-center gap-1 relative left-[-18px] hover:left-0 transition-all duration-300 uppercase opacity-0 animate-item-menu-in" onClick={handleScrollDown} style={{ animationDelay: '0.55s' }}>
                    <img src="/images/adam-dan-yohanna/arrow-right.png" className="w-[15px]" alt="" />
                    <span className="text-xs leading-none font-medium">gallery</span>
                  </Link>
                </div>
                <div className="overflow-hidden">
                  <Link href="#wedding-gift" className="flex items-center gap-1 relative left-[-18px] hover:left-0 transition-all duration-300 uppercase opacity-0 animate-item-menu-in" onClick={handleScrollDown} style={{ animationDelay: '0.45s' }}>
                    <img src="/images/adam-dan-yohanna/arrow-right.png" className="w-[15px]" alt="" />
                    <span className="text-xs leading-none font-medium">wedding gift</span>
                  </Link>
                </div>
                <div className="overflow-hidden">
                  <p className="text-[8px] font-light leading-[106%] mt-[16px] opacity-0 animate-item-in" style={{ animationDelay: '0.65s' }}>
                    Select a section above to continue
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

      </div>
    </header>
  )
}