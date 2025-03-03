// 从 React 库中导入 useContext 钩子，用于从上下文获取数据
import { useContext } from "react";
// 从指定路径导入 ThemeContext，这是一个自定义的上下文对象
import { ThemeContext } from "../context/ThemeContext";

/**
 * ThemeButton 组件，用于切换应用的主题模式
 * 它会根据当前主题状态显示不同的背景颜色和按钮文本
 */
const ThemeButton = () => {
    // 使用 useContext 钩子从 ThemeContext 中获取当前的主题状态和设置主题的函数
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div
            style={{
                // 设置组件的高度为整个视口的高度
                height: "100vh",
                // 根据当前主题状态设置背景颜色
                // 如果是亮色主题，背景为白色；如果是暗色主题，背景为黑色
                background: theme === "light" ? "white" : "black"
            }}
        >
            <button
                // 按钮的点击事件处理函数
                // 当点击按钮时，根据当前主题状态切换主题
                // 如果当前是亮色主题，切换到暗色主题；反之亦然
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
                {/* 按钮文本根据当前主题状态动态变化 */}
                {/* 如果当前是亮色主题，按钮显示“切换到暗黑模式”；如果是暗色主题，显示“切换到明亮模式” */}
                切换到{theme === "light" ? "暗黑" : "明亮"}模式
            </button>
        </div>
    );
};

// 导出 ThemeButton 组件，以便在应用的其他部分使用
export default ThemeButton;