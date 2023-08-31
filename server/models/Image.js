const mongoose = require('mongoose');

const { Schema } = mongoose;

const imageSchema = new Schema({
  unsplashId: {
    type: String,
    required: true,
    unique: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  tags: [
    {
      slug: String,
      title: String,
    },
  ],
  // ... (other fields)
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
