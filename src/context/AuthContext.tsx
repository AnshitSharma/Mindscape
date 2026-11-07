// src/context/AuthContext.tsx
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { getCurrentUser, signOutUser } from "@/lib/actions/auth.actions";

interface AuthContextType {
  isAuthenticated: boolean;
  // True until the stored Appwrite session has been checked on page load.
  isChecking: boolean;
  login: () => void;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((user) => setIsAuthenticated(user !== null))
      .finally(() => setIsChecking(false));
  }, []);

  const login = () => setIsAuthenticated(true);
  const logout = async () => {
    await signOutUser();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isChecking, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
