import { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const login = (username) => setUser({ username });
  const logout = () => setUser(null);

  // Load on app start
  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem('user');
        if (stored) setUser(JSON.parse(stored));
      } finally {
        setIsReady(true);
      }
    })();
  }, []);

  // Save on change
  useEffect(() => {
    if (!isReady) return;
    (async () => {
      if (user) {
        await AsyncStorage.setItem('user', JSON.stringify(user));
      } else {
        await AsyncStorage.removeItem('user');
      }
    })();
  }, [user, isReady]);

  return (
    <AuthContext.Provider value={{ user, login, logout, isReady }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider');
  return context;
}
