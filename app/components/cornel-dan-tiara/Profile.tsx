'use client'

import { useInView } from '@/app/hooks/useInView'
import Link from 'next/link'

export default function Profile() {
  const { ref, isVisible } = useInView()

  return (
    <section id="profile" className="profile relative w-full min-h-min bg-[#FEFBF0]">
      <div className="flex flex-col items-center py-[76px] h-full text-[#3B3B3B] text-center font-outfit font-normal">
        <p ref={ref} className={`font-medium text-xs leading-[18px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          Together with their families <br />
          invite you to celebrate <br />
          their marriage
        </p>
        <div ref={ref}>
          <img src="/images/cornel-dan-tiara/img-profile-cornel.png" alt="Gambar Cornel" className={`w-[200px] mt-[50px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`} />
        </div>
        <h3 className={`font-canela font-light text-[28px] leading-[26px] mt-6 ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          Cornelius <br />
          Kurnia Yonathan
        </h3>
        <p className={`font-medium text-xs leading-[20px] mt-[11px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          The son of
        </p>
        <p className={`text-xs leading-[20px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          Mr. Daniel Jonatan and <br />
          Mrs. Tjoa Giok Lan
        </p>
        <div ref={ref} className={`mt-[30px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          <Link href="https://instagram.com/cornel.kurnia" target="_blank" className="flex gap-2 items-center justify-center cursor-pointer w-[160px] h-[30px] bg-[#D9D9D9]">
            <img src="/images/cornel-dan-tiara/icon-ig.png" alt="Icon Instagram" className="w-[13px]" />
            <p className="text-xs leading-[16px]">
              cornel.kurnia
            </p>
          </Link>
        </div>
        <div ref={ref}>
          <img src="/images/cornel-dan-tiara/img-profile-tiara.png" alt="Gambar Tiara" className={`w-[200px] mt-[40px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`} />
        </div>
        <h3 className={`font-canela font-light text-[28px] leading-[26px] mt-6 ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          Tiara <br />
          Aprilia Purnomo
        </h3>
        <p className={`font-medium text-xs leading-[20px] mt-[11px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          The Daughter of
        </p>
        <p className={`text-xs leading-[20px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          Mr. Billy Purnomo and <br />
          MAngelina Paskahwati 
        </p>
        <div ref={ref} className={`mt-[30px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          <Link href="https://instagram.com/tiatiaraaprilia" target="_blank" className="flex gap-2 items-center justify-center cursor-pointer w-[160px] h-[30px] bg-[#D9D9D9]">
            <img src="/images/cornel-dan-tiara/icon-ig.png" alt="Icon Instagram" className="w-[13px]" />
            <p className="text-xs leading-[16px]">
              tiatiaraaprilia
            </p>
          </Link>
        </div>
        <p className={`font-medium text-xs leading-[18px] mt-[56px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
          Your presence and blessings <br />
          would mean the world to us.
        </p>
      </div>
    </section>
  )
}