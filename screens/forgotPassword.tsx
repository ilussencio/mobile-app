import { NavigationProp } from '@react-navigation/native';
import { Button } from 'components/Button';
import { Text } from 'react-native';

export default function ForgotPassword({ navigation }: { navigation: NavigationProp<any> }) {
  return (
    <>
      <Text>Forgot Password</Text>
      <Button onPress={() => navigation.goBack()} title="Go back" />
    </>
  );
}
