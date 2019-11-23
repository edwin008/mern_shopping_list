const express = require('express');
const router = express.Router();
const Order = require('../../models/Order');

router.post('/checkout', async (req, res) => {

  const order = new Order({
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    cart: req.body.cart
  });

  console.log("PRINTING THE ORDER: \n\n");
  console.log(order);
  order.save().then(order => res.json(order));
});

module.exports = router;