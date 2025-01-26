import React, {useState, createContext, ReactNode} from 'react';
import {Appearance} from 'react-native';
import color from './color';

type ThemeContextType = {
  theme: 'light' | 'dark';
  themeColors: any; // ใช้ ThemeColors แทน any
  toggleTheme: (selectedTheme: 'light' | 'dark') => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const systemTheme = Appearance.getColorScheme();

  const [theme, setTheme] = useState(systemTheme || 'light');

  const toggleTheme = (selectedTheme: 'light' | 'dark') => {
    setTheme(selectedTheme);
  };

  const themeColors = theme === 'light' ? color.light : color.dark;

  return (
    <ThemeContext.Provider value={{theme, themeColors, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
