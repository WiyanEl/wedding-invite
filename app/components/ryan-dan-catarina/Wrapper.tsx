'use client'

import { useState, useEffect } from 'react'

import Header from '../../components/ryan-dan-catarina/Header'
import Hero from '../../components/ryan-dan-catarina/Hero'
import Profile from '../../components/ryan-dan-catarina/Profile'
import CountingDown from '../../components/ryan-dan-catarina/CountingDown'
import Location from '../../components/ryan-dan-catarina/Location'
import Gallery from '../../components/ryan-dan-catarina/Gallery'
import Reservation from '../../components/ryan-dan-catarina/Reservation'
import WeddingGift from '../../components/ryan-dan-catarina/WeddingGift'
import Wishes from '../../components/ryan-dan-catarina/Wishes'
import Footer from '../../components/ryan-dan-catarina/Footer'

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
      <Hero isOpen={isOpen} setIsOpen={setIsOpen} params={params} isMobile={isMobile} />
      <Profile isOpen={isOpen} isMobile={isMobile} />
      <CountingDown isOpen={isOpen} isMobile={isMobile} />
      <Location isOpen={isOpen} isMobile={isMobile} />
      <Gallery isOpen={isOpen} isMobile={isMobile} />
      <Reservation isOpen={isOpen} isMobile={isMobile} params={params} />
      <WeddingGift isOpen={isOpen} isMobile={isMobile} />
      <Wishes isOpen={isOpen} isMobile={isMobile} />
      <Footer isOpen={isOpen} isMobile={isMobile} />
    </>
  )
}