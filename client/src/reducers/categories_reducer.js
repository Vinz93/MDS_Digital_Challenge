import { FETCH_CATEGORIES, SELECT_CATEGORY } from '../actions';

const categories = (state = { all: [], selected: ''}, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {...state, all: [...action.payload.data.docs]};
    case SELECT_CATEGORY:
      return {...state, selected: action.category};
    default:
      return state;
  }
}

export default categories;
