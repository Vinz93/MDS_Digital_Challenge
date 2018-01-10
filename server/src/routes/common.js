import express from 'express';
import validate from 'express-validation';

import Book from '../controllers/book';
import bookValidator from '../services/param_validations/book';
import * as Category from '../controllers/category';
import categoryValidator from '../services/param_validations/category';
import { catchErrors } from '../helpers/errors';
const router = express.Router(); // eslint-disable-line new-cap

validate.options({
  allowUnknownBody: false,
});

router.route('/books')
  .get(validate(bookValidator.readAll), catchErrors(Book.readAll))
  .post(validate(bookValidator.create), catchErrors(Book.create));

router.route('/categories')
  .get(validate(categoryValidator.readAll), catchErrors(Category.readAll))
  .post(validate(categoryValidator.create), catchErrors(Category.create));

export default router;
