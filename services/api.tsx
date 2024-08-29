import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useAuth } from 'contexts/auth';

const useApi = axios.create({
  baseURL: 'https://api.srbit.com.br',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
  },
});

async function getToken() {
  await AsyncStorage.getItem('@AuthData')
    .then((auth) => {
      return JSON.parse(auth).token;
    })
    .catch((error) => {
      console.log(error);
      return undefined;
    });
}

export default useApi;
