import { useEffect,useState } from "react";

const FetchData = () => {
    const [data,setData] = useState(null);
    const [error,setError] = useState(null);

   useEffect(() => {
    fetch("").then((response) => {
        if (!response.ok){
            throw new Error("网络请求错误")
        }
        return response.json();
    })
    .then((json) => {
        if (json.code === 200 && json.data) {
            setData(json.data);
        }else{
            setError(json.error || "获取数据失败");
        }
    });
   },[]);
   if (error) return <p>{error}</p>;
   if (!data) return <p>加载中。。。</p>;

    return (
        <div>
          <p>来源：{data.origin}</p>
          <p>作者：{data.name}</p>
          <p>标签：{data.tag}</p>
          <p>内容：{data.content}</p>
        </div>
    );
};

export default FetchData;