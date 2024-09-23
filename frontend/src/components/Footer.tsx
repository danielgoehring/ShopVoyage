import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mobile-padding">
      <div className="mobile-footer">
        <div className="mb-12 mobile-margin-1">
          <Image
            src="/images/shopvoyagelogo.png"
            alt="logo"
            width={180}
            height={100}
          />
          <p className="mt-6 text-sm text-gray-500 ">
            ShopVoyage is a modern e-commerce platform designed to offer a
            seamless shopping experience. The store features a sleek interface
            with a wide variety of products, easy navigation, and user-friendly
            functionality.{" "}
          </p>
        </div>
        <div className="mb-12 mobile-margin-2">
          <h2 className="text-xl font-semibold mb-4">COMPANY</h2>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="mb-8 mobile-margin-3">
          <h2 className="text-xl font-semibold mb-4">CONTACT</h2>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>(000)-000-0000</li>
            <li>shopvoyage@shopvoyage.com</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>

      <div className="">
        <div className="w-full flex flex-col items-center">
          <div className="w-full w-[1476px]">
            <hr className="border-t-1 border-gray-300 " />
          </div>
          <p className="py-4  text-sm">
            Copyright @ 2024 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
