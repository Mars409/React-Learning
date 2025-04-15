import { definePageConfig } from '@tarojs/taro';

console.log('开始执行 index.config.js');
console.log('检查 definePageConfig 是否为函数：', typeof definePageConfig === 'function');
export default definePageConfig({
  navigationBarTitleText: "首页",
});
console.log('完成页面配置');
