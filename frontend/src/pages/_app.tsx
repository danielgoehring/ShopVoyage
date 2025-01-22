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
  const [inputValue, setInputValue] = useState<number>(0);
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
