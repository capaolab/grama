'use client'

import { useState, createContext, useContext } from "react";

const ThemeContext = createContext();
export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({
    background: '#000000',
    text: '#FFFFFF',
   });

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (typeof context === 'undefined') {
    throw new Error('You have to use useThemeContext inside <ThemeProvider />');
  }

  return [...context];
};
