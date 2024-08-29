import { Text, View, Button } from 'react-native';

export default function Signin({ navigation }) {
  return (
    <View>
      <Text>REGISTRAR</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
