import { combineReducers } from 'redux';

import books from './books_reducer';
import search from './search_reducer';
import categories from './categories_reducer';

const rootReducer = combineReducers({
  books,
  categories,
  search,
});

export default rootReducer;
