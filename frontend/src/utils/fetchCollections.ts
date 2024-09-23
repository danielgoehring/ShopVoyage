export interface Collection {
  id: number;
  name: string;
  price: number;
  imageurl: string;
}

const API_BASE_URL = "http://localhost:5001/api";

// Fetch all collections
export const fetchCollections = async (): Promise<Collection[]> => {
  const response = await fetch(`${API_BASE_URL}/collections`);
  if (!response.ok) {
    throw new Error("Failed to fetch collections");
  }
  return response.json();
};
