import { showLocation } from 'react-native-map-link-x';

export interface MapNavigationOptions {
  latitude?: number;
  longitude?: number;
  title?: string;
  address?: string;
}

type MapAppId = 'amap' | 'baidumap' | 'qqmap' | 'apple-maps' | 'google-maps';

const APP_TITLES: Record<MapAppId, string> = {
  amap: '高德地图',
  baidumap: '百度地图',
  qqmap: '腾讯地图',
  'apple-maps': '苹果地图',
  'google-maps': 'Google Maps'
};

const APPS_WHITE_LIST: MapAppId[] = ['apple-maps', 'amap', 'baidumap', 'qqmap'];
const DEFAULT_TITLE = '目的地';

const DIALOG_CONFIG = {
  dialogTitle: '选择地图应用',
  dialogMessage: '请选择要使用的地图应用',
  cancelText: '取消'
};

const logError = (error: unknown, message: string): void => {
  if (__DEV__) {
    // eslint-disable-next-line no-console
    console.error(message, error);
  }
};

const buildLocationConfig = (options: MapNavigationOptions) => {
  const { latitude, longitude, title, address } = options;

  return {
    latitude,
    longitude,
    title: title || DEFAULT_TITLE,
    address,
    appsWhiteList: APPS_WHITE_LIST,
    appTitles: APP_TITLES,
    ...DIALOG_CONFIG
  };
};

/**
 * 打开地图导航选择器（自动检测已安装的地图应用并显示选择对话框）
 * 只传目的地坐标，用户可在地图应用中自行选择导航方式（驾车/步行/公交/骑行）
 * @param options 导航选项
 */
export const openMapNavigation = async (
  options: MapNavigationOptions
): Promise<void> => {
  try {
    const config = buildLocationConfig(options);
    await showLocation(config);
  } catch (error) {
    logError(error, '打开地图导航失败:');
    throw error;
  }
};
