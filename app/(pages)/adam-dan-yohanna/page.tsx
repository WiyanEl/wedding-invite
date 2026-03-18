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
    </>
  );
}
