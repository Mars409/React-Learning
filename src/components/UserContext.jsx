import React, { createContext, useContext, useState } from 'react';

// 创建一个用户上下文对象
// 上下文用于在组件树中共享数据，避免通过 props 层层传递
const UserContext = createContext();

// 上下文提供者组件，用于提供上下文数据
const UserProvider = ({ children }) => {
    // 使用 useState 钩子来管理用户的登录状态
    // isLoggedIn 表示用户是否已登录，初始值为 false
    // username 存储当前登录用户的用户名，初始为空字符串
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    // 定义登录函数
    // 当用户登录成功时，调用此函数更新登录状态和用户名
    const login = (user) => {
        setIsLoggedIn(true);
        setUsername(user);
    };

    // 定义登出函数
    // 当用户点击登出按钮时，调用此函数将登录状态重置为未登录，清空用户名
    const logout = () => {
        setIsLoggedIn(false);
        setUsername('');
    };

    // 将登录状态、用户名、登录函数和登出函数作为上下文的值提供给子组件
    return (
        <UserContext.Provider value={{ isLoggedIn, username, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

// 自定义钩子，用于在组件中方便地使用用户上下文
// 组件可以通过调用这个钩子来获取上下文数据
const useUser = () => {
    return useContext(UserContext);
};

// 导出上下文提供者组件和自定义钩子
// 这样其他组件可以引入并使用它们来管理用户登录状态
export { UserProvider, useUser };