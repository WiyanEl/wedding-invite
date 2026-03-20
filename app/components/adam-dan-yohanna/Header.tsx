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
    }, 500)
  }

  return (
    <header
      className={`fixed md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}
      `}>
      <div className={`w-[92vw] max-w-6xl ${lastScroll > 10 ? 'md:backdrop-blur-md md:bg-black/40 md:border md:border-white/20 md:rounded-xl md:shadow-lg' : ''}`}>
        <nav className="hidden md:flex md:justify-between gap-8 text-white font-bona tracking-widest text-sm">
          <Link href="#hero" className="text-base font-figtree uppercase hover:text-gray-500" onClick={handleScrollDown}>home</Link>
          <Link href="#profile" className="text-base font-figtree uppercase hover:text-gray-500" onClick={handleScrollDown}>profile</Link>
          <Link href="#counting-down" className="text-base font-figtree uppercase hover:text-gray-500" onClick={handleScrollDown}>counting down</Link>
          <Link href="#location" className="text-base font-figtree uppercase hover:text-gray-500" onClick={handleScrollDown}>event detail</Link>
          <Link href="#gallery" className="text-base font-figtree uppercase hover:text-gray-500" onClick={handleScrollDown}>gallery</Link>
          <Link href="#dresscode" className="text-base font-figtree uppercase hover:text-gray-500" onClick={handleScrollDown}>dresscode</Link>
          <Link href="#wedding-gift" className="text-base font-figtree uppercase hover:text-gray-500" onClick={handleScrollDown}>wedding gift</Link>
        </nav>

        {!open && (
          <div className="flex md:hidden items-center justify-start text-white">
            <button onClick={() => setOpen(!open)} className="relative top-[45px] left-[25px] w-[34px] h-[11px] border-y-[3px] border-[#BC5E38]"></button>
          </div>
        )}

        {(open || isClosing) && (
          <div className={`relative top-[20px] left-[25px] w-[255px] bg-[#9A3929B3] flex gap-2 rounded-br-md rounded-bl-md rounded-tr-[10px] py-[17px] ps-[9px] ${isClosing ? 'animate-menu-out' : 'animate-menu-in'}`} style={{ transformOrigin: 'top left' }}>
            <div>
              <button className="font-ibm text-2xl leading-none text-white uppercase opacity-0 animate-close-menu-in" onClick={() => handleClose()}>x</button>
            </div>
            <div className="mt-1 flex flex-col gap-4">
              <Link href="#hero" className="font-figtree text-xs leading-none text-white text-medium uppercase opacity-0 animate-item-in" onClick={handleScrollDown} style={{ animationDelay: '0.35s' }}>home</Link>
              <Link href="#profile" className="font-figtree text-xs leading-none text-white text-medium uppercase opacity-0 animate-item-in" onClick={handleScrollDown} style={{ animationDelay: '0.4s' }}>profile</Link>
              <Link href="#counting-down" className="font-figtree text-xs leading-none text-white text-medium uppercase opacity-0 animate-item-in" onClick={handleScrollDown} style={{ animationDelay: '0.45s' }}>counting down</Link>
              <Link href="#location" className="font-figtree text-xs leading-none text-white text-medium uppercase opacity-0 animate-item-in" onClick={handleScrollDown} style={{ animationDelay: '0.5s' }}>event detail</Link>
              <Link href="#gallery" className="font-figtree text-xs leading-none text-white text-medium uppercase opacity-0 animate-item-in" onClick={handleScrollDown} style={{ animationDelay: '0.55s' }}>gallery</Link>
              <Link href="#dresscode" className="font-figtree text-xs leading-none text-white text-medium uppercase opacity-0 animate-item-in" onClick={handleScrollDown} style={{ animationDelay: '0.6s' }}>dresscode</Link>
              <Link href="#wedding-gift" className="font-figtree text-xs leading-none text-white text-medium uppercase opacity-0 animate-item-in" onClick={handleScrollDown} style={{ animationDelay: '0.65s' }}>wedding gift</Link>
              <p className="font-figtree text-[8px] font-light leading-[106%] text-white mt-[13px] opacity-0 animate-item-in" style={{ animationDelay: '0.7s' }}>
                Please click one of the menu <br />
                options above to navigate directly <br />
                to your desired page.
              </p>
            </div>
          </div>
        )}

      </div>
    </header>
  )
}