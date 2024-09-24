import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  counter: number; // Define the type for counter
}

const Header: React.FC<HeaderProps> = ({ counter }) => {
  const [isVisible, setIsVisible] = useState(false);

  // const handleCounterClick = () => {
  //   setcounter(counter + 1);
  // };
  console.log(`counter: ${counter}`);
  // console.log(isVisible);
  return (
    <header className="py-7">
      <div className="flex justify-between items-center  font-medium">
        <div>
          <Link href="/">
            <Image
              src="/images/shopvoyagelogo.png"
              alt="logo"
              width={180}
              height={100}
            />
          </Link>
        </div>
        <nav className="hidden sm:flex gap-5 text-md text-gray-700">
          <Link href="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
          </Link>
          <Link href="/category1" className="flex flex-col items-center gap-1">
            <p>COLLECTIONS</p>
          </Link>
          <Link href="/about" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
          </Link>
          <Link href="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
          </Link>
        </nav>

        <nav className="flex items-center gap-6">
          <Link href="" className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </Link>
          <div className="group relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-person cursor-pointer"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
            </svg>
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>

          <Link href="/cart" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-bag"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
            </svg>
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {counter}
            </p>
          </Link>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              onClick={() => setIsVisible(true)}
              className="cursor-pointer sm:hidden"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </div>
        </nav>
      </div>
      {/* sidebar */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          isVisible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setIsVisible(false)}
            className=" flex items-center gap-2 p-3 cursor-pointer"
          >
            <div className="mt-[1px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                />
              </svg>
            </div>
            <p className="font-semibold">Back</p>
          </div>
          <Link
            onClick={() => setIsVisible(false)}
            className="py-2 pl-6 border hover:bg-gray-200"
            href="/"
          >
            HOME
          </Link>
          <Link
            onClick={() => setIsVisible(false)}
            className="py-2 pl-6 border hover:bg-gray-200"
            href="/category1"
          >
            COLLECTION
          </Link>
          <Link
            onClick={() => setIsVisible(false)}
            className="py-2 pl-6 border hover:bg-gray-200"
            href="/about"
          >
            ABOUT
          </Link>
          <Link
            onClick={() => setIsVisible(false)}
            className="py-2 pl-6 border hover:bg-gray-200"
            href="/contact"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
