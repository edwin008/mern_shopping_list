import React, { Component } from 'react';
// import { Button } from 'reactstrap';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearCart } from '../../actions/shoppingCartActions';
import MakeAPurchase from '../MakeAPurchase';

class Checkout extends Component {

  state = {
    name: "",
    email: "",
    country: "",
    modalIsOpen: false
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

  render() {
    if (this.props.cart.length === 0)
      return <MakeAPurchase message="Cart is empty at the checkout!" />
    return (
      <div>
        <div>
          <h1>Checkout</h1>
          <form>
            <input type="text" name="name" placeholder="Name" onChange={this.onChange} />
            <input type="email" name="email" placeholder="Email" onChange={this.onChange} />
            <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={this.onChange} />
            <button onClick={this.onOpenModal}>Place Order</button>
          </form>
        </div>
        <div>
          <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.onCloseModal} ariaHideApp={false}>
            <Link to="/">
              <i className="fa fa-times" onClick={this.onCloseModal} style={{ color: 'red', cursor: 'pointer' }}></i>
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
  null
)(Checkout);