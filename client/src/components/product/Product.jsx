import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Product.css';
import { Card, Image, Button, Segment, Modal, Icon, Popup } from 'semantic-ui-react';
import { addSize } from '../../actions/productActions';


// const Product = (props) => {
class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showAddCartPopup: false,
      imageArray: []
    }
  }

  // item = this.props.item;

  // componentDidMount() {
  //   this.handleImageArray();
  // }

  handleAddCartSubmit = (item, j) => {
    if (() => this.props.getSizeSelectedState()) {
      // this.props.addCart(item, j);
      console.log("submit handled. addCart action sent");
      this.setState({
        // sizeSelected: false,
        showAddCartPopup: false
      });
      this.props.setSizeSelectedState(false);

    } else {
      console.log("show addCartPopup set to true");
      this.setState({
        showAddCartPopup: true
      });
    }
  }

  handleUpdateSize = (size) => {
    let savedState = () => this.props.updateSize(this.props.item._id, size);
    this.setState({ showAddCartPopup: savedState });
  }

  handleImageArray = () => {
    let storeImageArray = this.produceImageArray();
    this.setState({ imageArray: storeImageArray });
  }

  produceImageArray = () => {
    console.log('i made it here');
    console.log("IMAGES PRINTING" + JSON.stringify(this.props.item.image));
    let imageArray = this.props.item.image.map(image => (
      <div data-src={image} />
    ))
    console.log("IMAGE BEING PRODUCED FROM IMAGEARRAY FUNCTION")
    return imageArray
  }

  // console.log(productImageArray);
  render() {
    return (
      <Fragment>
        <div className="product-wrap">
          <div className="product">
            <Card className='card-wrap'>
              <Image>
                <AwesomeSlider className='aws-btn' style={{ height: '29em' }} bullets={false}>{this.state.imageArray}</AwesomeSlider>
              </Image>
              <Card.Header textAlign='center'>
                <div>
                  <p>{this.props.item.name}</p>
                </div>
              </Card.Header>
              <Card.Meta className="card-meta">
                <small>${this.props.item.value}</small>
              </Card.Meta>
              <Card.Description className="card-description-wrap">
                <div class="ui buttons">
                  {/* <button className="ui-buttons" class="ui button" onClick={() => props.updateSize(item._id, "S")}>S</button>
                  <button className="ui-buttons" class="ui button" onClick={() => props.updateSize(item._id, "M")}>M</button>
                  <button className="ui-buttons" class="ui button" onClick={() => props.updateSize(item._id, "L")}>L</button>
                  <button className="ui-buttons" class="ui button" onClick={() => props.updateSize(item._id, "XL")}>XL</button> */}
                  <button className="ui-buttons" class="ui button" onClick={this.handleUpdateSize("S")}>S</button>
                  <button className="ui-buttons" class="ui button" onClick={this.handleUpdateSize("M")}>M</button>
                  <button className="ui-buttons" class="ui button" onClick={this.handleUpdateSize("L")}>L</button>
                  <button className="ui-buttons" class="ui button" onClick={this.handleUpdateSize("XL")}>XL</button>
                </div>
              </Card.Description>
              <Card.Content>
                <div>
                  {/* <button class="ui primary button" onClick={props.addCart} size="small">Add to Cart</button> */}
                  <Popup content='Please select a size before adding to the cart'
                    trigger={
                      <button class="ui primary button" onClick={this.handleAddCartSubmit(this.props.item, this.props.j)} size="small">Add to Cart</button>
                    }
                    id='popup'
                    position='bottom center'
                    size='mini'
                    inverted
                    open
                    disabled={!this.props.showAddCartPopup}
                  />
                  <Button animated='vertical' onClick={() => { this.props.openImageModal(this.props.item) }}>
                    <Button.Content hidden>Zoom</Button.Content>
                    <Button.Content visible>
                      <Icon name='magnify' />
                    </Button.Content>
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </div>
        </div>
      </Fragment>
    );
  }
};

Product.propTypes = {
  item: PropTypes.object.isRequired,
  addSize: PropTypes.func,
  addCart: PropTypes.func.isRequired,
  updateSize: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: state.product
});

export default connect(mapStateToProps, { addSize })(Product);

// export default Product;