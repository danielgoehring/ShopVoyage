import { useEffect, useState } from 'react';
import { fetchProducts, Product } from '../utils/fetchProducts';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        console.log('Fetched products:', data);
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
    <div className="container p-4">
      <div className="flex">
        {products.map((product) => (
          <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} imageurl={product.imageurl} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
