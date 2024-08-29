import api from './api';
import { AuthData } from '../contexts/auth';

function signIn(login: string, password: string): Promise<AuthData> {
  return new Promise((resolve, reject) => {
    api
      .post('/authentication-service/auth/login', { login, password })
      .then((response) => {
        resolve({
          token: response.data.token,
          refreshToken: response.data.refreshToken,
          email: login,
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export const authService = {
  signIn,
};
