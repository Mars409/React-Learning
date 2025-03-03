// 从 React 库中导入 React，虽然在现代 React 版本中，
// 如果不使用 JSX 中的 React 元素类型，导入 React 不是必需的，但这里保留以兼容更多情况
import React from "react";
// 导入自定义的 useFetch Hook，用于从指定 URL 获取数据
import useFetch from "../hooks/useFetch";

/**
 * Data 组件，用于展示从指定 API 获取的数据
 * 该组件使用自定义的 useFetch Hook 来处理数据的获取，并根据不同的状态进行渲染
 */
const Data = () => {
    // 使用 useFetch Hook 从指定的 URL 获取数据
    // 解构赋值获取数据、加载状态和错误信息
    const { data, loading, error } = useFetch("https://api.xygeng.cn/one");

    // 如果数据正在加载中，渲染加载提示信息
    if (loading) {
        return <div>加载中...</div>;
    }

    // 如果在获取数据过程中发生错误，渲染错误信息
    if (error) {
        return <div>发生错误：{error}</div>;
    }

    // 如果数据已成功加载且没有错误，渲染数据的详细信息
    return (
        <div>
            <p>来源：{data.data.origin}</p>
            <p>作者：{data.data.name}</p>
            <p>标签：{data.data.tag}</p>
            <p>内容：{data.data.content}</p>
        </div>
    );
};

// 导出 Data 组件，以便在其他文件中引入使用
export default Data;