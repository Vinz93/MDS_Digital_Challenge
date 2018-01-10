import axios from 'axios';

export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const SEARCH_BOOK = 'SEARCH_BOOK';
const ROOT_URL = 'http://localhost:3000';

export function fetchBooks (filter = null) {
  const request = axios.get(`${ROOT_URL}/books${filter === null ? '' : `?find=${filter.value}`}`);
  return {
    type: FETCH_BOOKS,
    payload: request
  }
}
export function fetchCategories () {
  const request = axios.get(`${ROOT_URL}/categories`);
  return {
    type: FETCH_CATEGORIES,
    payload: request
  }
}

export function selectCategory(category) {
  return {
    type: SELECT_CATEGORY,
    category,
  }
}

export function searchBook(search) {
  return {
    type: SEARCH_BOOK,
    search,
  }
}
