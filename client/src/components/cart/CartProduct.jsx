import React, { Fragment } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import PropTypes from 'prop-types';

const CartProduct = props => {

  // console.log("This is item: " + JSON.stringify(props.image));
  const productImageArray = props.image.map(image => (
    <div data-src={image} />
  ));

  return (
    <Fragment>
      <tr>
        <td>
          <AwesomeSlider>{productImageArray}</AwesomeSlider>
          {/* <img
            src={props.image}
            alt={props.name}
            className='CartProduct-Image'
          /> */}
        </td>
        <td>{props.name}</td>
        <td>
          <button onClick={props.removeProduct}> - </button>
          <span className='CartProduct-Amount'>{props.amount}</span>
          <button onClick={props.addProduct}> + </button>
        </td>
        <td>${props.value}</td>
        <td>
          <i className="fa fa-times" onClick={props.removeCartTotal} style={{ color: 'red', cursor: 'pointer' }}></i>
        </td>
      </tr>
    </Fragment>
  );
};

CartProduct.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  addProduct: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired
};

export default CartProduct;