'use client'

import { useState, useEffect } from 'react'
import Header from '@/app/components/adam-dan-yohanna/Header'
import Hero from '@/app/components/adam-dan-yohanna/Hero'
import Profile from '@/app/components/adam-dan-yohanna/Profile'
import CountingDown from '@/app/components/adam-dan-yohanna/CountingDown'
import Location from '@/app/components/adam-dan-yohanna/Location'
import Gallery from '@/app/components/adam-dan-yohanna/Gallery'
import Dresscode from '@/app/components/adam-dan-yohanna/Dresscode'
import Reservation from '@/app/components/adam-dan-yohanna/Reservation'
import WeddingGift from '@/app/components/adam-dan-yohanna/WeddingGift'
import Wishes from '@/app/components/adam-dan-yohanna/Wishes'
import Footer from '@/app/components/adam-dan-yohanna/Footer'

export default function Page() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="md:flex">
        <div className="hidden md:block fixed left-0 top-0 h-screen w-[calc(100%-390px)]">
          <div className="w-full h-full relative bg-cover" style={{ backgroundImage: "url('/images/adam-dan-yohanna/bg-hero.png')" }}>
            <div className="absolute left-[64px] bottom-[67px] text-[#4B2B15] flex flex-col gap-1">
              <p className="font-figtree font-medium text-[18px] leading-none uppercase">
                the wedding of
              </p>
              <h1 className="font-cormorant font-normal text-[64px] leading-none uppercase">
                adam & yohanna
              </h1>
            </div>
          </div>
        </div>
        <div className={`w-full ${isOpen ? 'md:w-[390px] md:ml-auto' : ''}`}>
          <Header isOpen={isOpen} />
          <Hero isOpen={isOpen} setIsOpen={setIsOpen} />
          <Profile />
          <CountingDown />
          <Location />
          <Gallery />
          <Dresscode />
          <Reservation />
          <WeddingGift />
          <Wishes />
          <Footer />
        </div>
      </div>
    </>
  );
}
