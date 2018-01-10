import express from 'express';
import validate from 'express-validation';

import Book from '../controllers/book';
import bookValidator from '../services/param_validations/book';
// import * as Post from '../controllers/post';
// import postValidator from '../services/param_validations/post';
import { catchErrors } from '../helpers/errors';
const router = express.Router(); // eslint-disable-line new-cap

validate.options({
  allowUnknownBody: false,
});

router.route('/books')
  .get(validate(bookValidator.readAll), catchErrors(Book.readAll))
  .post(validate(bookValidator.create), catchErrors(Book.create));

// router.route('/posts')
//   .get(validate(postValidator.readAll), catchErrors(Post.readAll))
//   .post(validate(postValidator.create), catchErrors(Post.create));

export default router;
