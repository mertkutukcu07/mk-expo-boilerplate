import { loadString, saveString } from "@/utils/storage";
import { createContext, useState, useEffect, useContext } from "react";
import { StyleSheet } from "react-native";

interface ThemeContextType {
  theme: "light" | "dark";
  changeTheme: (newTheme: "light" | "dark") => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProps> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const fetchTheme = async () => {
      const storedTheme = await loadString("theme");
      if (storedTheme) {
        setTheme(storedTheme as "light" | "dark");
      }
    };

    fetchTheme();
  }, []);

  const changeTheme = async (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    await saveString("theme", newTheme);
  };

  const contextValue: ThemeContextType = {
    theme,
    changeTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeProvider;
