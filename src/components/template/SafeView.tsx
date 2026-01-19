import { useTheme } from '@/themes';
import React, { useMemo } from 'react';
import { StatusBar, StatusBarProps } from 'react-native';
import {
  SafeAreaView,
  SafeAreaViewProps
} from 'react-native-safe-area-context';

export type SafeViewProps = SafeAreaViewProps & {
  hideStatusBar?: boolean;
  animated?: boolean;
};

export const SafeView: React.FC<SafeViewProps> = props => {
  const { hideStatusBar = false, animated = false, className, ...restProps } = props;
  const { isDark } = useTheme();

  const barStyle = useMemo<StatusBarProps['barStyle']>(() => {
    return isDark ? 'light-content' : 'dark-content';
  }, [isDark]);
  
  return (
    <SafeAreaView className={`flex-1 bg-white dark:bg-black ${className || ''}`} {...restProps}>
      <StatusBar barStyle={barStyle} hidden={hideStatusBar} animated={animated} />
      {props.children}
    </SafeAreaView>
  );
};
