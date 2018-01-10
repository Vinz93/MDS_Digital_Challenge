import httpStatus from 'http-status';

import { paginate } from '../helpers/utils';
import { APIError } from '../helpers/errors';
import Category from '../models/category';


export const readAll = async (req, res) => {
  const offset = paginate.offset(req.query.offset);
  const limit = paginate.limit(req.query.limit);

  const find = req.query.find || {};
  const sort = req.query.sort || {
    createdAt: 1,
  };

  /**
   * @swagger
   * /categories:
   *   get:
   *     tags:
   *      - Category
   *     description: Show all categories
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
   *     responses:
   *       200:
   *         description: return an array of categories'
   */

  const categories = await Category.paginate(find, {
    sort,
    offset,
    limit,
  });
  res.json(categories);
};

/**
 * @swagger
 * /books:
 *   post:
 *     tags:
 *      - Category
 *     description: Create category
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: Category object.
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Category'
 *     responses:
 *       200:
 *         description: Successfully created
 *         schema:
 *           allOf:
 *              - $ref: '#/definitions/Category'
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
export const create = async (req, res) => {
  const category = await Category.create(req.body);
  res.json(category);
};
