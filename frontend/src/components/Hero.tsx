import Image from "next/image";

const Hero = () => {
  return (
    <section className=" flex flex-col sm:flex-row border border-gray-400 ">
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-black"></p>
            <p className="font-medium text-sm md:text-base">PREMIUM COMFORT</p>
          </div>
          <h1 className="text-3xl sm:pb-3 sm:pt-1 lg:text-5xl leading-relaxed header-layout-sm">
            Step Into Style
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[2px] bg-black"></p>
          </div>
        </div>

        {/* <p className="">Premium Comfort, Unbeatable Value.</p> */}
      </div>

      <img
        src="/images/whitesneakers.jpg"
        alt="Hero Image"
        className="w-full sm:w-1/2 sm:h-[260px] md:h-[360px] lg:h-[450px] xl:h-[550px] xxl:h-[650px] xxxl:h-[750px] xxx2l:h-[850px] xxxxl:h-[950px] object-cover "
      />
    </section>
  );
};

export default Hero;
