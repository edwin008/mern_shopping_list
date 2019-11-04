const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');

router.get('/productPage', async (req, res) => {
  const product = await Product.find({});
  res.json({ product });
});

module.exports = router;