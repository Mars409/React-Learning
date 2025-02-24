import PropTypes from 'prop-types';

const BookDetail = ({ book, onEdit }) => {
    const handleEdit = () => {
        const updatedTitle = prompt('请输入新的书名', book.title);
        const updatedAuthor = prompt('请输入新的作者', book.author);
        const updatedYear = prompt('请输入新的出版年份', book.year);
        if (updatedTitle && updatedAuthor && updatedYear) {
            onEdit(book.id, { title: updatedTitle, author: updatedAuthor, year: updatedYear });
        }
    };

    return (
        <div className="book-detail">
            <h2>{book.title}</h2>
            <p>作者: {book.author}</p>
            <p>出版年份: {book.year}</p>
            <button onClick={handleEdit}>编辑</button>
        </div>
    );
};

BookDetail.propTypes = {
    book: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired
    }).isRequired,
    onEdit: PropTypes.func.isRequired
};

export default BookDetail;