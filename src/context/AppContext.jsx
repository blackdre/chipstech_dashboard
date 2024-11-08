// src/context/AppContext.js
import { createContext } from "react";
import Logo from "../assets/logo.png";
import BgImage from "../assets/bg.jpeg";

// Create the context
export const AppContext = createContext();

// Define the provider component
export const AppProvider = ({ children }) => {
  const appName = "Chipstech";
  const logo = Logo;
  const bgImage = BgImage;

  return (
    <AppContext.Provider value={{ appName, logo, bgImage }}>
      {children}
    </AppContext.Provider>
  );
};
