// import React from 'react';
// import ThemeToggle from './components/ThemeToggle';
// import TodoList from './components/TodoList';
// import FetchData from './components/FetchData';
// import PageTittle from './components/PageTitle';
// import TimeDisplay from './components/TimeDisplay';
import React from 'react';
import { UserProvider, useUser } from './components/UserContext';

// 登录表单组件
const LoginForm = () => {
    const { login } = useUser();
    const [inputUsername, setInputUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (inputUsername) {
            login(inputUsername);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="text"
                placeholder="用户名"
                value={inputUsername}
                onChange={(e) => setInputUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="密码"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">登录</button>
        </form>
    );
};

// 登出按钮组件
const LogoutButton = () => {
    const { logout } = useUser();
    return <button onClick={logout}>登出</button>;
};

// 显示登录状态的组件
const LoginStatus = () => {
    const { isLoggedIn, username } = useUser();
    return (
        <div>
            {isLoggedIn ? (
                <p>当前用户: {username}</p>
            ) : (
                <p>未登录</p>
            )}
        </div>
    );
};

const App = () => {
    return (
        <UserProvider>
            <h1>用户登录示例</h1>
            <LoginStatus />
            <LoginForm />
            <LogoutButton />
        </UserProvider>
    );
};

export default App;
// import Weather from './components/Weather';

// const App = () => {
//   return (
//     <>
//      <Weather/>
//     </>
//   );
// }

// export default App;
