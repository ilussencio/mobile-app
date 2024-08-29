import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useState, useContext, useEffect } from 'react';

import { authService } from '../services/authService';

export interface AuthData {
  token: string;
  refreshToken: string;
  email: string;
}
interface AuthContextData {
  authData?: AuthData;
  signIn: (email: string, password: string) => Promise<AuthData | undefined>;
  signOut: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadFromStorage();
  }, []);

  async function loadFromStorage() {
    const auth = await AsyncStorage.getItem('@AuthData');
    if (auth) {
      setAuthData(JSON.parse(auth) as AuthData);
    }
    setIsLoading(false);
  }

  async function signIn(email: string, password: string) {
    try {
      const auth = await authService.signIn(email, password);
      setAuthData(auth);
      AsyncStorage.setItem('@AuthData', JSON.stringify(auth));
      return auth;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  async function signOut(): Promise<void> {
    setAuthData(undefined);
    AsyncStorage.removeItem('@AuthData');
  }

  return (
    <AuthContext.Provider value={{ authData, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
