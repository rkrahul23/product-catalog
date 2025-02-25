"use client";

import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const fetchProducts = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
};

export default function HomePage() {
  const { data: products, isLoading } = useQuery({ queryKey: ["products"], queryFn: fetchProducts });

  if (isLoading) return <Typography>Loading products...</Typography>;

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      {products.map((product: any) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <Image src={product.image} alt={product.title} width={150} height={150} />
            <CardContent>
              <Typography variant="h6">{product.title}</Typography>
              <Typography>${product.price}</Typography>
              <Link href={`/product/${product.id}`} passHref>
                <Button variant="contained" color="primary">View Details</Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

