import type { RootTabScreenProps } from '@/navigation/types';
import { Paths } from '@/navigation/paths';
import { SafeView } from '@/components/SafeView';
import { Text, TouchableOpacity, View } from 'react-native';
import { IconByVariant } from '@/components/atoms';
import { openMapNavigation } from '@/utils/mapNavigation';

function HomeScreen(_props: RootTabScreenProps<Paths.Home>) {
  const handleOpenNavigation = async () => {
    try {
      await openMapNavigation({
        // latitude: 39.9042,
        // longitude: 116.4074,
        address: '北京市东城区天安门广场', // 用于地址搜索
        title: '天安门广场' // 显示名称
      });
    } catch (error) {
      if (__DEV__) {
        // eslint-disable-next-line no-console
        console.error('导航失败:', error);
      }
    }
  };

  return (
    <SafeView className="justify-center items-center gap-5 px-8">
      <IconByVariant
        path="fire"
        className="text-primary"
        width={100}
        height={100}
      />

      <Text className="text-black dark:text-white font-bold text-lg">首页</Text>

      <Text className="text-gray-600 dark:text-gray-400 font-regular text-base">
        Welcome to Home Screen
      </Text>

      <View className="w-full mt-8">
        <TouchableOpacity
          className="bg-primary py-4 px-6 rounded-2xl"
          onPress={handleOpenNavigation}
        >
          <Text className="text-white font-medium text-center">
            打开地图导航
          </Text>
        </TouchableOpacity>
      </View>
    </SafeView>
  );
}

export default HomeScreen;
