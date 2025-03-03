import React, { useState, useEffect } from "react";

function Weather() {
    // 状态管理
    const [city, setCity] = useState("Nanjing"); // 用户输入的城市名称，默认值为 Nanjing
    const [weatherData, setWeatherData] = useState(null); // 天气数据
    const [error, setError] = useState(""); // 错误信息

    // API 密钥（需要替换成你自己申请的 API Key）
    const apiKey = "3b0f45f59add30d625b70cd937512d39";

    // 处理城市输入变化
    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    // 处理查询天气按钮点击事件
    const handleFetchWeather = () => {
        setError("");
        if (!city) {
            setError("请输入城市名称");
            return;
        }

        // 调用 OpenWeatherMap API
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        fetch(url)
          .then((response) => {
                if (!response.ok) {
                    throw new Error("获取天气信息失败");
                }
                return response.json();
            })
          .then((data) => {
                setWeatherData(data);
            })
          .catch((error) => {
                console.error("错误信息:", error);
                setError("获取天气信息失败，请检查城市名称");
            });
    };

    // 组件挂载时自动获取南京的天气
    useEffect(() => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=Nanjing&appid=${apiKey}&units=metric`;
        fetch(url)
          .then((response) => {
                if (!response.ok) {
                    throw new Error("获取天气信息失败");
                }
                return response.json();
            })
          .then((data) => {
                setWeatherData(data);
            })
          .catch((error) => {
                console.error("错误信息:", error);
                setError("获取南京天气信息失败，请稍后重试");
            });
    }, [apiKey]);

    // 格式化天气数据
    const renderWeather = () => {
        if (!weatherData) return null;

        const { main, weather, wind, name } = weatherData;

        return (
            <div>
                <h2>城市: {name}</h2>
                <p>温度: {main.temp}°C</p>
                <p>天气: {weather[0].description}</p>
                <p>湿度: {main.humidity}%</p>
                <p>风速: {wind.speed} m/s</p>
            </div>
        );
    };

    return (
        <div>
            <h1>天气查询</h1>
            <input
                type="text"
                placeholder="请输入城市名称"
                value={city}
                onChange={handleCityChange}
            />
            <button onClick={handleFetchWeather}>查询天气</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {weatherData && renderWeather()}
        </div>
    );
}

export default Weather;