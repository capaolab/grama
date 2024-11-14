'use client'

import { useState, createContext, useContext } from "react";
import themes from '../helpers/themes';

const ThemeContext = createContext();
export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.theme.base);

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
