// _app.tsx
import "../app/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AppProps } from "next/app";
import React, { useState, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [addProductToCart, setAddProductToCart] = useState(0);
  const [size, setSize] = useState("");
  const [productCartimg, setProductCartImg] = useState("");
  const [productCartname, setProductCartName] = useState("");
  const [productCartprice, setProductCartPrice] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="flex flex-col min-h-screen px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Header counter={addProductToCart} />
      <main className="flex-grow">
        <Component
          {...pageProps}
          setcounter={setAddProductToCart}
          counter={addProductToCart}
          setProductCartImg={setProductCartImg}
          setProductCartName={setProductCartName}
          setProductCartPrice={setProductCartPrice}
          setSize={setSize}
          productCartImg={productCartimg}
          productCartName={productCartname}
          productCartPrice={productCartprice}
          size={size}
          setInputValue={setInputValue}
          inputValue={inputValue}
          setCartItems={setCartItems}
          cartItems={cartItems}
        />
      </main>
      <Footer />
    </div>
  );
}

// "use client";
// import "../app/globals.css";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Hero from "../components/Hero";
// import ProductGrid from "../components/FeaturedItems";
// import { useRouter } from "next/router";
// import Category2Page from "./category2";
// import Category1Page from "./category1";
// import About from "./about";
// import Home from "./index";
// import SigninSignup from "./signinsignup";
// import ProductPage from "./productpage";
// import Contact from "./contact";
// import Cart from "./cart";

// export default function App() {
//   const router = useRouter();

//   const mainClass =
//     router.pathname === "/signinsignup" ? "flex-grow bg-zinc-950" : "flex-grow";

//   const renderPage = () => {
//     switch (router.pathname) {
//       case "/":
//         return <Home />;
//       case "/category1":
//         return <Category1Page />;
//       case "/category2":
//         return <Category2Page />;
//       case "/about":
//         return <About />;
//       case "/signinsignup":
//         return <SigninSignup />;
//       case "/productpage":
//         return <ProductPage />;
//       case "/contact":
//         return <Contact />;
//       case "/cart":
//         return <Cart />;
//       // Add more cases for other routes
//       default:
//         return <div>404 Not Found</div>;
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
//       <Header />
//       <main className={mainClass}>{renderPage()}</main>
//       <Footer />
//     </div>
//   );
// }
