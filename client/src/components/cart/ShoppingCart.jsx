import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addCart, removeCart, removeCartTotal } from '../../actions/shoppingCartActions';
import CartProduct from './CartProduct';
import MakeAPurchase from '../MakeAPurchase';
import './ShoppingCart.css';
import { Segment } from 'semantic-ui-react';

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
      return product.sort((x, y) => x.timeAdded - y.timeAdded);
    };

    const cartProducts =
      arrange(this.props.cart).map((item, j) => (
        <CartProduct
          key={j}
          {...item}
          addProduct={() => this.props.addCart(item)}
          removeProduct={() => this.props.removeCart(item)}
          removeCartTotal={() => this.props.removeCartTotal(item)}
        />
      ));

    const totalCartPrice = cart => {
      return cart.reduce(
        (sum, items) => sum + items.amount * items.value, 0
      );
    };

    if (cartProducts.length === 0)
      return <MakeAPurchase />

    return (
      <div class="container-segment">
        <center>
          <h1 class="bag-title">My Cart:</h1>
        </center>
        <Segment placeholder>
          <div class="container-segment2">
            <center>
              <table className="cart-table">
                <thead>
                  <tr>
                    <th id="table-item">Photo</th>
                    <th id="table-item">Name</th>
                    <th id="table-item">Size</th>
                    <th id="table-item">Quantity</th>
                    <th id="table-item">Price / Unit</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts}
                  <tr>
                    <td />
                    <td />
                    <td />
                    <p classname="cart-totalPrice">Total: ${totalCartPrice(this.props.cart)}</p>
                    <Link to={{
                      pathname: "/checkout",
                      cartProps: {
                        cart: this.props.cart
                      }
                    }} >
                      <button class="ui primary button">Checkout</button>
                    </Link>
                  </tr>
                </tbody>
              </table>
            </center>
          </div>
        </Segment>
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