import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BootSplash from 'react-native-bootsplash';
import { Paths } from './paths';
import { StartupScreen } from '@/screens';
import TabsNavigator from './Tabs';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function ApplicationNavigator() {
  return (
    <NavigationContainer
      onReady={() => {
        BootSplash.hide({ fade: true });
      }}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Paths.Startup} component={StartupScreen} />
        <Stack.Screen name={Paths.Tabs} component={TabsNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ApplicationNavigator;
