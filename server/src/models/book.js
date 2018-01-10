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
 *         type: string
 *       name:
 *         type: string
 *       description:
 *         type: string
 *       img:
 *         type: string
 *       categories:
 *         type: array
 *         items:
 *          type: string
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
    type: String,
    required: true,
    unique: 'the isbn is already taken',
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  categories : [{ type: Schema.Types.ObjectId, ref: 'Category' }]

}, {
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});


BookSchema.plugin(fieldRemover, '__v');
BookSchema.plugin(uniqueValidator);
BookSchema.plugin(paginate);

export default mongoose.model('Book', BookSchema);
