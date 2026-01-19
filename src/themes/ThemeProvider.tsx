import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback
} from 'react';
import { useColorScheme as useDeviceColorScheme, View } from 'react-native';
import { colorScheme as nativeWindColorScheme } from 'nativewind';
import { createMMKV } from 'react-native-mmkv';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
  themeMode: ThemeMode;
  isDark: boolean;
  setThemeMode: (mode: ThemeMode) => void;
}

const storage = createMMKV();
const THEME_STORAGE_KEY = 'user_theme_mode';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const deviceColorScheme = useDeviceColorScheme();
  const [themeMode, setThemeModeState] = useState<ThemeMode>('system');

  // 初始化时从存储读取主题设置
  useEffect(() => {
    const storedTheme = storage.getString(THEME_STORAGE_KEY) as ThemeMode;
    if (storedTheme) {
      setThemeModeState(storedTheme);
    }
  }, []);

  // 计算当前是否为暗色模式
  const isDark = useMemo(() => {
    if (themeMode === 'system') {
      return deviceColorScheme === 'dark';
    }
    return themeMode === 'dark';
  }, [themeMode, deviceColorScheme]);

  // 同步主题模式到 NativeWind
  useEffect(() => {
    if (themeMode === 'system') {
      nativeWindColorScheme.set('system');
    } else {
      nativeWindColorScheme.set(themeMode);
    }
  }, [themeMode]);

  const setThemeMode = useCallback((mode: ThemeMode) => {
    setThemeModeState(mode);
    storage.set(THEME_STORAGE_KEY, mode);
  }, []);

  const value = useMemo(
    () => ({
      themeMode,
      isDark,
      setThemeMode
    }),
    [themeMode, isDark, setThemeMode]
  );

  return (
    <ThemeContext.Provider value={value}>
      <View className="flex-1">
        {children}
      </View>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
