// 从 React 库中导入 useState 和 useEffect 钩子
// useState 用于管理组件的状态
// useEffect 用于处理副作用，例如设置定时器
import { useState, useEffect } from "react";

/**
 * 自定义 Hook：useDebounce
 * 该 Hook 用于实现防抖功能，即在指定延迟时间内，如果连续触发事件，
 * 则只有最后一次事件会被执行，可用于优化性能，避免频繁触发某些操作
 * @param {any} value - 需要进行防抖处理的值
 * @param {number} delay - 防抖的延迟时间，单位为毫秒
 * @returns {any} - 防抖后的值
 */
function useDebounce(value, delay) {
    // 使用 useState 钩子创建一个状态变量 debouncedValue，用于存储防抖后的值
    // 初始值设置为传入的 value
    const [debouncedValue, setDebouncedValue] = useState(value);

    // 使用 useEffect 钩子来处理副作用操作，即设置定时器
    useEffect(() => {
        // 设置一个定时器，在 delay 毫秒后更新 debouncedValue 状态为当前的 value
        // 这意味着在 delay 时间内，如果 value 没有发生变化，才会更新 debouncedValue
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // 清理函数，在组件卸载或 effect 重新运行前执行
        // 用于清除定时器，避免定时器在不需要的时候继续执行，造成内存泄漏
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]); // 依赖数组，当 value 或 delay 发生变化时，重新设置定时器

    // 返回防抖后的值，供组件使用
    return debouncedValue;
}

// 导出 useDebounce 钩子，以便在其他组件中使用
export default useDebounce;