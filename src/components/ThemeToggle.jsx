import { useState } from "react";

const ThemeToggle = () => {
    const [isDarkMode,setIsDarkmode] = useState(false);

    const toggleTheme = () => {
        setIsDarkmode((mode) => !mode);
    };

    return (
        <div
          style={{
            height: "100vh",
            background: isDarkMode? "black": "white",
            color: isDarkMode? "white" : "black",
          }}
        >
            <h2>

            </h2>
            <button onClick={toggleTheme}>
                切换到 {isDarkMode ? "白天": "暗黑"}
            </button>
        </div>
    );
};

export default ThemeToggle;