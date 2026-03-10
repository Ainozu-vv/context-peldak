import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const LanguageContext = createContext(undefined);

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = useCallback(() => {
    setLanguage((l) => (l === "en" ? "hu" : "en"));
  }, []);

  const value = useMemo(() => ({ language, toggleLanguage }), [language, toggleLanguage]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export { LanguageContext, LanguageProvider };

function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) {
    throw new Error("...");
  }
  return value;
}
export { useLanguage };
