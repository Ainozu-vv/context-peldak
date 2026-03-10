import { ThemeProvider } from "./ThemeContext";
import { LanguageProvider } from "./LanguageContext";
import { AuthProvider } from "./AuthContext";

function AppProviders({ children }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <LanguageProvider>{children}</LanguageProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default AppProviders;
