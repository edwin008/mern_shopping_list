import React, { Component, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import { Popup } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';
import './AppNavbar.css';


class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  aggregatedPrice = ShoppingCart => {
    return ShoppingCart.reduce((accumulator, CartProduct) => accumulator + CartProduct.value * CartProduct.amount, 0);
  };

  aggregatedProdsInCart = ShoppingCart => {
    return ShoppingCart.reduce((accumulator, CartProduct) => accumulator + CartProduct.amount, 0);
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <NavItem>
          <span className='navbar-text mr-3'>
            <strong>{user ? `Welcome ${user.name}` : ''}</strong>
          </span>
        </NavItem>
        <NavItem>
          <Logout />
        </NavItem>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <NavItem>
          <RegisterModal />
        </NavItem>
        <NavItem>
          <LoginModal />
        </NavItem>
      </Fragment>
    );

    return (
      <Navbar style={{ background: '#000', height: 85 }} dark expand='sm' variant='dark' class='navbar-wrap'>
        <Container>
          <NavbarBrand href='/'>
            <img
              src="/21JerseyFits.ico"
              width="75"
              height="75"
              className="d-inline-block align-top"
              alt="21JerseyFits logo"
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {/* <Nav className='ml-auto' navbar>
                {isAuthenticated ? authLinks : guestLinks}
              </Nav> */}
            <Popup content='Click here to check your Shopping Cart!'
              trigger={
                <NavItem id="cart-link">
                  <NavLink class="cart-link-wrap" href='/cart'>
                    <div>
                      <span class="cart-count-wrap" style={{ color: '#FFF' }}>{this.aggregatedProdsInCart(this.props.cart)}</span>
                      <i className="fas fa-shopping-cart" style={{ color: '#FFF' }} />
                      <p style={{ color: '#FFF' }}>Shopping Cart: ${this.aggregatedPrice(this.props.cart)}</p>
                    </div>
                  </NavLink>
                </NavItem>
              }
              id='popup'
              position='bottom left'
              size='mini'
              inverted
              mouseEnterDelay={1000}
            />
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  cart: state.cart
});

export default connect(
  mapStateToProps,
  null
)(AppNavbar);
