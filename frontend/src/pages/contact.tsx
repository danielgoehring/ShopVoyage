import Offers from "../components/Offers";

const Contact = () => {
  return (
    <section>
      <div className="w-full w-[1476px] mb-8">
        <hr className="border-t-1 border-gray-200 " />
      </div>

      <header className="text-center mb-12">
        <h1 className="text-2xl font-semibold">CONTACT US</h1>
      </header>
      <div className="mobile-about md:flex-row gap-8 mb-14 md:justify-center items-center">
        <div className="mobile-about-image">
          <img
            src="/images/mshoe6.jpg"
            className="w-auto h-[480px] mobile-contact-img"
          />
        </div>
        <div className="mobile-mt-contact">
          <h1 className="text-xl font-semibold mb-6 text-gray-700 ">
            Our Store
          </h1>
          <p className="mt-4  text-gray-700">27967 ShopVoyage Dr.</p>
          <p className="mb-4 text-gray-700">Unit 4000, Atlanta, GA</p>
          <p className=" text-gray-700">Phone: 000-000-0000</p>
          <p className="mb-6 text-gray-700">Email: shopvoyage@shopvoyage.com</p>
          <p className="font-semibold mb-6 text-gray-700 text-xl">
            Careers at ShopVoyage
          </p>
          <p className="mb-6 text-gray-700">
            Learn more about our teams and job openings.
          </p>
          <button className="py-4 px-8 border border-black text-sm ">
            Explore Jobs
          </button>
        </div>
      </div>
      <div className="mt-32">
        <Offers />
      </div>
    </section>
  );
};

export default Contact;
