'use client'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function WeddingGift({ isOpen, isMobile }: Props) {
  return (
    <>
      {isOpen ? (
        <section id="wedding-gift" className="wedding-gift relative w-full min-h-min bg-[#4E4E4E]">
          <div className="flex flex-col items-center py-[80px] md:pb-[86px] h-full text-white font-outfit font-normal text-xs leading-[16px]">
            <div>
              <img src="/images/cornel-dan-tiara/img-wedding-gift-mobile.png" alt="Image Wedding Gift" className="w-[340px] animate" data-animate="zoom-in" />
              <div className="relative top-[-12px] text-left px-[15px]">
                <h3 className="font-canela text-[32px] leading-[26px] uppercase animate" data-animate="fade-up">
                  wedding gift
                </h3>
                <p className="leading-[20px] mt-[47px] animate" data-animate="fade-up">
                  Your presence and prayers are the greatest blessing to us.
                </p>
                <p className="leading-[20px] mt-[16px] animate" data-animate="fade-up">
                  Should you wish to honor us with a gift, please find the <br />
                  details below for your convenience.
                </p>
                <div className="w-full max-w-[224px] text-[#FEFBF0] mt-[49px] animate" data-animate="fade-up">
                  <div className="flex justify-between w-[224px] items-center text-[#FEFBF0] mt-[37px]">
                    <div className="text-left text-[10px] leading-[111.00000000000001%] uppercase">
                      <p>bca</p>
                      <p>1234567891011</p>
                      <p>provite</p>
                    </div>
                    <div className="w-[32px] border-b border-[#FEFBF0] text-center">
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText('1234567891011')
                        }}
                        className="text-[10px] leading-[111.00000000000001%] uppercase cursor-pointer"
                      >
                        copy
                      </button>
                    </div>
                  </div>
                  <div className="border-t border-[#FEFBF0] mt-1" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}