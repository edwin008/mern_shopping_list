import React, { Component } from 'react';
import { connect } from 'react-redux';
import { grabItems } from '../../actions/productActions';
import Products from './Products';

class ProductPage extends Component {

  componentDidMount() {
    this.props.grabItems();
  };

  render() {
    return (
      <main><Products products={this.props.products} /></main>
    )
  }
}

export default connect(mapStateToProps, { grabItems })(ProductPage);

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart
});

