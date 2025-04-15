import React from "react";
import { View, Image, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./index.scss";

const Discover = () => {
  const handleNavigateToCard = () => {
    Taro.navigateTo({
      url: "/pages/card/index",
    });
  };

  const handleNavigateToCount = () => {
    Taro.navigateTo({
      url: "/pages/count/index",
    });
  };

  const handleNavigateToMusic = () => {
    Taro.navigateTo({
      url: "/pages/music/index",
    });
  };

  const menuItems = [
    {
      title: "个人名片",

      onClick: handleNavigateToCard,
    },
    {
      title: "记账本",

      onClick: handleNavigateToCount,
    },
    {
      title: "音乐盒子",

      onClick: handleNavigateToMusic,
    },
  ];

  return (
    <View className="discover">
      {menuItems.map((item, index) => (
        <View key={index} className="menu-item" onClick={item.onClick}>
          <View className="menu-item__content">
            <Text className="menu-item__title">{item.title}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Discover;
