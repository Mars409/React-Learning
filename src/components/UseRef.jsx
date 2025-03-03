// 从 React 库中导入 useRef 钩子，用于创建可变的 ref 对象，可用于访问 DOM 元素
import { useRef } from "react";

/**
 * FocusInput 组件，用于演示如何使用 ref 来控制输入框的焦点
 * 该组件包含一个输入框和一个按钮，点击按钮可使输入框获取焦点
 */
const FocusInput = () => {
    // 使用 useRef 钩子创建一个 ref 对象，初始值为 null
    // 这个 ref 对象将用于关联输入框的 DOM 元素，方便后续操作
    const inputRef = useRef(null);

    /**
     * focusInput 函数，用于设置输入框的焦点
     * 检查 inputRef.current 是否存在（即输入框的 DOM 元素是否已挂载）
     * 如果存在，则调用元素的 focus() 方法使其获取焦点
     */
    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    // 组件的返回部分，定义了组件的 UI 结构
    return (
        <div>
            {/* 创建一个文本输入框，将 ref 属性设置为 inputRef */}
            {/* 这样 inputRef 就会关联到这个输入框的 DOM 元素 */}
            <input ref={inputRef} type="text" />
            {/* 创建一个按钮，当点击按钮时，调用 focusInput 函数 */}
            {/* 从而使输入框获取焦点 */}
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
};

// 导出 FocusInput 组件，以便在其他文件中可以引入使用
export default FocusInput;