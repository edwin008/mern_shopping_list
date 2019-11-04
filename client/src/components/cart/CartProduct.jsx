import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const CartProduct = props => {
  return (
    <Fragment>
      <tr>
        <td>
          <img
            src={props.photo}
            alt={props.name}
            className='CartProduct-Image'
          />
        </td>
        <td>{props.name}</td>
        <td>
          <button onClick={props.removeProduct}> - </button>
          <span className='CartProduct-Amount'>{props.amount}</span>
          <button onClick={props.addProduct}> + </button>
        </td>
        <td>${props.price}</td>
        <td>
          <i className="fa fa-times" onClick={props.removeCartTotal} style={{ color: 'red', cursor: 'pointer' }}></i>
        </td>
      </tr>
    </Fragment>
  );
};

CartProduct.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  addProduct: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired
};

export default CartProduct;