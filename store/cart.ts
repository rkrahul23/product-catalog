import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

// ✅ Persist cart state in localStorage
export const cartAtom = atomWithStorage<CartItem[]>("cart", []);







