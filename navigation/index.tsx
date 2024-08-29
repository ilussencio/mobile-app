import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';

import LoginNavigator from './login-navigator';
import TabNavigator from './tab-navigator';
import { useAuth } from '../contexts/auth';
import Modal from '../screens/modal';

export type RootStackParamList = {
  TabNavigator: undefined;
  Modal: undefined;
  LoginStack: undefined;
  SigninStack: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  const { authData, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authData ? (
          <>
            <Stack.Screen
              name="TabNavigator"
              component={TabNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Modal" component={Modal} options={{ presentation: 'modal' }} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="LoginStack"
              component={LoginNavigator}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
