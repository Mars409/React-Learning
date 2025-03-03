// 从 React 库中导入 useState 钩子，用于管理组件的状态
import { useState } from "react";
// 从指定路径导入 ThemeContext，用于创建主题上下文
import { ThemeContext } from "../context/ThemeContext";

/**
 * ThemeProvider 组件，用于为应用提供主题状态和切换主题的功能
 * 它通过 ThemeContext.Provider 向其子组件共享主题状态和修改主题的方法
 * @param {Object} props - 组件的属性，其中 children 表示包裹在 ThemeProvider 内的子组件
 * @returns {JSX.Element} - 返回一个 ThemeContext.Provider 组件，提供主题相关的值
 */
const ThemeProvider = ({ children }) => {
    // 使用 useState 钩子来管理当前的主题状态
    // 初始主题设置为 "light"，表示亮色模式
    const [theme, setTheme] = useState("light");

    // 返回 ThemeContext.Provider 组件，将 theme 和 setTheme 作为 value 属性传递
    // 这样，所有 ThemeContext.Provider 包裹的子组件都可以通过 ThemeContext 访问和修改主题
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {/* 渲染传入的子组件 */}
            {children}
        </ThemeContext.Provider>
    );
};

// 导出 ThemeProvider 组件，以便在应用的其他部分使用
export default ThemeProvider;