const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    require: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  image: {
    type: Buffer,
    contentType: String
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
