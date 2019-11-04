import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCart, removeCart, removeCartTotal } from '../../actions/shoppingCartActions';
import CartProduct from './CartProduct';
import MakeAPurchase from '../MakeAPurchase';

class ShoppingCart extends Component {
  static propTypes = {
    addCart: PropTypes.func.isRequired,
    removeCart: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
  };

  onRemoveClick = id => {
    this.props.removeCart(id);
  };

  render() {
    const arrange = product => {
      return product.sort((x, y) => x._id < y._id);
    };

    const cartProducts =
      arrange(this.props.cart).map((item, j) => (
        <CartProduct
          key={j}
          {...item}
          addCart={() => this.props.addCart(item)}
          removeCart={() => this.props.removeCart(item)}
          removeCartTotal={() => this.props.removeCartTotal(item)}
        />
      ));

    const totalCartPrice = cart => {
      return cart.reduce(
        (sum, items) => sum + items.amount * items.price, 0
      );
    };

    if (cartProducts.length === 0)
      return <MakeAPurchase />

    return (
      <div>
        <div>
          <h1 className="bag-title">My Bag:</h1>
        </div>
        <div className="cart-items">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price / Unit</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartProducts}
              <tr>
                <td>Total</td>
                <td />
                <td />
                <p classname="cart-totalPrice">${totalCartPrice(this.props.cart)}</p>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };


};

const mapStateToProps = state => ({
  cart: state.cart,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { addCart, removeCart, removeCartTotal }
)(ShoppingCart);