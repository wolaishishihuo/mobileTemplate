import { useState } from 'react';
import { Animated, Text } from 'react-native';
import BootSplash from 'react-native-bootsplash';

type Props = {
  onAnimationEnd: () => void;
};

function AnimatedBootSplash({ onAnimationEnd }: Props) {
  const [opacity] = useState(() => new Animated.Value(1));
  const [scale] = useState(() => new Animated.Value(1));
  const [logoTranslateY] = useState(() => new Animated.Value(0));
  const [textOpacity] = useState(() => new Animated.Value(0));
  const [textTranslateY] = useState(() => new Animated.Value(20));
  const [footerOpacity] = useState(() => new Animated.Value(0));

  const { container, logo } = BootSplash.useHideAnimation({
    manifest: require('../../assets/bootsplash/manifest.json'),
    logo: require('../../assets/bootsplash/logo.png'),
    statusBarTranslucent: true,
    navigationBarTranslucent: false,

    animate: () => {
      // 动画序列：进场 -> 停留 -> 退场
      Animated.sequence([
        // 1. Logo 进场 & 文字淡入
        Animated.parallel([
          Animated.spring(scale, {
            toValue: 1.1,
            useNativeDriver: true,
            friction: 4,
            tension: 40
          }),
          Animated.timing(textOpacity, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true
          }),
          Animated.timing(textTranslateY, {
            toValue: 0,
            duration: 800,
            useNativeDriver: true
          }),
          Animated.timing(footerOpacity, {
            toValue: 0.5,
            duration: 1000,
            useNativeDriver: true
          })
        ]),
        // 2. 短暂停留，增加“呼吸”感（可选，这里简单处理为延迟）
        Animated.delay(500),
        // 3. 退场动画：Logo 上浮，文字下沉，整体淡出
        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 0,
            duration: 600,
            useNativeDriver: true
          }),
          Animated.timing(logoTranslateY, {
            toValue: -100,
            duration: 600,
            useNativeDriver: true
          }),
          Animated.timing(scale, {
            toValue: 0.8,
            duration: 600,
            useNativeDriver: true
          }),
          Animated.timing(textTranslateY, {
            toValue: 50,
            duration: 600,
            useNativeDriver: true
          })
        ])
      ]).start(() => {
        onAnimationEnd();
      });
    }
  });

  return (
    <Animated.View
      {...container}
      className="absolute inset-0 justify-center items-center z-[999] bg-white dark:bg-black"
      style={[
        container.style,
        { opacity }
      ]}
    >
      <Animated.Image
        {...logo}
        style={[
          logo.style,
          {
            transform: [
              { scale },
              { translateY: logoTranslateY }
            ]
          }
        ]}
      />

      <Animated.View 
        className="items-center mt-8"
        style={{
          opacity: textOpacity,
          transform: [{ translateY: textTranslateY }]
        }}
      >
        <Text className="text-black dark:text-white font-bold text-3xl tracking-widest">
          RN EVENT
        </Text>
        <Text className="text-gray-500 dark:text-gray-400 font-medium text-base mt-2 tracking-[4px]">
          连接每一个精彩瞬间
        </Text>
      </Animated.View>

      <Animated.View 
        className="absolute bottom-12 items-center"
        style={{ opacity: footerOpacity }}
      >
        <Text className="text-gray-400 dark:text-gray-600 text-xs font-light">
          © 2026 MobileTemplate
        </Text>
      </Animated.View>
    </Animated.View>
  );
}

export default AnimatedBootSplash;
