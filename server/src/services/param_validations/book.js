import objectId from 'joi-objectid';
import Joi from 'joi';

Joi.objectId = objectId(Joi);

export default {
  readAll: {
    query: {
      offset: Joi.number().integer(),
      limit: Joi.number().integer(),
      category: Joi.string(),
      q: Joi.string(),
    },
  },

  create: {
    body: {
      name: Joi.string().required(),
      description: Joi.string().required(),
      img: Joi.string(),
      isbn: Joi.number().integer(),
    },
  },

};
