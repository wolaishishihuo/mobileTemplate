import type { RootTabScreenProps } from '@/navigation/types';
import { Paths } from '@/navigation/paths';
import { SafeView } from '@/components/template/SafeView';
import { Text } from 'react-native';
import { useTheme } from '@/themes';

function ProfileScreen({ navigation }: RootTabScreenProps<Paths.Profile>) {
  const { setThemeMode } = useTheme();

  return (
    <SafeView className="justify-center items-center gap-5">
      <Text className="text-black dark:text-white font-bold text-lg">
        我的
      </Text>
      
      <Text className="text-gray-600 dark:text-gray-400 font-regular text-base">
        Profile Screen
      </Text>
    </SafeView>
  );
}

export default ProfileScreen;
