'use client'

import { useInView } from '@/app/hooks/useInView'

export default function OurStory() {
  const { ref, isVisible } = useInView()

  return (
    <section id="our-story" className="our-story relative w-full min-h-min bg-[#F6F6F4]">
      <div className="flex flex-col items-center py-[80px] h-full text-[#3B3B3B] text-center font-outfit font-normal text-xs leading-[18px]">
        <div ref={ref}> 
          <div className="grid grid-cols-2 gap-[7px]">
            <img src="/images/cornel-dan-tiara/img-our-story-1.png" alt="Image Our Story" className={`w-[154px] ${isVisible ? 'animate-fade-left opacity-100' : 'opacity-0 translate-y-5'}`} />
            <img src="/images/cornel-dan-tiara/img-our-story-2.png" alt="Image Our Story" className={`w-[154px] ${isVisible ? 'animate-fade-right opacity-100' : 'opacity-0 translate-y-5'}`} />
          </div>
          <h3 className={`relative top-[-12px] text-left font-canela text-[32px] leading-[26px] uppercase ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
            Our Story
          </h3>
          <h3 className={`text-left font-signature text-[36px] leading-[31px] mt-[21px] ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
            Cornel & Tiara
          </h3>
          <div className="mt-[13px] flex flex-col gap-4">
            <p className={`text-left ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
              A small chapter of a story that began years ago.
            </p>
            <p className={`text-left ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
              We've known each other since kindergarten. <br />
              From tiny uniforms to high school days, we basically grew <br />
              up in the same school, same year, same place.
            </p>
            <p className={`text-left ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
              We had our own circles, our own worlds, walking past each <br />
              other in parallel worlds for years without knowing what the <br />
              future had planned.
            </p>
            <p className={`text-left ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
              Until second year of high school in 2014. <br />
              In the same classroom, our paths finally crossed, what <br />
              began as shared laughter slowly turned into a love we never  <br />
              expected.
            </p>
            <p className={`text-left ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
              Then we went to college together in Tangerang, different <br />
              majors, different dreams, but still choosing each other <br />
              every single day. Growing up side by side, learning, fighting,  <br />
              forgiving, and loving harder each year.
            </p>
            <p className={`text-left ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
              10 years later, on October 10th 2024, Cornel got down on <br />
              one knee. The easiest “yes” after more than a decade of <br />
              choosing him.
            </p>
            <p className={`text-left ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
              On our 11th anniversary, we celebrated our Ting Jing <br />
              ceremony with our families, beginning the union of our two <br />
              families.
            </p>
            <p className={`text-left ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
              And now, after all those years, <br />
              from classmates to best friends to lovers <br />
              we're finally saying “I do” on May 2nd, 2026.
            </p>
            <p className={`text-left ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-5'}`}>
              Who would have thought? <br />
              The two of us who never spoke in kindergarten, somehow <br />
              grew up to become each other's home.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}