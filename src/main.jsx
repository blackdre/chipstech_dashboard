import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext.jsx";
import { ProductsProvider } from "./context/ProductProvider.jsx";
import { CategoriesProvider } from "./context/CategoriesProvider.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <CategoriesProvider>
            <ProductsProvider>
              <App />
            </ProductsProvider>
          </CategoriesProvider>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
