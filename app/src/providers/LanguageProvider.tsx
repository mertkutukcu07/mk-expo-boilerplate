// LanguageContext.tsx
import type React from "react";
import { createContext, useState, useEffect, useContext } from "react";
import { useLocales } from "expo-localization";
import { useTranslation } from "react-i18next";
import { loadString, saveString } from "@/utils/storage";

interface LanguageContextType {
  language: string | null;
  t: (key: string) => string;
  changeLanguage: (newLanguage: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProps> = ({ children }) => {
  const [language, setLanguage] = useState<string | null>(null);
  const { t } = useTranslation();
  const [{ languageCode: defaultLanguage }] = useLocales();

  useEffect(() => {
    const fetchLanguage = async () => {
      const storedLanguage = await loadString("language");
      if (storedLanguage) {
        setLanguage(storedLanguage);
      } else {
        setLanguage(defaultLanguage);
      }
    };

    fetchLanguage();
  }, [defaultLanguage]);

  const changeLanguage = async (newLanguage: string) => {
    setLanguage(newLanguage);
    await saveString("language", newLanguage);
  };

  const contextValue: LanguageContextType = {
    language,
    t,
    changeLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
