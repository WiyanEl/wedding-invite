'use client'

import { useInView } from '@/app/hooks/useInView'

export default function Gallery() {
  const { ref, isVisible } = useInView()

  return (
    <section id="gallery" className="gallery relative w-full min-h-min bg-cover bg-center">
      <div className="absolute inset-0 bg-[#DBB481] opacity-[0.90] mix-blend-multiply" />
      <div className="relative z-10 flex flex-col items-center py-[79px] h-full text-center">
        <div className="grid grid-cols-2 gap-5" ref={ref}>
          <img src="/images/adam-dan-yohanna/gallery-1.png" alt="Gallery" className={`w-[160px] ${isVisible ? 'animate-fade-left opacity-100' : 'opacity-0 translate-y-5'}`} />
          <img src="/images/adam-dan-yohanna/gallery-2.png" alt="Gallery" className={`w-[160px] ${isVisible ? 'animate-fade-right opacity-100' : 'opacity-0 translate-y-5'}`} />
          <img src="/images/adam-dan-yohanna/gallery-3.png" alt="Gallery" className={`col-span-2 w-[340px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`} />
          <img src="/images/adam-dan-yohanna/gallery-4.png" alt="Gallery" className={`w-[160px] ${isVisible ? 'animate-fade-left opacity-100' : 'opacity-0 translate-y-5'}`} />
          <img src="/images/adam-dan-yohanna/gallery-5.png" alt="Gallery" className={`w-[160px] ${isVisible ? 'animate-fade-right opacity-100' : 'opacity-0 translate-y-5'}`} />
          <img src="/images/adam-dan-yohanna/gallery-6.png" alt="Gallery" className={`w-[160px] ${isVisible ? 'animate-fade-left opacity-100' : 'opacity-0 translate-y-5'}`} />
          <img src="/images/adam-dan-yohanna/gallery-7.png" alt="Gallery" className={`w-[160px] ${isVisible ? 'animate-fade-right opacity-100' : 'opacity-0 translate-y-5'}`} />
        </div>
      </div>
    </section>
  )
}