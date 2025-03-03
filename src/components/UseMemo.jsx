// 从 React 库中导入 useMemo 钩子，用于缓存计算结果，避免不必要的重复计算
import { useMemo } from "react";

/**
 * ExpensiveCalculation 组件，用于执行一个计算密集型的操作
 * 该组件接收一个名为 number 的 prop，并返回该数字乘以 2 的结果
 * 使用 useMemo 来优化性能，只有当 number 发生变化时才重新计算结果
 * @param {Object} props - 组件的属性对象
 * @param {number} props.number - 用于计算的数字
 * @returns {JSX.Element} - 包含计算结果的 div 元素
 */
const ExpensiveCalculation = ({ number }) => {
    // 使用 useMemo 钩子来缓存计算结果
    // useMemo 接收一个回调函数和一个依赖数组
    // 回调函数中执行具体的计算逻辑，依赖数组中的值发生变化时，才会重新执行回调函数
    const result = useMemo(() => {
        // 打印日志，表明计算正在进行
        console.log("Calculating...");
        // 执行计算，将传入的 number 乘以 2
        return number * 2;
    }, [number]); // 依赖数组，当 number 发生变化时重新计算

    // 渲染组件，返回一个包含计算结果的 div 元素
    return <div>{result}</div>;
};

// 导出 ExpensiveCalculation 组件，以便在其他地方使用
export default ExpensiveCalculation;