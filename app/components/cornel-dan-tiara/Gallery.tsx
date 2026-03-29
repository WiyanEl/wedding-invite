'use client'

import { useInView } from '@/app/hooks/useInView'

export default function Gallery() {
  const { ref, isVisible } = useInView()

  return (
    <section id="gallery" className="gallery relative w-full min-h-min bg-[#FEFBF0]">
      <div className="flex flex-col items-center py-[80px] h-full text-[#3B3B3B] text-center font-canela font-this" ref={ref}>
        <h3 className={`text-2xl leading-[22px] uppercase ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          our gallery
        </h3>
        <div className="grid grid-cols-2 gap-[7px] mt-[40px]">
          <img src="/images/cornel-dan-tiara/img-gallery-1.png" alt="Gallery" className={`col-span-2 w-[340px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`} />
          <img src="/images/cornel-dan-tiara/img-gallery-2.png" alt="Gallery" className={`w-[167px] ${isVisible ? 'animate-fade-left opacity-100' : 'opacity-0 translate-y-5'}`} />
          <img src="/images/cornel-dan-tiara/img-gallery-3.png" alt="Gallery" className={`w-[167px] ${isVisible ? 'animate-fade-right opacity-100' : 'opacity-0 translate-y-5'}`} />
          <img src="/images/cornel-dan-tiara/img-gallery-4.png" alt="Gallery" className={`w-[167px] ${isVisible ? 'animate-fade-left opacity-100' : 'opacity-0 translate-y-5'}`} />
          <img src="/images/cornel-dan-tiara/img-gallery-5.png" alt="Gallery" className={`w-[167px] ${isVisible ? 'animate-fade-right opacity-100' : 'opacity-0 translate-y-5'}`} />
          <img src="/images/cornel-dan-tiara/img-gallery-6.png" alt="Gallery" className={`col-span-2 w-[340px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`} />
          <img src="/images/cornel-dan-tiara/img-gallery-7.png" alt="Gallery" className={`col-span-2 w-[340px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`} />
          <img src="/images/cornel-dan-tiara/img-gallery-8.png" alt="Gallery" className={`col-span-2 w-[340px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`} />
          <img src="/images/cornel-dan-tiara/img-gallery-9.png" alt="Gallery" className={`w-[167px] ${isVisible ? 'animate-fade-left opacity-100' : 'opacity-0 translate-y-5'}`} />
          <img src="/images/cornel-dan-tiara/img-gallery-10.png" alt="Gallery" className={`w-[167px] ${isVisible ? 'animate-fade-right opacity-100' : 'opacity-0 translate-y-5'}`} />
        </div>
      </div>
    </section>
  )
}