import { SafeView } from '@/components/SafeView';
import { Text, Animated, View } from 'react-native';
import { IconByVariant } from '@/components/atoms';

function StartupScreen() {

  return (
    <SafeView className="justify-center items-center px-8">
      <Animated.View 
        className="w-full items-center"
        // 这里可以使用简单的渐入，虽然它是在启动页之后显示的
      >
        <IconByVariant path="fire" className="text-primary" width={80} height={80} />
        
        <Text className="text-black dark:text-white font-bold text-2xl mt-8">
          欢迎回来
        </Text>
        
        <Text className="text-gray-500 dark:text-gray-400 font-regular text-base mt-2 text-center leading-6">
          准备好探索最新的活动了吗？{"\n"}我们已经为您准备好了一切。
        </Text>

        <View className="w-full mt-12 bg-primary/10 py-4 px-6 rounded-2xl border border-primary/20">
          <Text className="text-primary font-medium text-center">
            正在初始化系统资源...
          </Text>
        </View>
      </Animated.View>
    </SafeView>
  );
}

export default StartupScreen;
