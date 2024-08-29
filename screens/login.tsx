import { NavigationProp } from '@react-navigation/native';
import { useAuth } from 'contexts/auth';
import { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Login({ navigation }: { navigation: NavigationProp<any> }) {
  const [emailInput, setEmailInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');

  const { signIn, authData } = useAuth();

  const insets = useSafeAreaInsets();

  const handleLogin = () => {
    signIn(emailInput, passwordInput);
  };

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <View style={styles.containerTop}>
        <Text style={styles.homeTitle}>Bem Vindo!</Text>
        <Text style={styles.subTitle}>Entrar na sua conta</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput style={styles.input} placeholder="E-mail" onChangeText={setEmailInput} />
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Senha"
          onChangeText={setPasswordInput}
        />
      </View>

      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.textButton}>ENTRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.lostpassword}
          onPress={() => navigation.navigate('stackForgotPassword')}>
          <Text>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('stackSignin')}>
          <Text>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerTop: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
  },
  homeTitle: {
    fontSize: 40,
  },
  subTitle: {
    fontSize: 15,
  },
  container: {
    display: 'flex',
    marginBottom: 20,
    paddingStart: 20,
    paddingEnd: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 2,
    padding: 10,
    fontSize: 17,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  textButton: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  lostpassword: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
  },
});
