'use client'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function Footer({ isOpen, isMobile }: Props) {
  return (
    <>
      {isOpen ? (
          <footer id="footer" className="footer relative w-full min-h-min bg-[#4E4E4E]">
            <div className="flex flex-col items-center pt-[80px] h-full text-white font-outfit font-normal text-xs leading-[16px]">
              <div className="w-[280px] min-h-min flex flex-col items-center">
                <img src="/images/cornel-dan-tiara/img-footer.png" alt="Image Footer" className="w-full animate" data-animate="zoom-in" />
                <h3 className="font-canela font-thin text-2xl leading-[22px] uppercase mt-[34px] animate" data-animate="fade-up">
                  thank you
                </h3>
                <p className="mt-[29px] text-center animate" data-animate="fade-up">
                  It would be a joy and an honor for us to have you join <br /> 
                  our celebration and share your blessings.
                </p>
                <img src="/images/cornel-dan-tiara/logo-provite.png" alt="Image Logo Provite" className="w-[89px] mt-[74px] animate" data-animate="fade-up" />
              </div>
            </div>
          </footer>
      ) : null}
    </>
  )
}