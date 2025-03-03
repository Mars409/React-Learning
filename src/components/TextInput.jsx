// 从 React 库中导入 useState 钩子
import { useState } from "react";

/**
 * TextInput 组件，用于创建一个文本输入框并实时显示输入内容
 */
const TextInput = () => {
    // 使用 useState 钩子来创建一个状态变量 inputValue，初始值为空字符串
    // setInputValue 是用于更新 inputValue 状态的函数
    const [inputValue, setInputValue] = useState("");

    /**
     * handleChange 函数，用于处理输入框内容变化事件
     * @param {Object} e - 事件对象，包含输入框的最新信息
     */
    const handleChange = (e) => {
        // 通过事件对象的 target 属性获取输入框的当前值
        // 并使用 setInputValue 函数更新 inputValue 状态
        setInputValue(e.target.value);
    };

    // 组件的返回部分，定义了组件的 UI 结构
    return (
        <div>
            {/* 创建一个文本输入框 */}
            <input
                type="text"
                // 将输入框的 value 属性绑定到 inputValue 状态
                // 这样输入框会显示 inputValue 的当前值
                value={inputValue}
                // 为输入框的 onChange 事件绑定 handleChange 函数
                // 当输入框内容发生变化时，会触发 handleChange 函数
                onChange={handleChange}
            />
            {/* 显示当前输入框的内容 */}
            <p>你输入了: {inputValue}</p>
        </div>
    );
};

// 导出 TextInput 组件，以便其他文件可以引入使用
export default TextInput;