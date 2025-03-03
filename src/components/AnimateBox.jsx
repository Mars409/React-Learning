// 从 React 库中导入 useState 和 useLayoutEffect 钩子
// useState 用于管理组件的状态
// useLayoutEffect 用于处理与布局相关的副作用，在 DOM 更新后同步执行
import { useState, useLayoutEffect } from "react";

/**
 * AnimateBox 组件，用于创建一个随时间移动的盒子
 * 该组件通过定时器不断更新盒子的 X 坐标，实现盒子的移动效果
 */
const AnimateBox = () => {
    // 使用 useState 钩子创建一个名为 position 的状态变量，初始值为 0
    // 这个状态变量用于存储盒子的 X 坐标位置
    const [position, setPosition] = useState(0);

    // 使用 useLayoutEffect 钩子处理与布局相关的副作用
    // 该 effect 会在组件被挂载到 DOM 后立即执行
    useLayoutEffect(() => {
        // 创建一个定时器，每隔 100 毫秒更新一次 position 状态
        const timer = setInterval(() => {
            // 使用函数式更新方式更新 position 状态，每次增加 5 像素
            setPosition((prevPosition) => prevPosition + 5);
        }, 100);

        // 返回一个清理函数，在组件卸载或重新渲染前执行
        // 这个清理函数用于清除定时器，防止内存泄漏
        return () => {
            clearInterval(timer);
        };
    }, []); // 空依赖数组意味着这个 effect 只在组件首次渲染时运行一次

    // 组件的返回部分，定义了组件的 UI 结构
    return (
        <div
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "red",
                // 根据 position 状态使用 translateX 函数设置盒子的 X 坐标
                transform: `translateX(${position}px)`
            }}
        />
    );
};

// 导出 AnimateBox 组件，以便在其他文件中引入使用
export default AnimateBox;