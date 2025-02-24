import BookItem from './BookItem';
import PropTypes from 'prop-types';

const BookList = ({ books, onBookSelect, onDelete, onEdit }) => {
    return (
        <div className="book-list">
            {books.map(book => (
                <BookItem
                    key={book.id}
                    book={book}
                    onSelect={onBookSelect}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </div>
    );
};

BookList.propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired
    })).isRequired,
    onBookSelect: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default BookList;