import React from 'react';
import PropTypes from 'prop-types';

const MakeAPurchase = ({ message = "YOUR BAG IS EMPTY" }) => (
    <div className="wrap-emptyBag">
        <h3 className="emptyBag">{message}</h3>
        <p>In case you left some items in your bag last time, try signing in to your account.</p>
        <a href="/" className="continueShopping">
            <span>Continue Shopping</span>
        </a>
    </div>
);

MakeAPurchase.PropTypes = {
    message: PropTypes.string
};

export default MakeAPurchase;