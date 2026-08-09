import { createContext, useState, useCallback } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("userInfo");
    try {
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (e) {
      console.error("Ошибка чтения профиля из памяти:", e);
      return null;
    }
  });

  const login = useCallback((userData) => {
    setUser(userData);
    localStorage.setItem("userInfo", JSON.stringify(userData));
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("userInfo"); 
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;