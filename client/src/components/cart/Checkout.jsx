import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearCart } from '../../actions/shoppingCartActions';
import { addOrder } from '../../actions/orderActions';
import MakeAPurchase from '../MakeAPurchase';

class Checkout extends Component {

  state = {
    name: "",
    email: "",
    phoneNumber: "",
    modalIsOpen: false
  };

  static propTypes = {
    clearCart: PropTypes.func.isRequired
  };

  onChange = e => {
    // console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  };

  onOpenModal = e => {
    e.preventDefault();
    this.setState({ modalIsOpen: true });
    console.log(this.state);
  };

  onCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };

  onSubmit = () => {
    // console.log("The state is: " + this.state.name);
    console.log('ON SUBMIT GOT CALLED');
    // const entries = this.state.cart;
    const itemsInCart = [];
    // entries.map(item => {
    //   itemsInCart.push(item);
    // });

    // const newOrder = {
    //   name: this.state.name,
    //   email: this.state.email,
    //   phoneNumber: this.state.email,
    //   cart: itemsInCart
    // };

    // console.log('PRINTING THE NEW_ORDER');
    // console.log(newOrder);

    // this.props.addOrder(newOrder);
  };

  render() {
    if (this.props.cart.length === 0)
      return <MakeAPurchase message="Cart is empty at the checkout!" />
    return (
      <div>
        <div>
          <h1>Checkout</h1>
          {/* <form onSubmit={this.onSubmit}> */}
          <form>
            <input type="text" name="name" placeholder="Name" onChange={this.onChange} />
            <input type="email" name="email" placeholder="Email" onChange={this.onChange} />
            <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={this.onChange} />
            <Button color="primary" onClick={this.onOpenModal, this.onSubmit}>Place Order</Button>
          </form>
        </div>
        <div>
          <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.onCloseModal} ariaHideApp={false}>
            <Link to="/">
              <i className="fa fa-times" onClick={this.onCloseModal, this.props.clearCart} style={{ color: 'red', cursor: 'pointer' }}></i>
            </Link>
            <p>Thank You {this.state.name}! Your order has been completed. We will be in contact with you shortly to finalize your order!</p>
          </Modal>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  { clearCart, addOrder }
)(Checkout);