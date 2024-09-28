// Define the Products1 interface
export interface Products1 {
  imageurl: string;
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  type: string;
}

// Set up the BASE_URL to switch based on environment
// const BASE_URL =
//   process.env.NODE_ENV === "production"
//     ? "https://shopvoyage-backend.onrender.com"
//     : "http://localhost:5001"; // Ensure this is correct based on your environment

// Function to fetch all products
export const fetchProducts1 = async (): Promise<Products1[]> => {
  try {
    console.log(
      `Fetching all products from "http://localhost:5001/api/products1"`
    );
    const response = await fetch(`"http://localhost:5001/api/products1"`);
    if (!response.ok) {
      throw new Error(`Failed to fetch products1: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Rethrow the error after logging
  }
};

// Function to fetch product by ID
export const fetchProductById = async (id: number): Promise<Products1> => {
  try {
    console.log(
      `Fetching product by ID from http://localhost:5001/api/products1/${id}`
    );
    const response = await fetch(`http://localhost:5001/api/products1/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch product by ID: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error; // Rethrow the error after logging
  }
};

// export interface Products1 {
//   imageurl: string;
//   id: number;
//   name: string;
//   price: number;
//   imageUrl: string;
//   category: string;
//   type: string;
// }

// // const BASE_URL =
// //   process.env.NODE_ENV === "production"
// //     ? "https://shopvoyage.onrender.com"
// //     : "http://localhost:5001"; // Switch based on environment

// export const fetchProducts1 = async (): Promise<Products1[]> => {
//   const response = await fetch(
//     `https://shopvoyage-backend.onrender.com/api/products1`
//   );
//   if (!response.ok) {
//     throw new Error("Failed to fetch products1");
//   }
//   return response.json();
// };

// export const fetchProductById = async (id: number): Promise<Products1> => {
//   const response = await fetch(
//     `https://shopvoyage-backend.onrender.com/api/products1/${id}`
//   );
//   if (!response.ok) {
//     throw new Error("Failed to fetch product");
//   }
//   return response.json();
// };

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
