import type { RootTabScreenProps } from '@/navigation/types';
import { Paths } from '@/navigation/paths';
import { SafeView } from '@/components/template/SafeView';
import { Text } from 'react-native';
import { IconByVariant } from '@/components/atoms';

function HomeScreen({ navigation }: RootTabScreenProps<Paths.Home>) {
  return (
    <SafeView className="justify-center items-center gap-5">
      <IconByVariant path="fire" className="text-primary" width={100} height={100} />
      
      <Text className="text-black dark:text-white font-bold text-lg">
        首页
      </Text>
      
      <Text className="text-gray-600 dark:text-gray-400 font-regular text-base">
        Welcome to Home Screen
      </Text>
    </SafeView>
  );
}

export default HomeScreen;
