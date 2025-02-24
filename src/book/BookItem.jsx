import PropTypes from 'prop-types';

const BookItem = ({ book, onSelect, onDelete, onEdit }) => {
    const handleEdit = () => {
        const updatedTitle = prompt('请输入新的书名', book.title);
        const updatedAuthor = prompt('请输入新的作者', book.author);
        const updatedYear = prompt('请输入新的出版年份', book.year);
        if (updatedTitle && updatedAuthor && updatedYear) {
            onEdit(book.id, { title: updatedTitle, author: updatedAuthor, year: updatedYear });
        }
    };

    return (
        <div className="book-item" onClick={() => onSelect(book)}>
            <div className="book-info">
                <span className="book-title">{book.title}</span>
                <span className="book-author">{book.author}</span>
                <span className="book-year">{book.year}</span>
            </div>
            <div className="book-actions">
                <button onClick={(e) => {
                    e.stopPropagation();
                    handleEdit();
                }}>编辑</button>
                <button onClick={(e) => {
                    e.stopPropagation();
                    onDelete(book.id);
                }}>删除</button>
            </div>
        </div>
    );
};

BookItem.propTypes = {
    book: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired
    }).isRequired,
    onSelect: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default BookItem;