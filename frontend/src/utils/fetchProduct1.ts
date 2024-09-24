export interface Products1 {
  imageurl: string;
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  type: string;
}

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://shopvoyage.onrender.com"
    : "http://localhost:5001"; // Switch based on environment

export const fetchProducts1 = async (): Promise<Products1[]> => {
  const response = await fetch(
    "https://shopvoyage-backend.onrender.com/api/products1"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch products1");
  }
  return response.json();
};

export const fetchProductById = async (id: number): Promise<Products1> => {
  const response = await fetch(
    `https://shopvoyage-backend.onrender.com/api/products1/${id}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return response.json();
};

// // utils/fetchProduct1.ts
// export interface Products1 {
//   imageurl: string;
//   id: number;
//   name: string;
//   price: number;
//   imageUrl: string;
//   category: string;
//   type: string;
// }

// export const fetchProducts1 = async (): Promise<Products1[]> => {
//   const response = await fetch("http://localhost:5001/api/products1");
//   if (!response.ok) {
//     throw new Error("Failed to fetch products1");
//   }
//   return response.json();
// };

// export const fetchProductById = async (id: number): Promise<Products1> => {
//   const response = await fetch(`http://localhost:5001/api/products1/${id}`);
//   if (!response.ok) {
//     throw new Error("Failed to fetch product");
//   }
//   return response.json();
// };

///////////////////////////////////////////

// export interface Products1 {
//   imageurl: string;
//   id: number;
//   name: string;
//   price: number;
//   imageUrl: string;
//   category: string;
//   type: string;
// }

// export const fetchProducts1 = async (): Promise<Products1[]> => {
//   const response = await fetch("http://localhost:5001/api/products1");
//   if (!response.ok) {
//     throw new Error("Failed to fetch products1");
//   }
//   return response.json();
// };
