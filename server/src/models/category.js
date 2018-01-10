import mongoose from 'mongoose';
import paginate from 'mongoose-paginate';
import fieldRemover from 'mongoose-field-remover';

const Schema = mongoose.Schema;

/**
 * @swagger
 * definition:
 *   Category:
 *     properties:
 *       name:
 *         type: string
 *       description:
 *         type: string
 *       img:
 *         type: string
 *     required:
 *       - name
 *       - description
 */

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: 'the name of the category its already taken',
  },
  description: {
    type: String,
  },
  img: {
    type: String,
  },
});

categorySchema.plugin(paginate);
categorySchema.plugin(fieldRemover, '__v');

export default mongoose.model('Category', categorySchema);
