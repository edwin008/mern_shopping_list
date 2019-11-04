const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

module.exports = Product = mongoose.model('product', productSchema);