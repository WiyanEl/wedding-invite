'use client'

export default function Profile() {
  return (
    <section id="profile" className="profile relative w-full min-h-min bg-cover bg-center">
      <div className="absolute inset-0 bg-[#B95F38] opacity-[0.12] mix-blend-multiply" />
      <div className="flex flex-col items-center py-[76px] h-full text-[#635953] text-center">
        <p className="font-figtree font-normal text-xs leading-[18px] animate-fade-up">
          Together with their families <br />
          invite you to celebrate <br />
          their marriage
        </p>
        <h3 className="font-cormorant font-bold text-[28px] leading-none uppercase mt-[44px] animate-fade-up">
          adam hardiman
        </h3>
        <p className="font-figtree font-normal text-xs leading-[18px] animate-fade-up mt-2">
          The Son of
        </p>
        <p className="font-figtree font-light text-xs leading-[18px] animate-fade-up">
          Mr. Selamat Hardiman and <br />
          Mrs. Annie Hardiman
        </p>
        <div className="flex gap-2 mt-[14px] animate-fade-up">
          <img src="/images/adam-dan-yohanna/icon-ig.png" alt="Icon Instagram" className="w-[13px]" />
          <p className="font-figtree font-normal text-xs leading-[16px]">
            adamhardiman
          </p>
        </div>
        <h3 className="font-cormorant font-bold text-[28px] leading-none uppercase mt-[33px] animate-fade-up">
          &
        </h3>
        <h3 className="font-cormorant font-bold text-[28px] leading-none uppercase mt-[28px] animate-fade-up">
          yohanna yulianty <br /> usman
        </h3>
        <p className="font-figtree font-normal text-xs leading-[18px] animate-fade-up mt-2">
          The Daughter of
        </p>
        <p className="font-figtree font-light text-xs leading-[18px] animate-fade-up">
          Mr. Fransiscus Usman and <br />
          Mrs. Fransisca Meylinda
        </p>
        <div className="flex gap-2 mt-[14px] animate-fade-up">
          <img src="/images/adam-dan-yohanna/icon-ig.png" alt="Icon Instagram" className="w-[13px]" />
          <p className="font-figtree font-normal text-xs leading-[16px]">
            yohannayu
          </p>
        </div>
        <p className="font-figtree font-normal text-xs leading-[18px] animate-fade-up mt-[45px]">
          Your presence and blessings <br />
          would mean the world to us.
        </p>
      </div>
    </section>
  )
}