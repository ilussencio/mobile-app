import 'react-native-gesture-handler';
import { AuthProvider } from 'contexts/auth';
import RootStack from './navigation';

export default function App() {
  return (
    <AuthProvider>
      <RootStack />
    </AuthProvider>
  );
}
