import Offers from "../components/Offers";

const About = () => {
  return (
    <div>
      <div className="w-full w-[1476px] mb-8">
        <hr className="border-t-1 border-gray-200 " />
      </div>

      <div className="text-center mb-12">
        <h1 className="text-2xl font-semibold">ABOUT US</h1>
      </div>
      <div className="mobile-about sm:flex-col lg:flex-row gap-16 mb-14 md:items-center">
        <div>
          <img
            src="/images/mshoe2.jpg"
            className="w-auto h-full max-w-[450px] max-h-[457px] "
          />
        </div>
        <div className="mobile-about-margin md:w-2/4">
          <p className=" mb-6  text-gray-700">
            Founded with a passion for discovery, ShopVoyage is more than just
            an e-commerce store – it’s a gateway to global trends and timeless
            classics. We work closely with artisans, small businesses, and
            independent brands to bring you exclusive products that you won’t
            find in your typical retail stores. Whether you’re looking for
            something new for your home or a thoughtful gift, we have you
            covered.
          </p>
          <p className="mb-6 text-gray-700">
            Our commitment extends beyond offering great products. At
            ShopVoyage, we prioritize sustainability and ethical sourcing,
            ensuring that our items are made responsibly. We also pride
            ourselves on exceptional customer service, making your shopping
            experience as seamless and enjoyable as possible. Shop with
            confidence and embark on your own voyage of discovery with us today.
          </p>
          <p className="font-bold mb-6 text-gray-700">Our Vision</p>
          <p className=" text-gray-700">
            At ShopVoyage, we believe that shopping should be an adventure,
            offering unique products from all around the world. Our mission is
            to connect customers with high-quality, curated items that reflect
            their personal style and values. From fashion and accessories to
            home décor, each piece in our collection is handpicked to ensure it
            meets our high standards for craftsmanship and design.
          </p>
        </div>
      </div>

      <div className="mb-24">
        <div className="mb-10">
          <h1 className="text-2xl font-semibold">WHY CHOOSE US</h1>
        </div>
        <div className="md:flex">
          <div className="p-8 md:p-20 border border-gray-200">
            <p className="mb-6 text-sm  font-semibold">
              Uncompromising Craftsmanship:
            </p>
            <p className="text-sm text-gray-700">
              Every item we offer is carefully selected to meet the highest
              standards of craftsmanship and durability.
            </p>
          </div>
          <div className="p-8 md:p-20 border border-gray-200">
            <p className="mb-6 text-sm  font-semibold">
              Effortless Shopping Experience:
            </p>
            <p className="text-sm text-gray-700">
              From browsing to checkout, we’ve streamlined every step to make
              your shopping journey smooth and hassle-free.
            </p>
          </div>
          <div className="p-8 md:p-20 border border-gray-200">
            <p className="mb-6 text-sm  font-semibold">Unmatched Support:</p>
            <p className="text-sm text-gray-700">
              Our team goes above and beyond to provide attentive, tailored
              assistance, ensuring every question or concern is promptly
              addressed.
            </p>
          </div>
        </div>
      </div>
      <Offers />
    </div>
  );
};

export default About;
