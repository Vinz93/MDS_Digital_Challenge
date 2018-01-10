import objectId from 'joi-objectid';
import Joi from 'joi';

Joi.objectId = objectId(Joi);

export default {
  readAll: {
    query: {
      offset: Joi.number().integer(),
      limit: Joi.number().integer(),
    },
  },
  create: {
    body: {
      name: Joi.string().required(),
      description: Joi.string(),
      img: Joi.string(),
    },
  },
};
