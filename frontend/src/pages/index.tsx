import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import FeaturedItems from "../components/FeaturedItems";
import Offers from "../components/Offers";
import DiscountOffer from "../components/DiscountOffer";
import Details from "../components/Details";
import Product1 from "../components/Product1"; // Import Product1 component
import { fetchProducts1, Products1 } from "../utils/fetchProduct1"; // Import fetchProducts1 function
import "../app/globals.css";

const Home = () => {
  const [products, setProducts] = useState<Products1[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 100); // Adjust the delay as needed
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts1();
        setProducts(data);
      } catch (err) {
        setError("Failed to fetch products");
      }
    };

    getProducts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Get the last 5 products
  const lastFiveProducts = products.slice(-5);

  return (
    <div>
      <Hero />

      {/* FEATURED ITEMS Section */}

      <div
        className={`container mx-auto mt-20 transition-opacity duration-700 ease-in-out ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-center text-3xl mb-6">
          <h1 className="font-semibold">NEW COLLECTION</h1>
          <div className="border-t-2 border-gray-600 my-4 w-40 mx-auto"></div>
          <p className="text-sm text-gray-400">
            Step into style with our featured shoe collection! Featuring modern
            designs, premium materials, and unmatched comfort.
          </p>
        </div>

        {/* Display the first 10 products */}
        <main>
          <Product1 products={products} limit={10} />
        </main>
      </div>

      <div className="text-center text-3xl">
        <h1 className="font-semibold">FEATURED ITEMS</h1>
        <div className="border-t-2 border-gray-600 my-4 w-40 mx-auto"></div>
        <p className="text-sm text-gray-400">
          Step into style with our featured shoe collection! Featuring modern
          designs, premium materials, and unmatched comfort.
        </p>
      </div>
      <main className="flex justify-center mt-6">
        <Product1 products={lastFiveProducts} />{" "}
        {/* No limit needed here since we're already slicing */}
      </main>
      <Details />
      <Offers />
    </div>
  );
};

export default Home;

// import Hero from "../components/Hero";
// import FeaturedItems from "../components/FeaturedItems";
// import Offers from "../components/Offers";
// import DiscountOffer from "../components/DiscountOffer";
// import NewCollections from "../components/NewCollections";
// import Details from "../components/Details";
// import "../app/globals.css";

// const Home = () => {
//   return (
//     <div>
//       <Hero />
//       <main className="flex justify-center">
//         <NewCollections />
//       </main>
//       {/* <DiscountOffer /> */}
//       <main className="flex justify-center">
//         <FeaturedItems />
//       </main>
//       <Details />

//       <Offers />
//     </div>
//   );
// };

// export default Home;
