import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext.jsx";
import { ProductsProvider } from "./context/ProductProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </AppProvider>
    </BrowserRouter>
  </StrictMode>
);
