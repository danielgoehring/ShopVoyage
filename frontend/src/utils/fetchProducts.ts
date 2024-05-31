// export const fetchProducts = async () => {
//     const res = await fetch('http://localhost:5001/api/products');
//     if (!res.ok) {
//       throw new Error('Failed to fetch products');
//     }
//     return res.json();
//   };
  
export interface Product {
  imageurl: string;
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch('http://localhost:5001/api/products');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};
