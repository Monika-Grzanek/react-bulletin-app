const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  author: { type: String, required: true },
  publishedDate: { type: Date, required: true },
  updatedDate: { type: Date, required: true },
  status: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: String },
  price: { type: Number },
  contact: { type: String },
  location: { type: String },
});

module.exports = mongoose.model('Post', postSchema);
