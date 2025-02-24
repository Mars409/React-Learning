import React from 'react';
import { Menu } from 'antd';
import { Button } from 'antd';

const Header = () => {
  return (
    <Menu mode="horizontal" style={{ lineHeight: '64px' }}>
      <Menu.Item key="home">首页</Menu.Item>
      <Menu.Item key="mail">邮件</Menu.Item>
      <Menu.Item key="settings">设置</Menu.Item>
      <Menu.Item key="profile">
        <a href="https://your-profile-link.com" target="_blank">Profile</a>
      </Menu.Item>
    </Menu>
  );

export default Header;