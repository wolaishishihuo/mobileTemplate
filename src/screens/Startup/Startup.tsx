import { useEffect } from 'react';
import type { RootScreenProps } from '@/navigation/types';
import { Paths } from '@/navigation/paths';
import { SafeView } from '@/components/template/SafeView';
import { Text } from 'react-native';
import { IconByVariant } from '@/components/atoms';

function StartupScreen({ navigation }: RootScreenProps<Paths.Startup>) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(Paths.Tabs);
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeView className="justify-center items-center gap-5">
      <IconByVariant path="fire" className="text-primary" width={100} height={100} />
      
      <Text className="text-black dark:text-white font-bold text-lg">
        Startup Screen
      </Text>
      
      <Text className="text-gray-600 dark:text-gray-400 font-regular text-base">
        Say Hello to Yoyoj RN
      </Text>
    </SafeView>
  );
}

export default StartupScreen;
