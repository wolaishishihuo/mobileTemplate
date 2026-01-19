import type { Paths } from './paths';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = NativeStackScreenProps<RootStackParamList, S>;

export type RootTabScreenProps<
  S extends keyof RootTabParamList = keyof RootTabParamList,
> = BottomTabScreenProps<RootTabParamList, S>;

export type RootStackParamList = {
  [Paths.Startup]: undefined;
  [Paths.Tabs]: undefined;
};

export type RootTabParamList = {
  [Paths.Home]: undefined;
  [Paths.Profile]: undefined;
};
