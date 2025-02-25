"use client";

import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { cartAtom } from "@/store/cart";
import { useParams, useRouter } from "next/navigation";
import { Card, CardContent, Typography, Button } from "@mui/material";
import Image from "next/image";
import axios from "axios";

const fetchProductDetails = async (id: string) => {
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return res.data;
};

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductDetails(id as string),
  });
  const [cart, setCart] = useAtom(cartAtom);

  if (isLoading) return <Typography>Loading...</Typography>;

  const addToCart = () => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    // ✅ Navigate to Cart Page after adding
    router.push("/cart");
  };

  return (
    <Card sx={{ maxWidth: 500, mx: "auto", p: 2 }}>
      <Image src={product.image} alt={product.title} width={250} height={250} />
      <CardContent>
        <Typography variant="h5">{product.title}</Typography>
        <Typography variant="h6">${product.price}</Typography>
        <Typography>{product.description}</Typography>
        <Button variant="contained" color="primary" onClick={addToCart} sx={{ mt: 2 }}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}




