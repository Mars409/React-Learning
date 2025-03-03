// 从 React 库中导入 useState 和 useEffect 钩子
// useState 用于管理组件的状态
// useEffect 用于处理副作用，比如在特定状态变化时执行操作
import { useState, useEffect } from "react";
// 导入自定义的 useDebounce Hook，用于实现输入防抖功能
import useDebounce from "../hooks/useDebounce";

/**
 * Search 组件，用于创建一个搜索输入框，并将输入值传递给父组件处理
 * @param {Object} props - 组件的属性对象
 * @param {Function} props.onSearch - 父组件传递的回调函数，用于处理搜索逻辑
 */
const Search = ({ onSearch }) => {
    // 使用 useState 钩子创建一个名为 input 的状态变量，用于存储输入框的值
    // 初始值为空字符串
    const [input, setInput] = useState("");

    // 使用 useDebounce Hook 创建一个 debouncedInput 变量
    // 它将在输入停止后的 300 毫秒内更新，避免频繁触发搜索操作
    const debouncedInput = useDebounce(input, 300);

    // 使用 useEffect 钩子来处理副作用操作
    // 当 debouncedInput 或 onSearch 发生变化时执行
    useEffect(() => {
        // 如果 debouncedInput 存在（即输入框非空）
        // 调用父组件传递的 onSearch 函数，并将 debouncedInput 作为参数传递
        if (debouncedInput) {
            onSearch(debouncedInput);
        }
    }, [debouncedInput, onSearch]);

    // 组件的返回部分，定义了组件的 UI 结构
    return (
        <input
            type="text"
            // 将输入框的值绑定到 input 状态
            value={input}
            // 当输入框的值改变时，通过 setInput 函数更新 input 状态
            onChange={(e) => setInput(e.target.value)}
            // 输入框的占位符文本
            placeholder="Search..."
        />
    );
};

// 导出 Search 组件，以便在其他文件中引入使用
export default Search;