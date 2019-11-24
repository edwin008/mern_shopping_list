import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import { connect } from 'react-redux';
import { addCart } from '../../actions/shoppingCartActions';
import './Products.css';

class Products extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productArray: this.props.products
    }
  }

  renderProductArray = (item, j) => {
    return (
      <Product
        updateSize={this.updateSize}
        key={item._id}
        item={item}
        addCart={() => this.props.addCart(item, j)}
      // addSize={() => props.addSize(item, Size)}}
      />
    )
  }

  updateSize = (id, size) => {
    let newProductArr = this.state.productArray.slice();
    newProductArr.map((product) => {
      if (product._id == id) {
        product.size = size
      }
    });
    this.setState({
      productArray: newProductArr
    });
    console.log("Product list: " + JSON.stringify(this.state.productArray))
  }

  render() {
    return <div className='container'>
      <div className='wrapper'>
        {this.state.productArray.map((item, j) => this.renderProductArray(item, j))}
      </div>
    </div>
  }

};


Products.propTypes = {
  products: PropTypes.array.isRequired,
  addCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ cart: state.cart });

export default connect(mapStateToProps, { addCart })(Products);