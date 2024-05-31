// "use client";

// import { useEffect, useState } from 'react';
// import { fetchProducts, Product } from '../utils/fetchProducts';
// import ProductCard from './ProductCard';

// const ProductList = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const data = await fetchProducts();
//         setProducts(data);
//       } catch (err) {
//         // setError(err.message);
//       }
//     };

//     getProducts();
//   }, []);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//       {products.map((product) => (
//         <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} imageUrl={product.imageUrl} />
//       ))}
//     </div>
//   );
// };

// export default ProductList;
