import React, { createContext, useContext, useState, ReactNode } from "react";

interface GlobalStateContextProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  logoVisible: boolean;
  toggleLogoVisible: () => void;
}

const GlobalStateContext = createContext<GlobalStateContextProps | undefined>(
  undefined
);

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  const toggleLogoVisible = () => {
    setLogoVisible((prevState) => !prevState);
  };

  return (
    <GlobalStateContext.Provider
      value={{ isDarkMode, toggleDarkMode, logoVisible, toggleLogoVisible }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};
