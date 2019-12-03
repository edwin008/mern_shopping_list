import React, { Fragment } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import PropTypes from 'prop-types';
import { Popup } from 'semantic-ui-react';

const CartProduct = props => {

  // console.log("This is item: " + JSON.stringify(props.image));
  // const productImageArray = props.image.map(image => (
  //   <div data-src={image} />
  // ));

  return (
    <Fragment>
      <br />
      <tr id="row-wrap" >
        <td>
          {/* <AwesomeSlider bullets={false}>{productImageArray}</AwesomeSlider> */}
          <img src={props.image[0]} style={{ height: '12.5%', paddingLeft: '25%' }} />
        </td>
        <td style={{ textAlign: 'center' }}>{props.name}</td>
        <td><center>{props.size}</center></td>
        <td>
          <center>
            {/* <button onClick={props.removeProduct}> - </button> */}
            <i class="minus icon" onClick={props.removeProduct} style={{ color: '#077BFF', cursor: 'pointer' }}></i>
            <span className='CartProduct-Amount'><b>{props.amount}  </b></span>
            {/* <button onClick={props.addProduct}> + </button> */}
            <i class="plus icon" onClick={props.addProduct} style={{ color: '#077BFF', cursor: 'pointer' }}></i>
          </center>
        </td>
        <td><center>${props.value}</center></td>
        <td>
          <Popup content='Remove all items from this section' trigger={
            <i className="fa fa-times" onClick={props.removeCartTotal} style={{ color: 'red', cursor: 'pointer' }} />
          }
            position='bottom left'
            size='mini'
            inverted
            mouseEnterDelay={1000}
          />
        </td>
      </tr >
    </Fragment >
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