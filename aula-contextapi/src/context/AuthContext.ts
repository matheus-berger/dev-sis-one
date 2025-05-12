import { createContext } from "react";

export type User = {
  name: string;
  email: string;
}

export type AuthContextType = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void; 
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;