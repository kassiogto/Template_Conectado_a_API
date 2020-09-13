import React, { createContext, useEffect, useState } from "react";
import * as authe from "../service/authe";
import useLocalStorage from "../hooks/useLocalStorage";
import API from "../service/api";
import SpinnerLoader from "../components/spinnerComponent";

interface User {
  usuario: string;
  password: string;
}

interface AuthContextData {
  signed: boolean;
  storageUser: User | null;
  loading: boolean;
  signIn(values: object): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [storageToken, setStorageToken, removeStorageToken] = useLocalStorage(
    "@authApp: token"
  );
  const [storageUser, setStorageUser, removeStorageUser] = useLocalStorage(
    "@authApp: user"
  );
  const [loading, setLoading] = useState(false);

  async function signIn(values: object) {
    setLoading(true);
    const response = await authe.signIn(values);

    setStorageUser(response.data.admin);
    setStorageToken(response.data.token);
    API.defaults.headers["Authorization"] = `bearer ${response.data.token}`;

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
  }
  function signOut() {
    removeStorageToken();
    removeStorageUser();

  }

  useEffect(() => {
    async function LoadStorageData() {
      if (storageUser && storageToken) {
        API.defaults.headers.Authorization = `Baerer ${storageToken}`;
      }
      setLoading(false);
    }
    LoadStorageData();
  }, []);

  if (loading) {
    return <SpinnerLoader />;
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!storageUser, storageUser, signIn, signOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
