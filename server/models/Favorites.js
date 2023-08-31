const mongoose = require('mongoose');
const { Schema } = mongoose;

const favoriteSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  imageId: {
    type: Schema.Types.ObjectId,
    ref: 'Image',
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
