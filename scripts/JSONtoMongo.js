const mongoose = require("mongoose");
const fs = require('fs');
const Product = require("../models/Product.js");
const config = require('config');

//connects our back end code with the database
const db = config.get('mongoURI');
mongoose.connect(db);

fs.readFile('./datastore/ProductData.json', 'utf8', function (err, data) {
    if (err) console.log(err);
    var products = JSON.parse(data);
    for (let i = 0; i < products.length; i++) {
        var prod = new Product(products[i]);
        prod.save(function (err) {
            if (err) throw err;
        });
    }
    console.log('finished');
});
