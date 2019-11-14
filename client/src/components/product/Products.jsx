import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import { connect } from 'react-redux';
import { addCart } from '../../actions/shoppingCartActions';

const Products = props => {

  const productArray = props.products.map((item, j) => (
    <Product
      key={item._id}
      {...item}
      addCart={() => props.addCart(item, j)}
    />
  ));

  return <div className='container'>
    <div className='wrapper'>
      {productArray}
    </div>
  </div>;
};

Products.propTypes = {
  products: PropTypes.array.isRequired,
  addCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ cart: state.cart });

export default connect(mapStateToProps, { addCart })(Products);