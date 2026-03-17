import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import "./index.css";
import App from "./App";
import Lab1 from "./pages/Lab1";
import Lab2 from "./pages/Lab2";
import Lab3 from "./pages/Lab3";
import StoryForm from "./pages/Lab4";
import "antd/dist/reset.css";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
     <QueryClientProvider client={queryClient}>
        <StoryForm />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
