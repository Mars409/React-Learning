// 从当前目录下导入 UserProfile 组件
import UserProfile from "./UserProfile";
// 从指定路径导入 UserContext，用于在组件树中共享用户信息
import { UserContext } from "../context/UserContext";

/**
 * UserPage 组件，用于提供用户信息上下文并渲染 UserProfile 组件
 * 该组件使用 UserContext.Provider 来包裹 UserProfile 组件，将用户信息传递给子组件
 */
const UserPage = () => {
    // 定义一个用户对象，包含用户的姓名信息
    const user = {
        name: "张三"
    };

    // 返回一个 UserContext.Provider 组件，将用户对象作为 value 属性传递
    // 这样，UserProfile 组件及其子组件都可以通过 UserContext 访问这个用户信息
    return (
        <UserContext.Provider value={user}>
            {/* 渲染 UserProfile 组件，该组件可以使用 UserContext 中的用户信息 */}
            <UserProfile />
        </UserContext.Provider>
    );
};

// 导出 UserPage 组件，以便在其他地方使用
export default UserPage;