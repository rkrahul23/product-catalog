import { NextResponse } from "next/server";

const reviews: Record<number, { user: string; comment: string; rating: number }[]> = {
  1: [{ user: "Alice", comment: "Great product!", rating: 5 }],
  2: [{ user: "Bob", comment: "Not bad, but could be better.", rating: 3 }],
  3: [{ user: "Charlie", comment: "Excellent value for money!", rating: 4 }],
};

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const productId = Number(params.id); // Convert string to number
  return NextResponse.json(reviews[productId] || []);
}

