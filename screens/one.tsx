import { useAuth } from 'contexts/auth';
import { View, Text, Button } from 'react-native';

export default function TabOneScreen() {
  const { authData, signOut } = useAuth();

  return (
    <View>
      <Text>Ola mundo!</Text>
      <Text>{authData?.email}</Text>
      <Text>{authData?.token}</Text>
      <Button title="LogOut" onPress={signOut} />
    </View>
  );
}
