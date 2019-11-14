import React from 'react';
import PropTypes from 'prop-types';

const Product = props => {
  return (
    <div>
      <div>
        <img src={props.image} alt={props.alt}></img>
      </div>
      <div>
        <p>{props.name}</p>
      </div>
      <div>
        <small>${props.value}</small>
        <button onClick={props.addCart}>Add to Cart</button>
      </div>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  addCart: PropTypes.func.isRequired
};

export default Product;