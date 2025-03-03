// 从 React 库中导入 useState 和 useEffect 钩子
// useState 用于创建和管理组件的状态
// useEffect 用于处理副作用，比如数据获取、订阅等
import { useState, useEffect } from "react";

/**
 * 自定义 Hook：useFetch
 * 该 Hook 用于从指定的 URL 获取数据，并管理加载状态和错误信息
 * @param {string} url - 要请求的 API 的 URL
 * @returns {Object} - 包含数据、加载状态和错误信息的对象
 */
function useFetch(url) {
    // 使用 useState 钩子创建三个状态变量
    // data 用于存储从 API 获取到的数据，初始值为 null
    const [data, setData] = useState(null);
    // loading 用于表示数据是否正在加载中，初始值为 true
    const [loading, setLoading] = useState(true);
    // error 用于存储在数据获取过程中可能发生的错误信息，初始值为 null
    const [error, setError] = useState(null);

    // 使用 useEffect 钩子处理副作用，在组件挂载或 url 变化时执行
    useEffect(() => {
        /**
         * 异步函数，用于从指定的 URL 获取数据
         */
        const fetchData = async () => {
            try {
                // 发起一个 fetch 请求，等待服务器响应
                const response = await fetch(url);

                // 检查响应是否成功
                // 如果响应的状态码不在 200 - 299 范围内，抛出一个错误
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                // 将响应数据解析为 JSON 格式
                const result = await response.json();

                // 更新 data 状态，将解析后的数据存储到 data 中
                setData(result);
            } catch (err) {
                // 如果在请求过程中发生错误，捕获错误并更新 error 状态
                setError(err.message);
            } finally {
                // 无论请求成功还是失败，都将 loading 状态设置为 false
                // 表示数据加载完成
                setLoading(false);
            }
        };

        // 调用 fetchData 函数开始获取数据
        fetchData();
    }, [url]); // 依赖数组，只有当 url 发生变化时，useEffect 才会重新执行

    // 返回一个对象，包含数据、加载状态和错误信息
    // 使用该 Hook 的组件可以根据这些信息来渲染 UI
    return { data, loading, error };
}

export default useFetch;