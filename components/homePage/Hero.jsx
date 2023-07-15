import { aheadMobile, appstore, reviews } from "@public"
import Image from "next/image"

const Hero = () => {
  return (
    <section className=" mb-4 rounded-2xl flex items-center min-w-full h-96 bg-[#EEEBFE]">
      <div className=" p-8 sm:w-1/2 flex flex-col justify-center">
        <p className="mb-3">Ahead app</p>
        <strong className=" sm:text-2xl md:text-4xl"><span>Master your life</span><br className=" max-md:hidden" /> by mastering <br /> emotions</strong>
        <div className="flex justify-start items-center">
          <div className=" -translate-x-28 ml-2">
            <Image src={appstore} className=" scale-50 max-w-[300px]" alt="Download on appstore" />
          </div>
          <div className="-translate-x-48 mb-6">
            <div style={{ width: "120px", overflow: "hidden" }}>
              <Image src={reviews} layout="responsive" width={120} height={60} alt="appstore reviews" />
            </div>
          </div>
        </div>
      </div>
      <div className=" max-sm:hidden w-1/2 h-auto">
        <Image src={aheadMobile} className=" -translate-y-3 scale-75 max-h-full max-w-full" alt="mobile view" />
      </div>
    </section>
  )
}

export default Hero
