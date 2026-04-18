import { createContext, useEffect, useState, useRef } from "react";
import { loginUser, signupUser } from "../service/authService";

export const AuthContext = createContext();

const STORAGE_KEY = "auth";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const logoutTimer = useRef(null);


  const startAutoLogout = (expiresAt) => {
    const remainingTime = expiresAt - Date.now();

    if (logoutTimer.current) {
      clearTimeout(logoutTimer.current);
    }

    logoutTimer.current = setTimeout(() => {
      logout();
    }, remainingTime);
  };


  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));

      if (stored) {
        if (stored.expiresAt > Date.now()) {
          setUser(stored.user);
          startAutoLogout(stored.expiresAt);
        } else {
          localStorage.removeItem(STORAGE_KEY);
        }
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }

    return () => {
      if (logoutTimer.current) {
        clearTimeout(logoutTimer.current);
      }
    };
  }, []);


  const login = (email, password) => {
    const userData = loginUser(email, password);

    const authData = {
      user: {
        name: userData.username,
        email: userData.email,
      },
      expiresAt: Date.now() + 60 * 60 * 1000,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(authData));
    setUser(authData.user);

    startAutoLogout(authData.expiresAt);
  };


  const signup = (username, email, password) => {
    const userData = signupUser(username, email, password);

    const authData = {
      user: {
        name: userData.username,
        email: userData.email,
      },
      expiresAt: Date.now() + 5 * 60 * 1000,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(authData));
    setUser(authData.user);

    startAutoLogout(authData.expiresAt);
  };


  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);

    if (logoutTimer.current) {
      clearTimeout(logoutTimer.current);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};