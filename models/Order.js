const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  cart: [
    {
      name: {
        type: String,
        required: true
      },
      value: {
        type: Number,
        required: true
      },
      amount: {
        type: Number,
        required: true
      }
    }
  ]
});

module.exports = Order = mongoose.model('order', orderSchema);