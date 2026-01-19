import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Paths } from './paths';
import { StartupScreen } from '@/screens';
import TabsNavigator from './Tabs';
import { RootStackParamList } from './types';
import AnimatedBootSplash from '@/components/AnimatedBootSplash';

const Stack = createNativeStackNavigator<RootStackParamList>();

function ApplicationNavigator() {
  const [splashVisible, setSplashVisible] = useState(true);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={Paths.Startup} component={StartupScreen} />
          <Stack.Screen name={Paths.Tabs} component={TabsNavigator} />
        </Stack.Navigator>
      </NavigationContainer>

      {splashVisible && (
        <AnimatedBootSplash
          onAnimationEnd={() => {
            setSplashVisible(false);
          }}
        />
      )}
    </>
  );
}

export default ApplicationNavigator;
