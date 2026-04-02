'use client'

import { useState, useEffect } from 'react'
import Header from '@/app/components/cornel-dan-tiara/Header'
import Hero from '@/app/components/cornel-dan-tiara/Hero'
import Profile from '@/app/components/cornel-dan-tiara/Profile'
import CountingDown from '@/app/components/cornel-dan-tiara/CountingDown'
import OurStory from '@/app/components/cornel-dan-tiara/OurStory'
import Location from '@/app/components/cornel-dan-tiara/Location'
import Reservation from '@/app/components/cornel-dan-tiara/Reservation'
import Wishes from '@/app/components/cornel-dan-tiara/Wishes'
import WeddingGift from '@/app/components/cornel-dan-tiara/WeddingGift'
import Gallery from '@/app/components/cornel-dan-tiara/Gallery'
import Footer from '@/app/components/cornel-dan-tiara/Footer'

export default function Wrapper({ params }: { params:string }) {
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
      <div className="md:flex">
        <div className="hidden md:block fixed left-0 top-0 h-screen w-[calc(100%-390px)]">
          <div className="w-full h-full relative bg-cover" style={{ backgroundImage: "url('/images/cornel-dan-tiara/bg-hero.png')" }}>
            <div className={`absolute inset-0 bg-[#000000B5]`} />
            <div className="absolute left-[64px] bottom-[67px] text-white flex flex-col gap-1">
              <p className={`font-outfit font-normal text-[18px] leading-none uppercase ${isOpen ? 'opacity-0 fade-right' : ''}`}>
                the wedding of
              </p>
              <h1 className={`font-cloudy font-normal text-[64px] leading-none uppercase mt-[9px] ${isOpen ? 'opacity-0 fade-right' : ''}`}>
                cornel & tiara
              </h1>
            </div>
          </div>
        </div>
        <div className={`w-full ${isOpen ? 'md:w-[390px] md:ml-auto' : ''}`}>
          <Header isOpen={isOpen} />
          <Hero params={params} isOpen={isOpen} setIsOpen={setIsOpen} isMobile={isMobile} />
          <Profile isOpen={isOpen} isMobile={isMobile} />
          <CountingDown isOpen={isOpen} isMobile={isMobile} />
          <OurStory isOpen={isOpen} isMobile={isMobile} />
          <Location isOpen={isOpen} isMobile={isMobile} />
          <Reservation params={params} isOpen={isOpen} isMobile={isMobile} />
          <Wishes isOpen={isOpen} isMobile={isMobile} />
          <WeddingGift isOpen={isOpen} isMobile={isMobile} />
          <Gallery isOpen={isOpen} isMobile={isMobile} />
          <Footer isOpen={isOpen} isMobile={isMobile} />
        </div>
      </div>
    </>
  )
}