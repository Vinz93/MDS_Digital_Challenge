import { SEARCH_BOOK } from '../actions';

const search = (state = '', action) => {
  switch (action.type) {
    case SEARCH_BOOK:
      return action.search;
    default:
      return state;
  }
}

export default search;
