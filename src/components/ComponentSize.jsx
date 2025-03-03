// 从 React 库中导入 useState、useLayoutEffect 和 useRef 钩子
// useState 用于管理组件的状态
// useLayoutEffect 用于在 DOM 更新后同步执行副作用操作
// useRef 用于创建可变的 ref 对象，可用来访问 DOM 元素
import { useState, useLayoutEffect, useRef } from "react";

/**
 * ComponentSize 组件，用于展示子组件的尺寸
 * 该组件利用 useLayoutEffect 来获取子组件的宽度并显示
 */
const ComponentSize = () => {
    // 使用 useState 钩子创建一个名为 size 的状态变量，初始值为 0
    // 这个状态变量用于存储子组件的宽度
    const [size, setSize] = useState(0);

    // 使用 useRef 钩子创建一个 ref 对象，用于访问子组件的 DOM 元素
    const divRef = useRef();

    // 使用 useLayoutEffect 钩子来执行 DOM 相关的副作用操作
    // 此 effect 会在组件渲染到屏幕之后立即执行，并且会在组件更新后重新执行
    // 空依赖数组意味着这个 effect 只在组件首次渲染时运行一次
    useLayoutEffect(() => {
        // 通过 ref 获取子组件的 DOM 元素，并获取其宽度
        if (divRef.current) {
            setSize(divRef.current.offsetWidth);
        }
    }, []);

    // 组件的返回部分，定义了组件的 UI 结构
    return (
        <div>
            {/* 子组件，设置 ref 属性为 divRef，方便后续获取其 DOM 元素 */}
            <div
                ref={divRef}
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "lightblue"
                }}
            ></div>
            {/* 段落元素，显示子组件的宽度 */}
            <p>Width of div: {size}</p>
        </div>
    );
};

// 导出 ComponentSize 组件，以便在其他文件中引入使用
export default ComponentSize;