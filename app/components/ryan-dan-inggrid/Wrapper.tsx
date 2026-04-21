'use client'

import { useState, useEffect } from 'react'
import Header from '@/app/components/ryan-dan-inggrid/Header'
import Hero from '@/app/components/ryan-dan-inggrid/Hero'
import Profile from '@/app/components/ryan-dan-inggrid/Profile'
import CountingDown from '@/app/components/ryan-dan-inggrid/CountingDown'
import Location from '@/app/components/ryan-dan-inggrid/Location'
import Reservation from '@/app/components/ryan-dan-inggrid/Reservation'
import Gallery from '@/app/components/ryan-dan-inggrid/Gallery'
import Wishes from '@/app/components/ryan-dan-inggrid/Wishes'
import WeddingGift from '@/app/components/ryan-dan-inggrid/WeddingGift'
import Footer from '@/app/components/ryan-dan-inggrid/Footer'

export default function Wrapper({ params }: { params: string }) {
  const [isOpen, setIsOpen] = useState(false)
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
      <Hero params={params} isOpen={isOpen} setIsOpen={setIsOpen} isMobile={isMobile} />
      <Profile isOpen={isOpen} isMobile={isMobile} />
      <CountingDown isOpen={isOpen} isMobile={isMobile} />
      <Location isOpen={isOpen} isMobile={isMobile} />
      <Reservation isOpen={isOpen} isMobile={isMobile} params={params} />
      <Gallery isOpen={isOpen} isMobile={isMobile} />
      <Wishes isOpen={isOpen} isMobile={isMobile} />
      <WeddingGift isOpen={isOpen} isMobile={isMobile} />
      <Footer isOpen={isOpen} isMobile={isMobile} />
    </>
  )
}