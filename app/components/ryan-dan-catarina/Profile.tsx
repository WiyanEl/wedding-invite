'use client'

import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function Profile({ isOpen, isMobile }: Props) {
  return (
    <>
      {isOpen ? (
        <section id="profile" className="profile relative w-full min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/images/ryan-dan-catarina/white-paper-texture.png')]">
          <div className="absolute inset-0 bg-[#fffdf8]/40" />
          <div className="text-center h-full pt-[96px] md:pt-[115px] pb-[103px] md:pb-[112px] font-bellmt text-[#60564D]">
            <p className="text-[14px] md:text-[20px] font-normal leading-[20px] md:leading-[26px] animate" data-animate="fade-up">
              <span>We request the honour of your presence</span> <br />
              <span>at the wedding of our beloved son and</span> <br className="md:hidden" />
              <span>daughter</span>
            </p>
            <div className="w-full md:max-w-[1140px] flex flex-col md:flex-row md:justify-between mx-auto mt-[40px] md:mt-[88px]">
              <div>
                <div className="relative w-[200px] md:w-[270px] mx-auto animate" data-animate="fade-up">
                  <div className="absolute inset-0 bg-[#00000059]" />
                  <Image src="/images/ryan-dan-catarina/img-pengantin-pria.png" alt="Picture of Ryan" width={200} height={200} className="md:w-[270px] md:h-[280px]" />
                </div>
                <h2 className="font-bickham md:font-kunstler text-5xl md:text-[64px] font-normal leading-none mt-[21px] md:mt-[27px] animate" data-animate="fade-up">Ryan Febrian</h2>
                <h6 className="text-[14px] md:text-[20px] font-medium leading-[20px] italic mt-[21px] md:mt-5 animate" data-animate="fade-up">The first son of three siblings</h6>
                <h6 className="text-[14px] md:text-[20px] font-normal leading-[24px] md:leading-[26px] mt-[6px] md:mt-5 animate" data-animate="fade-up">
                  <span>MR. WERIANTO WIRANATA and</span> <br />
                  <span>MRS. JUNY</span>
                </h6>
                <Link href="https://instagram.com/febrianryn1" target="_blank" className="relative z-10 flex items-center justify-center gap-2 w-[160px] md:w-[190px] h-[33px] md:h-[40px] bg-[#60564D] md:bg-[#1B1C1D] rounded-[52px] mx-auto mt-[26px] md:mt-[52px] cursor-pointer animate" data-animate="fade-up">
                  <Image src="/images/ryan-dan-catarina/icon-instagram.png" alt="Picture of Icon Instagram" width={13} height={16} className="md:w-[17px] md:h-[21px]"  />
                  <span className="text-xs md:text-lg text-white leading-[16px] font-normal">febrianryn1</span>
                </Link>
              </div>
              <div className="mt-[47px] md:mt-0">
                <div className="relative w-[200px] md:w-[270px] mx-auto animate" data-animate="fade-up">
                  <div className="absolute inset-0 bg-[#00000059]" />
                  <Image src="/images/ryan-dan-catarina/img-pengantin-wanita.png" alt="Picture of Ryan" width={200} height={200} className="md:w-[270px] md:h-[280px]" />
                </div>
                <h2 className="font-bickham md:font-kunstler text-5xl md:text-[64px] font-normal leading-none mt-[21px] md:mt-[27px] animate" data-animate="fade-up">Catarina Christy Natalia</h2>
                <h6 className="text-[14px] md:text-[20px] font-medium leading-[20px] italic mt-[21px] md:mt-5 animate" data-animate="fade-up">The second daughter of three siblings</h6>
                <h6 className="text-[14px] md:text-[20px] font-normal leading-[24px] md:leading-[26px] mt-[6px] md:mt-5 animate" data-animate="fade-up">
                  <span>MR. NASIB SIANTURI and</span> <br />
                  <span>MRS. JANARIA SARADINA SEMBIRING</span>
                </h6>
                <Link href="https://instagram.com/ccnsianturi" target="_blank" className="relative z-10 flex items-center justify-center gap-2 w-[160px] md:w-[190px] h-[33px] md:h-[40px] bg-[#60564D] md:bg-[#1B1C1D] rounded-[52px] mx-auto mt-[26px] md:mt-[52px] cursor-pointer animate" data-animate="fade-up">
                  <Image src="/images/ryan-dan-catarina/icon-instagram.png" alt="Picture of Icon Instagram" width={13} height={16} className="md:w-[17px] md:h-[21px]"  />
                  <span className="text-xs md:text-lg text-white leading-[16px] font-normal">ccnsianturi</span>
                </Link>
              </div>
            </div>
            <p className="text-[14px] md:text-[20px] font-normal leading-[20px] md:leading-[28px] mt-[44px] md:mt-[51px] animate" data-animate="fade-up">
              <span>We would be honoured</span> <br />
              <span>by your presence and blessing.</span>
            </p>
          </div>
        </section>
      ) : null}
    </>
  )
}