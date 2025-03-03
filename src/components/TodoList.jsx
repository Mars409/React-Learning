import React, { useState } from 'react';

function TodoList() {
    // 使用 useState 管理待办事项列表
    const [todos, setTodos] = useState([]);
    // 使用 useState 管理输入框的值
    const [inputValue, setInputValue] = useState('');

    // 处理输入框的变化
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    // 处理添加待办事项的逻辑
    const handleAddTodo = () => {
        if (inputValue.trim()!== '') {
            setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    // 处理标记待办事项为已完成的逻辑
    const handleToggleComplete = (todoId) => {
        setTodos(todos.map(todo =>
            todo.id === todoId? {...todo, completed:!todo.completed } : todo
        ));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                placeholder="添加新的待办事项"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={handleAddTodo}>添加</button>
            <ul>
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        style={{ textDecoration: todo.completed? 'line-through' : 'none' }}
                        onClick={() => handleToggleComplete(todo.id)}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList