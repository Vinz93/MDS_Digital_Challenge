import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchBooks } from '../actions';
import { visibleBooks } from '../reducers/books_reducer';
import CategoriesSelector from '../containers/CategoriesSelector';
import SearchForm from '../containers/SearchForm';

class PostIndex extends Component {
  componentWillMount() {
    this.props.fetchBooks();
  }

  renderPosts() {
    const { books } = this.props;
    return books.map(book =>{
      const { id } = book;
      return (
        <li className="list-group-item book" key={id}>
          <img src={book.img} />
          <Link to={`books/${id}`}>
              <p>{book.name}</p>
          </Link>
          <br />
          <span>ISBN: {book.isbn}</span>
          <br />
          <span>Synopsis: {book.description}</span>
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <div className="container-fluid search-container">
          <CategoriesSelector />
          <SearchForm />
        </div>
          <ul className="list-group books-list">
            {this.renderPosts()}
          </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ books, search }) => ({
  books: visibleBooks(search, books),
})

export default connect(mapStateToProps, { fetchBooks })(PostIndex);
