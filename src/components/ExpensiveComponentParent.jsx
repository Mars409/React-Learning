// 从 React 库中导入 useState 和 useCallback 钩子
// useState 用于管理组件的状态
// useCallback 用于缓存函数，避免不必要的函数重新创建
import { useState, useCallback } from "react";
// 从当前目录下导入 ExpensiveComponent 组件
import ExpensiveComponent from "./ExpensiveComponent";

/**
 * ExpensiveComponentParent 组件，用于展示计数器并包含一个昂贵的子组件
 * 此组件维护一个计数器状态，并通过 useCallback 优化传递给子组件的回调函数
 */
const ExpensiveComponentParent = () => {
    // 使用 useState 钩子创建一个名为 count 的状态变量，初始值为 0
    // setCount 是用于更新 count 状态的函数
    const [count, setCount] = useState(0);

    /**
     * 使用 useCallback 钩子创建一个记忆化的 memoizedAction 函数
     * useCallback 会返回一个记忆化的函数，只有当依赖项数组中的值发生变化时，才会重新创建该函数
     * 这里的依赖项数组为 [count]，意味着只有当 count 状态发生变化时，memoizedAction 函数才会重新创建
     * 这样可以避免不必要的重新渲染，特别是在将该函数传递给 ExpensiveComponent 时
     */
    const memoizedAction = useCallback(() => {
        // 当触发该函数时，调用 setCount 函数将 count 的值加 1
        setCount(count + 1);
    }, [count]);

    // 组件的返回部分，定义了组件的 UI 结构
    return (
        <div>
            {/* 显示当前 count 状态的值 */}
            <p>Count: {count}</p>
            {/* 将记忆化的 memoizedAction 函数作为 onAction 属性传递给 ExpensiveComponent 组件 */}
            <ExpensiveComponent onAction={memoizedAction} />
        </div>
    );
};

// 导出 ExpensiveComponentParent 组件，以便在其他文件中可以引入使用
export default ExpensiveComponentParent;