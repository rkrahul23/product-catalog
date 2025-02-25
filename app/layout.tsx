"use client";

import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { useState, useMemo, useEffect } from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // ✅ Create QueryClient instance
  const queryClient = new QueryClient();

  // ✅ Dark Mode State
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // ✅ Create MUI Theme dynamically
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  return (
    <html lang="en">
      <body>
        {/* ✅ Wrap with QueryClientProvider */}
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  Product Catalog
                </Typography>
                <IconButton onClick={toggleDarkMode} color="inherit">
                  {darkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
              </Toolbar>
            </AppBar>
            <main>{children}</main>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}

