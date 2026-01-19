# MobileTemplate

一个基于 React Native 的移动应用开发模板项目。

## 技术栈

- **React Native** 0.83.1
- **React** 19.2.0
- **TypeScript** 5.8.3
- **React Navigation** 7.x - 导航管理
- **MMKV** - 高性能键值存储
- **SVG** - 矢量图标支持

## 环境要求

- **Node.js** >= 20
- **pnpm** (推荐) 或 npm/yarn
- iOS 开发需要 macOS 和 Xcode
- Android 开发需要 Android Studio

> **注意**: 在开始之前，请确保已完成 [React Native 环境设置](https://reactnative.dev/docs/set-up-your-environment) 指南。

## 快速开始

### 安装依赖

```sh
# 使用 pnpm (推荐)
pnpm install

# 或使用 npm
npm install

# 或使用 yarn
yarn install
```

### iOS 依赖安装

首次克隆项目或更新原生依赖后，需要安装 CocoaPods 依赖：

```sh
# 首次安装 CocoaPods (如果未安装)
bundle install

# 安装 iOS 依赖
cd ios && bundle exec pod install && cd ..
```

更多信息请参考 [CocoaPods 入门指南](https://guides.cocoapods.org/using/getting-started.html)。

## 运行项目

### 启动 Metro 服务器

```sh
# 使用 pnpm
pnpm start

# 或使用 npm
npm start

# 或使用 yarn
yarn start
```

### 运行应用

在 Metro 运行后，打开新的终端窗口，执行以下命令：

#### Android

```sh
pnpm run android
# 或
npm run android
```

#### iOS

```sh
# 默认模拟器
pnpm run ios
# 或
npm run ios

# 指定 iPhone 17 模拟器
pnpm run ios:simulator
# 或
npm run ios:simulator
```

如果一切配置正确，你应该能在 Android 模拟器、iOS 模拟器或连接的设备上看到应用运行。

你也可以直接在 Android Studio 或 Xcode 中构建和运行应用。

## 开发

### 修改应用

打开 `App.tsx` 或 `src/` 目录下的文件进行修改。保存后，应用会自动更新，这得益于 [Fast Refresh](https://reactnative.dev/docs/fast-refresh) 功能。

### 强制重新加载

如果需要强制重新加载（例如重置应用状态）：

- **Android**: 按 <kbd>R</kbd> 键两次，或通过 <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) 或 <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS) 打开 **Dev Menu** 选择 **"Reload"**
- **iOS**: 在 iOS 模拟器中按 <kbd>R</kbd>

## 项目结构

```
mobileTemplate/
├── src/
│   ├── components/      # 组件库
│   │   ├── atoms/      # 原子组件
│   │   └── template/   # 模板组件
│   ├── navigation/      # 导航配置
│   ├── screens/         # 页面组件
│   └── themes/          # 主题系统
├── ios/                 # iOS 原生代码
├── android/             # Android 原生代码
└── App.tsx              # 应用入口
```

## 可用脚本

- `pnpm start` - 启动 Metro 服务器
- `pnpm run android` - 运行 Android 应用
- `pnpm run ios` - 运行 iOS 应用
- `pnpm run ios:simulator` - 在 iPhone 17 模拟器上运行 iOS 应用
- `pnpm run lint` - 运行 ESLint 代码检查
- `pnpm test` - 运行测试

## 故障排除

如果遇到问题，请查看 [React Native 故障排除指南](https://reactnative.dev/docs/troubleshooting)。

## 了解更多

- [React Native 官网](https://reactnative.dev) - 了解更多 React Native 信息
- [入门指南](https://reactnative.dev/docs/environment-setup) - React Native 环境设置概述
- [基础知识](https://reactnative.dev/docs/getting-started) - React Native 基础教程
- [官方博客](https://reactnative.dev/blog) - 最新的 React Native 官方博客文章
- [GitHub 仓库](https://github.com/facebook/react-native) - React Native 开源仓库
