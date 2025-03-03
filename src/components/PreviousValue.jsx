// 从 React 库中导入 useState、useRef 和 useEffect 钩子
// useState 用于管理组件的状态
// useRef 用于创建一个可变的 ref 对象，可用于存储值或引用 DOM 元素
// useEffect 用于处理副作用，如数据获取、订阅、定时器等
import { useState, useRef, useEffect } from "react";

/**
 * PreviousValue 组件，用于展示当前计数和前一个计数
 * 该组件维护一个计数器状态，并使用 ref 来存储前一个计数值
 */
const PreviousValue = () => {
    // 使用 useState 钩子创建一个名为 count 的状态变量，初始值为 0
    // setCount 是用于更新 count 状态的函数
    const [count, setCount] = useState(0);

    // 使用 useRef 钩子创建一个 ref 对象，用于存储前一个计数值
    // 初始值为 undefined，后续会在 useEffect 中更新其值
    const prevCountRef = useRef();

    // 使用 useEffect 钩子在每次 count 更新后执行副作用操作
    // 这个 effect 会在 count 变化后立即运行，更新 prevCountRef 的值
    useEffect(() => {
        // 将当前的 count 值保存到 prevCountRef 的 current 属性中
        // 这样，在下一次 count 更新时，就可以通过 prevCountRef.current 获取到前一个计数值
        prevCountRef.current = count;
    }, [count]); // 依赖数组，只有 count 发生变化时才会运行这个 effect

    // 组件的返回部分，定义了组件的 UI 结构
    return (
        <div>
            {/* 显示当前的计数值 */}
            <p>当前计数: {count}</p>
            {/* 显示前一个计数值 */}
            {/* 首次渲染时，prevCountRef.current 为 undefined，后续会显示前一个计数值 */}
            <p>前一计数: {prevCountRef.current}</p>
            {/* 创建一个按钮，点击时调用 setCount 函数将 count 的值加 1 */}
            <button onClick={() => setCount(count + 1)}>增加</button>
        </div>
    );
};

// 导出 PreviousValue 组件，以便在其他文件中可以引入使用
export default PreviousValue;