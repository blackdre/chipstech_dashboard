// src/context/AppContext.js
import { createContext } from "react";
import Logo from "../assets/images/logo.png";
import BgImage from "../assets/images/01.png";

// Create the context
export const AppContext = createContext();

// Define the provider component
export const AppProvider = ({ children }) => {
  const appName = "Eternasure";
  const logo = Logo;
  const bgImage = BgImage;

  return (
    <AppContext.Provider value={{ appName, logo, bgImage }}>
      {children}
    </AppContext.Provider>
  );
};
