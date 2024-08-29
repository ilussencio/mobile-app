import { createStackNavigator } from '@react-navigation/stack';
import ForgotPassword from 'screens/forgotPassword';
import Login from 'screens/login';
import Signin from 'screens/signin';

const Stack = createStackNavigator();

export default function LoginNavigator() {
  return (
    <Stack.Navigator initialRouteName="stackLogin">
      <Stack.Screen name="stackLogin" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="stackSignin" component={Signin} options={{ headerShown: false }}/>
      <Stack.Screen
        name="stackForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
