// Product1.tsx
import { FC } from "react";
import { useRouter } from "next/router";
import ProductCard from "./ProductCard";

const Product1: FC<{
  products: {
    id: number;
    name: string;
    price: number;
    imageurl: string;
    category: string;
    type: string;
  }[];
  limit?: number;
}> = ({ products, limit }) => {
  const displayedProducts = limit ? products.slice(0, limit) : products;
  const router = useRouter();

  const handleProductClick = (id: number) => {
    router.push(`/productpage/${id}`);
  };

  return (
    <section className="container pt-3 pb-16 m-auto">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product.id)}
            className="cursor-pointer"
          >
            <ProductCard
              id={product.id}
              name={product.name}
              price={product.price}
              imageurl={product.imageurl}
              category={product.category}
              type={product.type}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product1;
