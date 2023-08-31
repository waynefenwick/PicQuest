const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  // You might include other fields here based on your app's needs.
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
