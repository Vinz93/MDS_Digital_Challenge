import React from 'react';
import { Route , IndexRoute } from 'react-router';

import App from './components/App';
import BooksIndex from './components/BooksIndex';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={BooksIndex} />
  </Route>
);
