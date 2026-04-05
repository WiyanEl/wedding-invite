'use client'

import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function Profile({ isOpen, isMobile }: Props) {
  const bgImage = !isOpen ? isMobile ? "/images/weiliang-dan-cecillia/bg-profile-mobile.png" : "/images/weiliang-dan-cecillia/bg-profile.png" : "/images/weiliang-dan-cecillia/bg-profile-mobile.png"
  

  return (
    <>
      {isOpen ? (
        <section id="profile" className="profile relative w-full min-h-min bg-cover bg-center" style={{ backgroundImage: bgImage ? `url('${bgImage}')` : 'none' }}>
          <div className="relative overflow-hidden">
            <Image src="/images/weiliang-dan-cecillia/img-tumbuhan-atas-profile.png" alt="Tumbuhan Atas" width={473} height={294} className={`absolute top-[-85px] animate`} data-animate="fade-down" />
            <div className="absolute top-[121px] md:top-[128px] right-0 animate" data-animate="fade-left-butterfly">
              <Image src="/images/weiliang-dan-cecillia/img-butterfly-kanan-profile.png" alt="Butterfly Kanan" width={65} height={46} className={`${isOpen ? 'butterfly-flap' : ''}`} />
            </div>
            <div className="absolute top-[194px] md:top-[201px] left-[15px] animate" data-animate="fade-right-butterfly">
              <Image src="/images/weiliang-dan-cecillia/img-butterfly-kiri-profile.png" alt="Butterfly Kiri" width={61} height={44 } className={`${isOpen ? 'butterfly-flap' : ''}`} />
            </div>
            <Image src="/images/weiliang-dan-cecillia/img-tiang-kiri-profile.png" alt="Tiang Kiri" width={196} height={513} className={`absolute bottom-[-5px] left-[0] animate`} data-animate="fade-right" />
            <Image src="/images/weiliang-dan-cecillia/img-tiang-right-profile.png" alt="Tiang Kanan" width={156} height={513} className={`absolute bottom-[-10px] right-[0] animate`} data-animate="fade-left" />
            <div className="absolute bottom-[206px] right-0 animate" data-animate="fade-left-butterfly">
              <Image src="/images/weiliang-dan-cecillia/img-kupu-kupu-profile-3.png" alt="Butterfly Kanan" width={76} height={54} className={`${isOpen ? 'butterfly-flap' : ''}`} />
            </div>
            <div className="flex flex-col items-center text-center h-full pt-[136px] md:pt-[212px] pb-[112px] md:pb-[225px] font-perpetua font-normal text-[#724232]">
              <p className={`text-xs md:text-[14px] leading-[15px] animate`} data-animate="zoom-in">
                By the grace and blessing of God, <br />
                we request the honour of your presence <br />
                at the celebration of the marriage between
              </p>
              <h3 className={`font-channe text-[28px] leading-none uppercase mt-[36px] md:mt-[38px] animate`} data-animate="zoom-in">tan wei liang</h3>
              <p className={`text-xs md:text-[14px] leading-[16px] mt-3 animate`} data-animate="zoom-in">
                Son of <br />
                Mr. Tan Mok Koon and & Mrs. Chang Siew Muay
              </p>
              <Link href="https://instagram.com/wl7130" target="_blank" className={`flex gap-2 text-xs md:text-[14px] leading-[16px] mt-[11px] animate`} data-animate="zoom-in">
                <img src="/images/cornel-dan-tiara/icon-ig.png" alt="Icon Instagram" className="w-[13px]" />
                <span>wl7130</span>
              </Link>
              <h3 className={`font-channe text-2xl md:text-4xl leading-none mt-[21px] md:mt-[33px] animate`} data-animate="zoom-in">&</h3>
              <h3 className={`font-channe text-[28px] leading-none uppercase mt-3 md:mt-[26px] animate`} data-animate="zoom-in">
                cecilia joicelyn <br />
                widjojo
              </h3>
              <p className={`text-xs md:text-[14px] leading-[16px] mt-[20px] animate`} data-animate="zoom-in">
                Son of <br />
                Mr. Tan Mok Koon and & Mrs. Chang Siew Muay
              </p>
              <Link href="https://instagram.com/cizzy_cecilia" target="_blank" className={`flex gap-2 text-xs md:text-[14px] leading-[16px] mt-2.5 animate`} data-animate="zoom-in">
                <img src="/images/cornel-dan-tiara/icon-ig.png" alt="Icon Instagram" className="w-[13px]" />
                <span>cizzy_cecilia</span>
              </Link>
              <p className={`text-xs md:text-[14px] leading-[16px] mt-[22px] md:mt-[33.3px] animate`} data-animate="zoom-in">
                Together with their families,<br />
                they joyfully invite you to share <br />
                in their wedding celebration.
              </p>
            </div>
          </div>
          <Image src="/images/weiliang-dan-cecillia/img-awan-profile.png" alt="Awan" width={314} height={223} className={`absolute z-10 bottom-[-100px] left-2 animate`} data-animate="fade-up" />
          <Image src="/images/weiliang-dan-cecillia/img-tumbuhan-bawah-profile.png" alt="Tumbuhan Bawah" width={473} height={336} className={`absolute z-10 bottom-[-220px] animate`} data-animate="fade-up" />
        </section>
      ) : null}
    </> 
  )
}