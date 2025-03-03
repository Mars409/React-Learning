import { useReducer } from "react";

/**
 * 表单状态的 reducer 函数
 * 根据不同的 action 类型来更新表单的状态
 * @param {Object} state - 当前表单的状态，包含 username 和 email 字段
 * @param {Object} action - 包含操作类型和相关数据的对象
 * @returns {Object} - 更新后的表单状态
 */
const formReducer = (state, action) => {
    switch (action.type) {
        // 当 action 类型为 "update" 时
        case "update":
            // 使用扩展运算符复制当前状态，并更新指定字段的值
            return {
                ...state,
                [action.name]: action.value
            };
        // 当 action 类型为 "reset" 时
        case "reset":
            // 将表单状态重置为初始值
            return {
                username: "",
                email: ""
            };
        // 如果 action 类型不匹配任何已知类型
        default:
            // 直接返回当前状态，不做任何更新
            return state;
    }
};

/**
 * Form 组件，使用 useReducer 来管理表单状态
 */
const Form = () => {
    // 使用 useReducer 钩子初始化表单状态和分发函数
    // formReducer 是前面定义的 reducer 函数
    // { username: "", email: "" } 是表单的初始状态
    const [state, dispatch] = useReducer(formReducer, {
        username: "",
        email: ""
    });

    /**
     * 处理输入字段变化的函数
     * @param {Object} e - 事件对象，包含输入字段的信息
     */
    const handleChange = (e) => {
        // 派发一个 "update" 类型的 action，携带输入字段的名称和值
        dispatch({
            type: "update",
            name: e.target.name,
            value: e.target.value
        });
    };

    /**
     * 处理表单提交的函数
     * @param {Object} e - 事件对象，用于阻止表单默认提交行为
     */
    const handleSubmit = (e) => {
        // 阻止表单的默认提交行为
        e.preventDefault();
        // 弹出一个提示框，显示提交的用户名和邮箱信息
        alert(`提交成功！\n用户名: ${state.username}\n邮箱: ${state.email}`);
        // 派发一个 "reset" 类型的 action，重置表单状态
        dispatch({ type: "reset" });
    };

    /**
     * 处理手动重置表单的函数
     */
    const handleReset = () => {
        // 派发一个 "reset" 类型的 action，重置表单状态
        dispatch({ type: "reset" });
    };

    // 组件的返回值，定义了表单的 UI 结构
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    name="username"
                    value={state.username}
                    onChange={handleChange}
                    placeholder="Username"
                />
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
            </div>
            <div>
                <button type="submit">提交</button>
                <button type="button" onClick={handleReset}>重置</button>
            </div>
        </form>
    );
};

// 导出 Form 组件，以便在其他地方使用
export default Form;