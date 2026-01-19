import { SafeView } from '@/components/SafeView';
import { Text, Animated, TouchableOpacity } from 'react-native';
import { IconByVariant } from '@/components/atoms';
import { Paths } from '@/navigation/paths';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/types';

function StartupScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeView className="justify-center items-center px-8">
      <Animated.View
        className="w-full items-center"
        // 这里可以使用简单的渐入，虽然它是在启动页之后显示的
      >
        <IconByVariant
          path="fire"
          className="text-primary"
          width={80}
          height={80}
        />

        <Text className="text-black dark:text-white font-bold text-2xl mt-8">
          欢迎回来
        </Text>

        <Text className="text-gray-500 dark:text-gray-400 font-regular text-base mt-2 text-center leading-6">
          准备好探索最新的活动了吗？{'\n'}我们已经为您准备好了一切。
        </Text>

        <TouchableOpacity
          className="w-full mt-12 bg-primary/10 py-4 px-6 rounded-2xl border border-primary/20"
          onPress={() => navigation.replace(Paths.Tabs)}
        >
          <Text className="text-primary font-medium text-center">开始使用</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeView>
  );
}

export default StartupScreen;
