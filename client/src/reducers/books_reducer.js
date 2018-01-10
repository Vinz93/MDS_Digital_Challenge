import { FETCH_BOOKS } from '../actions';

const books = (state = [], action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return [...action.payload.data.docs];
    default:
      return state;
  }
}

export default books;

export const visibleBooks = (search, state) => {
  const exp = new RegExp(search, "i", "g");
  return state.filter(str => str.name.match(exp) || str.isbn.match(exp));
}
