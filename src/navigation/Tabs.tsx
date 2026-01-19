import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Paths } from './paths';
import { HomeScreen, ProfileScreen } from '@/screens';
import { RootTabParamList } from './types';
import { IconByVariant } from '@/components/atoms';

const Tab = createBottomTabNavigator<RootTabParamList>();

const HomeIcon = ({ size }: { size: number }) => (
  <IconByVariant path="fire" className="text-primary" width={size} height={size} />
);

const ProfileIcon = ({ size }: { size: number }) => (
  <IconByVariant path="fire" className="text-primary" width={size} height={size} />
);

const homeTabBarIcon = ({ size }: { size: number }) => <HomeIcon size={size} />;

const profileTabBarIcon = ({ size }: { size: number }) => <ProfileIcon size={size} />;

const homeOptions = {
  tabBarLabel: '首页',
  tabBarIcon: homeTabBarIcon
};

const profileOptions = {
  tabBarLabel: '我的',
  tabBarIcon: profileTabBarIcon
};

function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93'
      }}
    >
      <Tab.Screen name={Paths.Home} component={HomeScreen} options={homeOptions} />
      <Tab.Screen name={Paths.Profile} component={ProfileScreen} options={profileOptions} />
    </Tab.Navigator>
  );
}

export default TabsNavigator;
