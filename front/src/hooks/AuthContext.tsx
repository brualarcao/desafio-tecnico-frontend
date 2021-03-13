/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { createContext, useCallback, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/backApi';

interface SignInCredentials {
  login: string;
  senha: string;
}

interface AuthContextData {
  name: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  data: any | null;
  listApi: Array<DataApi> | undefined;
  getListApi(token: string): Promise<Array<DataApi>> | any;
}

interface DataApi {
  titulo: string;
  conteudo: string;
  lista: string;
  id: string;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const history = useHistory();
  const [listApi, setListApi] = useState<DataApi[]>();
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@LetsCode:token');

    if (token) {
      return token;
    }

    return null;
  });

  const getListApi = useCallback(async token => {
    try {
      const response = await api.get('cards/', {
        headers: {
          Accept: 'application/json',
          ContentType: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      setListApi(response.data);
    } catch (error) {
      alert(error.message);
    }
  }, []);

  const signIn = useCallback(async ({ login, senha }) => {
    const response = await api.post('/login/', {
      login,
      senha,
    });
    const token = response.data;

    localStorage.setItem('@LetsCode:token', token);
    setData(token);
    await getListApi(token);
    if (login === 'letscode' && senha === 'lets@123') {
      history.push('/home');
    } else {
      alert(
        'Credenciais incorretas, por favor verifique os dados informados e tente novamente.',
      );
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@LetsCode:token');
    setData(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ name: 'Bruno', signIn, data, listApi, getListApi }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
