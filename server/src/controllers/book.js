import httpStatus from 'http-status';

import { paginate } from '../helpers/utils';
import { APIError } from '../helpers/errors';
import Book from '../models/book';

const BookController = {
  /**
   * @swagger
   * /books:
   *   get:
   *     tags:
   *      - Book
   *     description: Show all books
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: limit
   *         description: pagination limit.
   *         in: query
   *         required: false
   *         type: string
   *       - name: offset
   *         description: pagination offset.
   *         in: query
   *         required: false
   *         type: string
   *       - name: category
   *         description: filter by category
   *         in: query
   *         required: false
   *         type: string
   *     responses:
   *       200:
   *         description: return an array of books'
   */

  async readAll(req, res) {
    const offset = paginate.offset(req.query.offset);
    const limit = paginate.limit(req.query.limit);

    const find = req.query.find === undefined ? {} : {categories: {$in: [req.query.find]}};
    const sort = req.query.sort || {
      createdAt: 1,
    };

    const books = await Book.paginate(find, {
      sort,
      offset,
      limit,
    });
    res.status(httpStatus.OK).json(books);
  },

  /**
   * @swagger
   * /books:
   *   post:
   *     tags:
   *      - Book
   *     description: Create books
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: user
   *         description: Book object.
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Book'
   *     responses:
   *       200:
   *         description: Successfully created
   *         schema:
   *           allOf:
   *              - $ref: '#/definitions/Book'
   *              - properties:
   *                  id:
   *                    type: string
   *                  createdAt:
   *                    type: string
   *                    format: date-time
   *                  updatedAt:
   *                    type: string
   *                    format: date-time
   */
  async create(req, res) {
    const newBook = await Book.create(req.body);
    return res.status(httpStatus.CREATED).json(newBook);
  },



};

export default BookController;
