import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

import { useNavigate } from "react-router-dom";

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("token") ? true : false
  );
  const navigate = useNavigate();
  const login = () => {
    setIsAuthenticated(localStorage.getItem("token") ? true : false);
    navigate("/");
  };

  const logout = () => {
    if (isAuthenticated) {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      navigate("/login");
    }
  };
  return (
    <AuthContext.Provider
      value={{ login, logout, isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
