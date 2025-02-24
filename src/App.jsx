import { useState } from 'react';
import BookInput from './book/BookInput';
import BookList from './book/BookList';
import BookDetail from './book/BookDetail';
import './App.css';

const App = () => {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);

    const addBook = (newBook) => {
        setBooks([...books, newBook]);
    };

    const deleteBook = (id) => {
        const updatedBooks = books.filter(book => book.id!== id);
        setBooks(updatedBooks);
        if (selectedBook && selectedBook.id === id) {
            setSelectedBook(null);
        }
    };

    const editBook = (id, updatedBook) => {
        const updatedBooks = books.map(book => {
            if (book.id === id) {
                return { ...book, ...updatedBook };
            }
            return book;
        });
        setBooks(updatedBooks);
        if (selectedBook && selectedBook.id === id) {
            setSelectedBook({ ...selectedBook, ...updatedBook });
        }
    };

    const handleBookSelect = (book) => {
        setSelectedBook(book);
    };

    return (
        <div className="app-container">
            <h1>图书管理系统</h1>
            <BookInput addBook={addBook} />
            <BookList
                books={books}
                onBookSelect={handleBookSelect}
                onDelete={deleteBook}
                onEdit={editBook}
            />
            {selectedBook && <BookDetail book={selectedBook} onEdit={editBook} />}
        </div>
    );
};

export default App;
// import { Button } from 'antd';
// import CustomCard from "./components/CustomCard";

// const App = () => {
//     const cardHeader = '示例卡片标题';
//     const cardBody = (
//         <p>
//             这是卡片的主要内容区域。你可以在这里放置任意的文本、图片或者其他组件。
//             这里可以展示一些重要的信息，帮助用户快速了解卡片的核心内容。
//         </p>
//     );
//     const cardFooter = (
//         <Button type="primary">操作按钮</Button>
//     );

//     return (
//         <div>
//             <CustomCard
//                 header={cardHeader}
//                 body={cardBody}
//                 footer={cardFooter}
//             />
//         </div>
//     );
// };

// export default App;
// //————————————————Rose————————————————————————————————————————————
// import { Menu, Carousel, Row, Col } from 'antd';
// import PropTypes from 'prop-types';
// import './App.css';

// // 自定义卡片组件
// const CustomCard = ({ cover, avatar, title, content }) => {
//     return (
//         <div className="custom-card">
//             <img src={cover} alt="封面" className="card-cover" />
//             <div className="avatar-wrapper">
//                 <img src={avatar} alt="头像" className="card-avatar" />
//             </div>
//             <div className="card-content">
//                 <h4>{title}</h4>
//                 <p>{content}</p>
//             </div>
//         </div>
//     );
// };

// // 进行 props 验证
// CustomCard.propTypes = {
//     cover: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired
// };

// const App = () => {
//     return (
//         <div>
//             {/* 头部导航栏 */}
//             <Menu mode="horizontal">
//                 <Menu.Item key="1">首页</Menu.Item>
//                 <Menu.Item key="2">关于</Menu.Item>
//                 <Menu.Item key="3">联系我们</Menu.Item>
//             </Menu>
//             {/* 中间轮播图 */}
//             <Carousel autoplay>
//                 <div>
//                     <img src="/Rose1.jpg" alt="幻灯片 1" className="slide-img" />
//                 </div>
//                 <div>
//                     <img src="/Rose2.jpg" alt="幻灯片 2" className="slide-img" />
//                 </div>
//                 <div>
//                     <img src="/Rose3.jpg" alt="幻灯片 3" className="slide-img" />
//                 </div>
//             </Carousel>
//             {/* 下方卡片区域 */}
//             <Row gutter={16}>
//                 <Col span={8}>
//                     <CustomCard
//                         cover="/Rose1.jpg"
//                         avatar="/Rose1-1.jpg"
//                         title="卡片标题 1"
//                         content="卡片内容 1"
//                     />
//                 </Col>
//                 <Col span={8}>
//                     <CustomCard
//                         cover="/Rose2.jpg"
//                         avatar="/Rose2-2.jpg"
//                         title="卡片标题 2"
//                         content="卡片内容 2"
//                     />
//                 </Col>
//                 <Col span={8}>
//                     <CustomCard
//                         cover="/Rose3.jpg"
//                         avatar="/Rose3-3.jpg"
//                         title="卡片标题 3"
//                         content="卡片内容 3"
//                     />
//                 </Col>
//             </Row>
//             {/* 底部 footer */}
//             <div className="footer">
//                 Footer
//             </div>
//         </div>
//     );
// };

// export default App;
//————————————Rose————————————————————————————————————————————————
// import WelcomeClass from "./components/WelcomeClass";
// import WelcomeFunc from "./components/WelcomeFunc";
// import Students from './components/Students'; 
// import RegistPage from './components/RegistPage';
// function App() {
//   // 封装学生的姓名、年龄、头像、主页等信息
//   const studentInfo = {
//     name: '安雅',
//     age: 20,
//     avatar: 'public/user.jpg', 
//     homepage: 'https://example.com/Anya', // 学生的主页链接
//   };

//   return (
//     <div className="App">
//       <h1>学生信息展示</h1>
//       <Students
//         name={studentInfo.name}
//         age={studentInfo.age}
//         avatar={studentInfo.avatar}
//         homepage={studentInfo.homepage}
//       />
//     </div>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RegistPage />
//   </React.StrictMode>
// );
// export default App;