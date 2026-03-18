'use client'

type HeroProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Hero({ isOpen, setIsOpen }: HeroProps) {
  return (
    <section id="hero" className="hero relative w-full h-screen bg-cover bg-center">
      <div className={`relative z-10 flex ${isOpen ? 'items-end pb-[85px]' : 'items-center'} justify-center h-full`}>

        {!isOpen && (
          <div className="text-center rounded-2xl bg-[#9A3929B3] text-[#FEFBF0] w-[290px] h-[340px] pt-[57px] animate-zoom-in">
            <p className="font-figtree font-medium text-[10px] uppercase">
              we invite you to celebrate
            </p>
            <h2 className="font-cormorant font-normal text-[26px] uppercase mt-3.5">
              adam & yohanna
            </h2>
            <p className="font-figtree font-medium text-[10px] uppercase mt-3.5">
              saturday, 02 may 2026
            </p>
            <p className="font-figtree font-normal text-[12px] uppercase mt-[30px]">
              Dear Mr./Mrs./Ms.
              <br />
              ......
            </p>
            <button onClick={() => setIsOpen(true)} className="bg-[#FEFBF0] rounded uppercase w-[160px] h-[29px] text-[10px] text-[#9A3929] mt-54px mt-[53px]">open invitation</button>
          </div>
        )}

        {isOpen && (
          <div className="text-center text-[#4B2B15] animate-fade-up">
            <p className="font-figtree font-medium text-xs uppercase">
              the wedding of
            </p>
            <h2 className="font-cormorant font-normal text-[28px] uppercase mt-3">
              adam & yohanna
            </h2>
            <p className="font-figtree font-medium text-xs uppercase mt-3">
              saturday, 02 may 2026
            </p>
          </div>
        )}

      </div>
    </section>
  )
}