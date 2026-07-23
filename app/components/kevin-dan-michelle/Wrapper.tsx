'use client'

import { useState, useEffect } from 'react'
import WrapperTop from './WrapperTop'
import WrapperBottom from './WrapperBottom'

export default function Wrapper({ params }: { params: string }) {
  const [isOpen, setIsOpen] = useState(true) // default false
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
      <div className="bg-top bg-cover bg-no-repeat bg-[url('/images/kevin-dan-michelle/bg-full-mobile.png')]">
        <WrapperTop isOpen={isOpen} setIsOpen={setIsOpen} params={params} isMobile={isMobile} />
        <WrapperBottom isOpen={isOpen} setIsOpen={setIsOpen} params={params} isMobile={isMobile} />
      </div>
    </>
  )
}