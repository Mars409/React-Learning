import { useState } from 'react';
import PropTypes from 'prop-types';

const BookInput = ({ addBook }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && author && year) {
            const newBook = {
                id: Date.now(),
                title,
                author,
                year
            };
            addBook(newBook);
            setTitle('');
            setAuthor('');
            setYear('');
        }
    };

    return (
        <form className="book-input-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="书名"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="作者"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <input
                type="text"
                placeholder="出版年份"
                value={year}
                onChange={(e) => setYear(e.target.value)}
            />
            <button type="submit">添加图书</button>
        </form>
    );
};

BookInput.propTypes = {
    addBook: PropTypes.func.isRequired
};

export default BookInput;