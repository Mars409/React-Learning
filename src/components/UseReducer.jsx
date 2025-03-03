// 从 React 库中导入 useReducer 钩子
import { useReducer } from "react";

/**
 * 计数器状态的 reducer 函数
 * @param {Object} state - 当前的状态对象，包含 count 属性
 * @param {Object} action - 包含操作类型的对象
 * @returns {Object} - 更新后的状态对象
 */
const countReducer = (state, action) => {
    // 根据 action 的类型执行不同的状态更新逻辑
    switch (action.type) {
        // 当 action 类型为 "increment" 时
        case "increment":
            // 返回一个新的状态对象，count 值在原基础上加 1
            return { count: state.count + 1 };
        // 当 action 类型为 "decrement" 时
        case "decrement":
            // 返回一个新的状态对象，count 值在原基础上减 1
            return { count: state.count - 1 };
        // 如果 action 类型不匹配任何已知类型
        default:
            // 直接返回当前状态，不做任何更新
            return state;
    }
};

/**
 * 计数器组件，使用 useReducer 来管理状态
 */
const Counter = () => {
    // 使用 useReducer 钩子初始化状态和分发函数
    // countReducer 是前面定义的 reducer 函数
    // { count: 0 } 是初始状态
    const [state, dispatch] = useReducer(countReducer, { count: 0 });

    // 组件的返回值，定义了组件的 UI 结构
    return (
        <div>
            {/* 显示当前计数器的值 */}
            <p>{state.count}</p>
            {/* 点击按钮时，调用 dispatch 函数触发 "increment" 动作 */}
            <button onClick={() => dispatch({ type: "increment" })}>增加</button>
            {/* 点击按钮时，调用 dispatch 函数触发 "decrement" 动作 */}
            <button onClick={() => dispatch({ type: "decrement" })}>减少</button>
        </div>
    );
};

// 导出 Counter 组件，以便在其他地方使用
export default Counter;