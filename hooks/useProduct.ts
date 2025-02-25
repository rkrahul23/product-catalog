import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProduct = async (id: string) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response.data;
};

export function useProduct(id: string) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });
}
