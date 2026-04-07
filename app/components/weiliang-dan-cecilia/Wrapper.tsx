'use client'

import { useState, useEffect } from 'react'
import Header from '@/app/components/weiliang-dan-cecilia/Header'
import Hero from '@/app/components/weiliang-dan-cecilia/Hero'
import Profile from '@/app/components/weiliang-dan-cecilia/Profile'
import CountingDown from '@/app/components/weiliang-dan-cecilia/CountingDown'
import Location from '@/app/components/weiliang-dan-cecilia/Location'
import Gallery from '@/app/components/weiliang-dan-cecilia/Gallery'
import Dresscode from '@/app/components/weiliang-dan-cecilia/Dresscode'
import WeddingGift from '@/app/components/weiliang-dan-cecilia/WeddingGift'
import Reservation from '@/app/components/weiliang-dan-cecilia/Reservation'
import Wishes from '@/app/components/weiliang-dan-cecilia/Wishes'
import Footer from '@/app/components/weiliang-dan-cecilia/Footer'

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
      <div className="md:flex">
        <div className="hidden md:block fixed left-0 top-0 h-screen w-[calc(100%-390px)]">
          <div className="w-full h-full flex justify-center items-center relative bg-cover bg-center" style={{ backgroundImage: "url('/images/weiliang-dan-cecillia/bg-hero.png')" }}>
            <div className="font-normal text-[#724232] text-center">
              <h3 className={`font-perpetua text-2xl leading-none uppercase ${isOpen ? 'opacity-0 zoom-in' : ''}`}>The Wedding of</h3>
              <h1 className={`font-channe text-[64px] leading-none mt-1 ${isOpen ? 'opacity-0 zoom-in' : ''}`}>Wei Liang & Cecillia</h1>
            </div>
          </div>
        </div>
        <div className={`w-full ${isOpen ? 'md:w-[390px] md:ml-auto' : ''}`}>
          <Header isOpen={isOpen} />
          <Hero params={params} isOpen={isOpen} setIsOpen={setIsOpen} isMobile={isMobile} />
          <Profile isOpen={isOpen} isMobile={isMobile} />
          <CountingDown isOpen={isOpen} isMobile={isMobile} />
          <Location isOpen={isOpen} isMobile={isMobile} />
          <Gallery isOpen={isOpen} isMobile={isMobile} />
          <Dresscode isOpen={isOpen} isMobile={isMobile} />
          <WeddingGift isOpen={isOpen} isMobile={isMobile} />
          <Reservation params={params} isOpen={isOpen} isMobile={isMobile} />
          <Wishes isOpen={isOpen} isMobile={isMobile} />
          <Footer isOpen={isOpen} isMobile={isMobile} />
        </div>
      </div>
    </>
  )
}