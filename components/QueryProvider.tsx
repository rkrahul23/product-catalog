"use client"; // Ensure it runs only on the client side

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

interface QueryProviderProps {
  children: ReactNode;
}

export default function QueryProvider({ children }: QueryProviderProps) {
  const [queryClient] = useState(() => new QueryClient()); // Create QueryClient instance

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
