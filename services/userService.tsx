import { useAuth } from 'contexts/auth';

import api from './api';

export interface User {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
}

async function getUser(): Promise<User> {
  return new Promise((resolve, reject) => {
    api
      .get('/users-service/users', {
        headers: {
          Authorization: `Bearer ${useAuth().authData?.token}`,
        },
      })
      .then((response) => {
        resolve({
          userId: response.data.userId,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export const useService = {
  getUser,
};
