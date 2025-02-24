import Input from "./Input";
import { useState } from "react";

const InputPatent = () => {
    const [inputValue , setInputValue] = useState("");

    const handleInputChange = (newVal) => {
        //更新组件的状态
        setInputValue(newVal);
    };
    return (
        <>
        <h2>输入的值是：{inputValue}</h2>
        <Input onInputChange={handleInputChange}/>
        </>
    );
};

export default InputPatent;