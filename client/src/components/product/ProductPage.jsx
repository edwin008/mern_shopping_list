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
      <div>
        <main><Products products={this.props.products} /></main>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart
});

export default connect(mapStateToProps, { grabItems })(ProductPage);