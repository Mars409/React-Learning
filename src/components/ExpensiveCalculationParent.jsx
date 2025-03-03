// 从 React 库中导入 useState 钩子，用于管理组件的状态
import { useState } from "react";
// 从当前目录下导入 ExpensiveCalculation 组件
import ExpensiveCalculation from "./ExpensiveCalculation";

/**
 * ExpensiveCalculationParent 组件，作为 ExpensiveCalculation 组件的父组件
 * 该组件包含一个计数器和一个按钮，点击按钮可以增加计数器的值
 * 并将计数器的值传递给 ExpensiveCalculation 组件进行计算
 */
const ExpensiveCalculationParent = () => {
    // 使用 useState 钩子创建一个状态变量 count，初始值为 0
    // setCount 是用于更新 count 状态的函数
    const [count, setCount] = useState(0);

    return (
        <div>
            {/* 创建一个按钮，点击时调用 setCount 函数将 count 的值加 1 */}
            <button onClick={() => setCount(count + 1)}>增加</button>
            {/* 将 count 作为 number 属性传递给 ExpensiveCalculation 组件 */}
            <ExpensiveCalculation number={count} />
        </div>
    );
};

// 导出 ExpensiveCalculationParent 组件，以便在其他地方使用
export default ExpensiveCalculationParent;