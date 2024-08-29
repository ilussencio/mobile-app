import { useAuth } from 'contexts/auth';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { User } from 'services/userService';
import api from 'services/api';

export default function TabTwoScreen() {
  const [user, setUser] = useState<User>();
  const { authData } = useAuth();
  useEffect(() => {
    get();
  }, []);

  async function get() {
    api
      .get('/users-service/users',{
        headers: {
          Authorization: `Bearer ${authData?.token}`,
        },
      })
      .then((response) => {
        setUser({
          userId: response.data.userId,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <View>
      <Text>Two</Text>
      <Text> {user?.userId} </Text>
      <Text> {user?.firstName} </Text>
      <Text> {user?.lastName} </Text>
      <Text> {user?.email} </Text>
    </View>
  );
}
