import React, { useState, useEffect } from 'react';

const TimeDisplay = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000); // 每秒更新一次

    // 组件卸载时清除定时器
    return () => clearInterval(timerId);
  }, []); // 空依赖数组确保仅在组件挂载时运行

  return (
    <div>
      当前时间：{time}
    </div>
  );
};

export default TimeDisplay;