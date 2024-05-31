import Image from 'next/image';

const Hero = () => {
    return (
      <section className="relative bg-gray-800 text-white h-[540px]">
        <div className="absolute inset-0 bg-black opacity-50 "></div>
        <img src="/images/whitesneakers.jpg" alt="Hero Image" layout="fill"
        objectFit="cover" className="w-full h-[540px] object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold">Step into Style</h1>
          <p className="text-lg mt-2">Premium Comfort, Unbeatable Value.</p>
        </div>
      </section>
    );
  };
  
  export default Hero;
  