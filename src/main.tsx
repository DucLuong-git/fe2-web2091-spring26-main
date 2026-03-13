import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Lab1 from "./pages/Lab1";
import Lab2 from "./pages/Lab2";
import "antd/dist/reset.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Lab2 />
    </BrowserRouter>
  </StrictMode>
);
