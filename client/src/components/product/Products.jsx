import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import { connect } from 'react-redux';
import AwesomeSlider from 'react-awesome-slider';
import { Modal, Button, Icon } from 'semantic-ui-react';
import { addCart } from '../../actions/shoppingCartActions';
import './Products.css';

class Products extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productArray: this.props.products,
      isOpen: false,
      imageArray: [],
      sizeSelected: false,
      showAddCartPopup: [false, false]
    }
  }

  renderProductArray = (item, j) => {
    return (
      <Product
        updateSize={this.updateSize}
        openImageModal={this.openImageModal}
        closeImageModal={this.closeImageModal}
        isOpen={this.state.isOpen}
        key={item._id}
        item={item}
        j={j}
        addCart={() => this.props.addCart(item, j)}
        handleAddCartSubmit={this.handleAddCartSubmit}
        showAddCartPopup={this.state.showAddCartPopup[j]}
      // addSize={() => props.addSize(item, Size)}}
      />
    )
  }

  openImageModal = (item) => {
    console.log('entered the open modal fuction');
    const imageArray1 = this.produceImageArray(item);
    this.setState({ imageArray: imageArray1 });
    // console.log('----->PRINTING THE PRODUCT IMAGE ARRAY: ' + this.state.item);
    console.log(imageArray1);
    this.setState({ isOpen: true });
    return this.state.isOpen;
  }

  closeImageModal = () => {
    console.log('entered the open modal fuction');
    this.setState({ isOpen: false });
    return this.state.isOpen;
  }

  handleAddCartSubmit = (item, j) => {
    if (this.state.sizeSelected) {
      this.props.addCart(item, j);
      const newArray = this.state.showAddCartPopup.slice();
      newArray[j] = false;
      console.log("PRINTING THE NEW ARRAY - SIZE IS SELECTED: " + JSON.stringify(newArray));
      this.setState({
        sizeSelected: false,
        showAddCartPopup: newArray
      });
    } else {
      const newArray_test = this.state.showAddCartPopup.slice();
      newArray_test[j] = true;
      console.log("PRINTING THE INDEX J: " + j)
      console.log("PRINTING THE NEW ARRAY - SIZE IS NOT SELECTED: " + JSON.stringify(newArray_test));
      this.setState({
        showAddCartPopup: newArray_test
      });
    }
  }

  updateSize = (id, size, j) => {
    let newProductArr = this.state.productArray.slice();
    newProductArr.map((product) => {
      if (product._id == id) {
        // if (size === "S") {
        //   product.size[0]++;
        // } else if (size === "M") {
        //   product.size[1]++;
        // } else if (size === "L") {
        //   product.size[2]++;
        // } else {
        //   //size of XL
        //   product.size[3]++;
        // }
        product.size = size
      }
    });
    const newArray = this.state.showAddCartPopup.slice();
    newArray[j] = false;
    this.setState({
      productArray: newProductArr,
      sizeSelected: true,
      showAddCartPopup: newArray
    });
    // console.log("Product list: " + JSON.stringify(this.state.productArray))
  }

  produceImageArray = item => {
    let imageArray = item.image.map(image => (
      <div data-src={image} />
    ))

    return imageArray
  }

  render() {
    return (
      <Fragment>
        <div className='container'>
          <Modal open={this.state.isOpen} basic centered={true} size="small" style={{ marginLeft: '30%' }}>
            <Modal.Actions>
              <center>
                <Button color='red' size='large' onClick={() => { this.setState({ isOpen: false }) }} inverted>
                  <Icon name='zoom out' /> Go back
            </Button>
              </center>
            </Modal.Actions>
            <Modal.Content>
              <AwesomeSlider className='aws-btn' style={{ height: '55em' }} bullets={false}>{this.state.imageArray}</AwesomeSlider>
            </Modal.Content>
          </Modal>
          <div className='wrapper'>
            {this.state.productArray.map((item, j) => this.renderProductArray(item, j))}
          </div>
        </div>
      </Fragment>
    )
  }

};


Products.propTypes = {
  products: PropTypes.array.isRequired,
  addCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ cart: state.cart });

export default connect(mapStateToProps, { addCart })(Products);