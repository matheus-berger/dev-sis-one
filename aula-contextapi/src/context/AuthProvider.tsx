import { useState, type ReactNode } from "react";
import AuthContext, {type AuthContextType, type User} from "./AuthContext";

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
  }

  const logout = () => {
    setUser(null);
  }

  const value: AuthContextType = {
    user,
    login, 
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}

export default AuthProvider;
