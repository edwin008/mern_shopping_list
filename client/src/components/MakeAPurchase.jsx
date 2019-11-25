import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';

const MakeAPurchase = ({ message = "YOUR BAG IS EMPTY" }) => (
    <div className="wrap-emptyBag">
        <br />
        <br />
        <center>
            <Segment inverted compact padded>
                <Header icon><Icon name='shopping basket' />{message}</Header>
                <p>Once you add something to your bag, it will appear here. Ready to get started?</p>
                <center>
                    <Segment.Inline>
                        <Link to="/" className="continueShopping">
                            <Button inverted color='blue'>
                                <span>GET STARTED <Icon name='arrow right' /></span>
                            </Button>
                        </Link>
                    </Segment.Inline>
                </center>
            </Segment>
        </center>
    </div >
);

MakeAPurchase.propTypes = {
    message: PropTypes.string
};

export default MakeAPurchase;