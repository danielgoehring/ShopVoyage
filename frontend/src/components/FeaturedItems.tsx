import { useEffect, useState } from "react";
import { fetchProducts, Product } from "../utils/fetchProducts";
import ProductCard from "./ProductCard";

const FeaturedItems = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        console.log("Fetched products:", data);
        setProducts(data);
      } catch (err) {
        // setError(err.message);
      }
    };

    getProducts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container ">
      <div className="text-center text-3xl mb-10 mt-32">
        <h1 className="font-semibold">FEATURED ITEMS</h1>
        <div className="border-t-2 border-gray-600 my-4 w-40 mx-auto"></div>
        <p className="text-sm text-gray-400 mobile-nc">
          Step into style with our featured shoe collection! Featuring modern
          designs, premium materials, and unmatched comfort.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            imageurl={product.imageurl}
            category={product.category}
            type={product.type}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedItems;
