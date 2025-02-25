"use client";

import { useAtom } from "jotai";
import { cartAtom } from "@/store/cart";
import { Card, CardContent, Typography, Button, Grid, IconButton } from "@mui/material";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const [cart, setCart] = useAtom(cartAtom);
  const router = useRouter();

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart(cart.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)));
  };

  const handleRemoveItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart 🛒
      </Typography>

      {cart.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <>
          <Grid container spacing={2}>
            {cart.map((item) => (
              <Grid item xs={12} key={item.id}>
                <Card sx={{ display: "flex", alignItems: "center", p: 2 }}>
                  <Image src={item.image} alt={item.title} width={80} height={80} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography>${item.price.toFixed(2)}</Typography>
                    <Button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</Button>
                    <Typography component="span" sx={{ mx: 2 }}>{item.quantity}</Typography>
                    <Button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</Button>
                  </CardContent>
                  <IconButton onClick={() => handleRemoveItem(item.id)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Typography variant="h5" sx={{ mt: 3 }}>
            Total: ${totalPrice.toFixed(2)}
          </Typography>
        </>
      )}

      <Button variant="contained" color="secondary" onClick={() => router.push("/")}>
        Continue Shopping
      </Button>
    </div>
  );
}





