import React from "react";
import ReactDOM from "react-dom/client";
import { Reset } from "./styles/reset";
import { ThemeProvider } from "styled-components";
import { appTheme } from "./styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRoutes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider theme={appTheme}>
        <AppRoutes />
        <Reset />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
