'use client'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function AfterHero({ isOpen, isMobile }: Props) {
  return (
    <>
      <section id="after-hero" className="relative flex justify-center items-center w-full h-[419px] md:h-[479px] bg-[url('/images/steven-dan-bella/bg-after-hero-mobile.png')] bg-cover bg-no-repeat">
        <div className="absolute inset-0 bg-[#e2d6bf] mix-blend-multiply opacity-80" />
        <div className="relative text-center">
          <h4 className="font-century text-[14px] md:text-4xl font-normal leading-[30px] md:leading-[54px] text-white uppercase animate" data-animate="zoom-in">
            we love because
          </h4>
          <h4 className="font-century text-2xl md:text-4xl font-bold leading-[55px] md:leading-[55px] text-white mt-[19px] uppercase animate" data-animate="zoom-in">
            he first loved us
          </h4>
          <h2 className="font-century text-xs md:text-4xl font-bold leading-[30px] md:leading-[54px] text-white mt-[19px] md:mt-14 uppercase animate" data-animate="zoom-in">
            John 4:19
          </h2>
        </div>
      </section>
    </>
  )
}