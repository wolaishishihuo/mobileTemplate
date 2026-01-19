import { showLocation } from 'react-native-map-link-x';

export interface MapNavigationOptions {
  latitude?: number;
  longitude?: number;
  title?: string;
  address?: string;
}

/**
 * 打开地图导航选择器（自动检测已安装的地图应用并显示选择对话框）
 * 只传目的地坐标，用户可在地图应用中自行选择导航方式（驾车/步行/公交/骑行）
 * @param options 导航选项
 */
export const openMapNavigation = async (
  options: MapNavigationOptions
): Promise<void> => {
  try {
    const { latitude, longitude, title, address } = options;

    await showLocation({
      latitude,
      longitude,
      title: title || '目的地',
      address,
      // 仅显示中国常用的地图应用
      appsWhiteList: ['apple-maps', 'amap', 'baidumap', 'qqmap'],
      dialogTitle: '选择地图应用',
      dialogMessage: '请选择要使用的地图应用',
      cancelText: '取消',
      // 自定义地图应用的中文名称
      appTitles: {
        amap: '高德地图',
        baidumap: '百度地图',
        qqmap: '腾讯地图',
        'apple-maps': '苹果地图',
        'google-maps': 'Google Maps'
      }
    });
  } catch (error) {
    if (__DEV__) {
      // eslint-disable-next-line no-console
      console.error('打开地图导航失败:', error);
    }
    throw error;
  }
};

/**
 * 打开指定地图应用
 * 只传目的地坐标，用户可在地图应用中自行选择导航方式
 * @param appId 地图应用ID: 'amap' | 'baidumap' | 'qqmap' | 'apple-maps' | 'google-maps'
 * @param options 导航选项
 */
export const openSpecificMapNavigation = async (
  appId: string,
  options: MapNavigationOptions
): Promise<void> => {
  try {
    const { latitude, longitude, title, address } = options;

    await showLocation({
      latitude,
      longitude,
      title: title || '目的地',
      address,
      app: appId as any,
      // 自定义地图应用的中文名称
      appTitles: {
        amap: '高德地图',
        baidumap: '百度地图',
        qqmap: '腾讯地图',
        'apple-maps': '苹果地图',
        'google-maps': 'Google Maps'
      }
    });
  } catch (error) {
    if (__DEV__) {
      // eslint-disable-next-line no-console
      console.error(`打开${appId}导航失败:`, error);
    }
    throw error;
  }
};
