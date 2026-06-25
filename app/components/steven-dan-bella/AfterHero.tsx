'use client'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function AfterHero({ isOpen, isMobile }: Props) {
  return (
    <>
      <section id="after-hero" className="relative w-full h-[299px] md:h-[479px] bg-[url('/images/steven-dan-bella/bg-after-hero-opacity-mobile.png')] bg-cover bg-no-repeat">
        <div className="absolute inset-0 bg-[#7A86A114]" />
        <div className="relative pt-[75px] md:pt-[145px] text-center">
          <h2 className="font-century text-xl md:text-4xl font-normal leading-[30px] md:leading-[54px] text-[#3C475E] animate" data-animate="zoom-in">
            “From His fullness we have <br className="md:hidden" /> all received, <br /> grace upon grace.”
          </h2>
          <h2 className="font-century text-xl md:text-4xl font-normal leading-[30px] md:leading-[54px] text-[#3C475E] mt-7 md:mt-14 animate" data-animate="zoom-in">
            John 1:16
          </h2>
        </div>
      </section>
    </>
  )
}