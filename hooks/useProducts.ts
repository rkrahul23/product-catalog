import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "https://fakestoreapi.com/products"; // Base URL

const fetchProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
}
