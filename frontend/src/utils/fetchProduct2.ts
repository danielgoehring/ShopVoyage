export interface Products2 {
  imageurl: string;
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export const fetchProducts2 = async (): Promise<Products2[]> => {
  const response = await fetch("http://localhost:5001/api/products2");
  if (!response.ok) {
    throw new Error("Failed to fetch products2");
  }
  return response.json();
};
