import React from 'react';
import PropTypes from 'prop-types';

const Product = props => {
  return (
    <div>
      <div>
        <img src={props.image} alt={props.alt}></img>
      </div>
      <div>
        <p>{props.productName}</p>
      </div>
      <div>
        <small>${props.price}</small>
        <button onClick={props.addCart}>Add to Cart</button>
      </div>
    </div>
  );
};

Product.propTypes = {
  productName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addCart: PropTypes.func.isRequired
};

export default Product;