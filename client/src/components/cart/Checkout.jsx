import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearCart } from '../../actions/shoppingCartActions';
import { addOrder } from '../../actions/orderActions';
import MakeAPurchase from '../MakeAPurchase';
import { Popup, Segment, Form, Modal, Button, Icon, Header } from 'semantic-ui-react'
import './Checkout.css';

class Checkout extends Component {

  state = {
    name: "",
    email: "",
    phoneNumber: 0,
    errorsList: [],
    renderErrorList: false,
    modalIsOpen: false
  };

  static propTypes = {
    clearCart: PropTypes.func.isRequired
  };

  onChange = e => {
    // console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  };

  onOpenModal = () => {
    console.log("OPEN MODAL CALLED");
    this.setState({ modalIsOpen: true });
  };

  onCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };

  validate = (name, email, phoneNumber) => {
    // we are going to store errors for all fields
    // in a signle array
    const errors = [];

    var phoneno = /^\d{10}$/;

    if (name.length === 0) {
      errors.push("Name can't be empty");
    }

    if (email.length < 5) {
      errors.push("Email should be at least 5 charcters long");
    }
    if (email.split("").filter(x => x === "@").length !== 1) {
      errors.push("Email should contain a @");
    }
    if (email.indexOf(".") === -1) {
      errors.push("Email should contain at least one dot");
    }

    // if (!phoneNumber.match(phoneno)) {
    //   errors.push("Phone Number should be at least 10 numbers long and of type number");
    // }

    return errors;
  }


  handleSubmit = e => {
    const errors = this.validate(this.state.name, this.state.email, this.state.phoneNumber);
    if (errors.length > 0) {
      errors.map(err => {
        this.state.errorsList.push(err);
      });
      this.setState({ renderErrorList: true });
    } else {
      this.onSubmit(e);
    }

  };

  clearErrorListState = () => {
    if (this.state.errorsList.length > 0) {
      this.setState({ errorsList: [] });
    }
  }

  renderErrorBullets = () => {
    const erroBulletArray = this.state.errorsList.map(error => (
      <li>{error}</li>
    ));

    return (
      erroBulletArray
    )
  }

  renderErrors = renderList => {
    if (renderList) {
      return (
        <div class="ui error message" >
          <i class="close icon"></i>
          <div class="header">
            There were some errors with your submission
          </div>
          <ul class="list">
            {this.renderErrorBullets()}
          </ul>
        </div>
      );
    }
  }


  onSubmit = e => {
    e.preventDefault();

    // console.log('ON SUBMIT GOT CALLED');

    // const entries = this.props.location.cartProps.cart;

    // console.log("------> ENRTRIES: " + JSON.stringify(entries));

    // const itemsInCart = [];
    // entries.map(item => {
    //   let obj = {};
    //   obj.name = item.name;
    //   obj.value = item.value;
    //   obj.size = item.size;
    //   obj.amount = item.amount;
    //   itemsInCart.push(obj);
    // });
    // const newOrder = {
    //   name: this.state.name,
    //   email: this.state.email,
    //   phoneNumber: this.state.phoneNumber,
    //   cart: itemsInCart
    // };

    // this.props.addOrder(newOrder);

    this.onOpenModal();
  };

  render() {
    if (this.props.cart.length === 0)
      return <MakeAPurchase message="Cart is empty at the checkout!" />
    return (
      <div class='container-segment-1'>
        <div>
          <center>
            {this.renderErrors(this.state.renderErrorList)}
          </center>
          <center>
            <h1>Checkout</h1>
          </center>
          <Segment placeholder>
            <br />
            <Form class='container-segment2'>
              <Form.Field required>
                <label>Name</label>
                <Form.Input type="text" id="register" name="name" placeholder="First Last" onChange={this.onChange} required />
              </Form.Field>
              <Form.Field required>
                <label>Email</label>
                <Form.Input type="email" id="register" name="email" placeholder="Email" onChange={this.onChange} required />
              </Form.Field>
              <Form.Field required>
                <label>Phone Number</label>
                <Form.Input type="text" id="register" name="phoneNumber" placeholder="1234567890" onChange={this.onChange} required />
              </Form.Field>
              <Popup content='Please fill out all the fields, so we can get in contact with you!' trigger={
                <input class="ui primary button" type="submit" value="Place Order!" onClick={this.handleSubmit}></input>
              }
                id='popup'
                position='bottom center'
                size='mini'
                inverted
                mouseEnterDelay={1000}
                disabled={true}
              />
            </Form>
            <br />
          </Segment>
        </div>
        <div>
          {/* <center> */}
          {/* <Modal open={this.state.modalIsOpen} onClose={this.onCloseModal, this.props.clearCart} basic centered={true} size="small"> */}
          <Modal open={this.state.modalIsOpen} onClose={this.onCloseModal} basic centered={true} size="small" style={{ marginLeft: '30%', marginTop: '15%' }}>
            {/* <Link to="/">
              <i className="fa fa-times" onClick={this.onCloseModal, this.props.clearCart} style={{ color: 'red', cursor: 'pointer' }}></i>
            </Link> */}
            <Header icon='shopping bag' content='Thanks for Shopping!' />
            <Modal.Content>
              <p>Thank You, {this.state.name}! Your order has been completed. We will be in contact with you shortly to finalize your order!</p>
            </Modal.Content>
            <Modal.Actions>
              {/* <Button color='green' onClick={this.onCloseModal, this.props.clearCart} inverted> */}
              <Button color='green' onClick={this.onCloseModal} inverted>
                <Link to="/">
                  <Icon name='hand peace' /> See ya!
                </Link>
              </Button>
            </Modal.Actions>
          </Modal>
          {/* </center> */}
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