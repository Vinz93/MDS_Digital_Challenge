import mongoose from 'mongoose';
import paginate from 'mongoose-paginate';
import uniqueValidator from 'mongoose-unique-validator';
import fieldRemover from 'mongoose-field-remover';

const Schema = mongoose.Schema;

/**
 * @swagger
 * definition:
 *   Book:
 *     properties:
 *       isbn:
 *         type: number
 *       name:
 *         type: string
 *       description:
 *         type: string
 *       img:
 *         type: string
 *     required:
 *       - isbn
 *       - name
 *       - description
 *       - img
 */

const BookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  isbn: {
    type: Number,
    required: true,
    unique: 'the isbn is already taken',
    lenght: 10,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },

}, {
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});


BookSchema.plugin(fieldRemover, '__v');
BookSchema.plugin(uniqueValidator);
BookSchema.plugin(paginate);

export default mongoose.model('Book', BookSchema);
