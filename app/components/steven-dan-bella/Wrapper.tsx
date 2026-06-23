'use client'

import { useState, useEffect } from 'react'
import Header from './Header'
import Hero from './Hero'
import AfterHero from './AfterHero'
import Profile from './Profile'
import CountingDown from './CountingDown'
import Location from './Location'
import Gallery from './Gallery'
import Dresscode from './Dresscode'
import TravelGuard from './TravelGuard'
import WeddingGift from './WeddingGift'
import Wishes from './Wishes'
import Footer from './Footer'

export default function Wrapper({ params }: { params: string }) {
  const [isOpen, setIsOpen] = useState(true) // default true
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  
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

  useEffect(() => {
    const elements = document.querySelectorAll('.animate');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const animation = el.dataset?.animate;

          if (animation) {
            el.classList.add(animation);
          }
        }
      });
    }, {
      threshold: 0.1
    });

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isOpen]);

  return (
    <>
      <Header isOpen={isOpen} />
      <Hero isOpen={isOpen} setIsOpen={setIsOpen} params={params} isMobile={isMobile} />
      <AfterHero isOpen={isOpen} isMobile={isMobile} />
      <Profile isOpen={isOpen} isMobile={isMobile} />
      <CountingDown isOpen={isOpen} isMobile={isMobile} />
      <Location isOpen={isOpen} isMobile={isMobile} />
      <Gallery isOpen={isOpen} isMobile={isMobile} />
      <Dresscode isOpen={isOpen} isMobile={isMobile} params={params} />
      <TravelGuard isOpen={isOpen} isMobile={isMobile} />
      <WeddingGift isOpen={isOpen} isMobile={isMobile} />
      <Wishes isOpen={isOpen} isMobile={isMobile} />
      <Footer isOpen={isOpen} isMobile={isMobile} />
    </>
  )
}