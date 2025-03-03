import { useEffect,useState } from "react";

const PageTittle = () => {
    const [count,setcount] = useState(0);
    useEffect(() => {
        document.title = "你点击了${count}次";
    },[count]);
   
    return (
        <div>
          <button onclick={() => setcount(count + 1)}>点击</button>
        </div>
    );
};

export default PageTittle;