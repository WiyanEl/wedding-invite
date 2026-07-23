'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function JourneyLove({ isOpen, isMobile }: Props) {
  return (
    <>
      <div id="journey-love" className="journey-love relative z-10 w-full min-h-screen">
        <div className="relative overflow-hidden z-10 text-center h-full font-cormorant text-[#DFD28F] pt-[138px] pb-[167px]">
          <h2 className="font-milyuna text-2xl leading-[25px] animate" data-animate="zoom-in">A Journey in Love</h2>
          <Image src="/images/kevin-dan-michelle/img-garis-judul-mobile.png" alt="Picture of garis judul" width={109} height={10} className="mt-1 mx-auto animate" data-animate="zoom-in" />
          
          <div className="w-[259px] mt-[40px] mx-auto">
            <p className="text-[14px] leading-[20px] animate" data-animate="fade-up">
              It all began in 2016, on the very first day of medical school. We were classmates and happened to be placed in the same practical group. Like many first meetings, it started with a simple introduction—but instead of talking about the lab session, we found ourselves laughing about the challenges that medical school would bring.
            </p>
            <p className="text-[14px] leading-[20px] animate" data-animate="fade-up">
              As days turned into months, we became close friends. We studied together, spent countless hours in practical sessions, and shared unforgettable moments with the same group of friends. Somewhere along the way, friendship quietly grew into something much more. On November 30, 2017, Kevin asked Michelle to be his girlfriend, and we officially began our journey together.
            </p>
            <p className="text-[14px] leading-[20px] animate" data-animate="fade-up">
              From that day on, we faced every milestone side by side. We survived endless lectures, late-night study sessions, clinical rotations, writing our theses, completing clerkships, and preparing for the national medical licensing examination. Through every challenge, we became each other's greatest source of strength.
            </p>
            <p className="text-[14px] leading-[20px] animate" data-animate="fade-up">
              In 2023, after years of hard work, we achieved our dream of graduating together as doctors. To celebrate this milestone, Kevin took Michelle to Japan. On June 29, 2023, with the breathtaking view of Lake Kawaguchiko and Mount Fujistanding majestically in the background, Kevin asked the most important question of their lives—and Michelle said yes.
            </p>
            <p className="text-[14px] leading-[20px] animate" data-animate="fade-up">
              A few months later, on December 3, 2023, our families came together for our Tingjing Ceremony, marking the beginning of a new chapter with the blessing of those we love most. In 2024, life took us to different cities as we completed our one-year medical internship. Although distance separated us, it only strengthened our commitment and reminded us that home was always wherever the other person was.
            </p>
            <p className="text-[14px] leading-[20px] animate" data-animate="fade-up">
              When our internship ended in 2025 and we both returned to Bandung, we knew it was finally time. After growing together through every season of life—from students to doctors, from best friends to soulmates—we made the decision to begin our greatest adventure yet: A lifetime together.
            </p>
            <p className="text-[14px] leading-[20px] animate" data-animate="fade-up">
              What started with a simple introduction in a medical school classroom has become a love story built on friendship, perseverance, and unwavering support. And now, surrounded by the people we love, we cannot wait to write the next chapter—together, forever.
            </p>
          </div>

          {/* Absoulte Image */}
          <Image src="/images/kevin-dan-michelle/img-tanaman-kiri-atas-journey-mobile.png" alt="Picture of tanaman kiri atas" width={425} height={252} className="absolute -top-[270px] left-0 w-[255px]" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-atas-journey-mobile.png" alt="Picture of tanaman kanan atas" width={425} height={251} className="absolute -top-[270px] right-0 w-[255px]" />
          <Image src="/images/kevin-dan-michelle/img-bunga-atas-journey-love-mobile.png" alt="Picture of bunga atas" width={98} height={98} className="absolute -top-[40px] left-1/2 -translate-x-1/2" />
          <Image src="/images/kevin-dan-michelle/img-bunga-atas-kiri-journey-love-mobile.png" alt="Picture of bunga kiri atas" width={128} height={128} className="absolute -top-[45px] left-[57px]" />
          <Image src="/images/kevin-dan-michelle/img-bunga-atas-kanan-journey-love-mobile.png" alt="Picture of bunga kanan atas" width={128} height={128} className="absolute -top-[45px] right-[57px]" />
          <Image src="/images/kevin-dan-michelle/img-bintang-atas-journey-mobile.png" alt="Picture of bintang atas" width={680} height={680} className="absolute -top-[500px] left-0" />
          <Image src="/images/kevin-dan-michelle/img-bintang-kanan-journey-mobile.png" alt="Picture of bintang atas" width={514} height={514} className="absolute top-[300px] right-0" />
        </div>
      </div>
    </>
  )
}