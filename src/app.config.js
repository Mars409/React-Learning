import * as Taro from '@tarojs/taro';

console.log('Taro 对象:', Taro);
console.log('defineAppConfig 是否为函数:', typeof Taro.defineAppConfig === 'function');

const { defineAppConfig } = Taro;

export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/discover/index",
    "pages/profile/index",
    "pages/product/index",
    "pages/login/index",
    "pages/card/index",
    "pages/count/index",
    "pages/music/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#E6F3FF",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#999",
    selectedColor: "#4594D5",
    backgroundColor: "#fff",
    borderStyle: "white",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./assets/tabs/home.png",
        selectedIconPath: "./assets/tabs/home-active.png",
      },
      {
        pagePath: "pages/discover/index",
        text: "发现",
        iconPath: "./assets/tabs/discover.png",
        selectedIconPath: "./assets/tabs/discover-active.png",
      },
      {
        pagePath: "pages/profile/index",
        text: "我的",
        iconPath: "./assets/tabs/profile.png",
        selectedIconPath: "./assets/tabs/profile-active.png",
      },
    ],
  },
});
