import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Product.css';
import PropTypes from 'prop-types';
import { Card, Image, Button, Segment, Modal, Icon } from 'semantic-ui-react';
import { addSize } from '../../actions/productActions';


const Product = (props) => {
  const item = props.item;

  const productImageArray = item.image.map(image => (
    <div data-src={image} />
  ));

  console.log(productImageArray);

  return (
    <Fragment>
      <div className="product-wrap">
        <div className="product">
          <Card className='card-wrap'>
            <Image>
              <AwesomeSlider className='aws-btn' style={{ height: '29em' }} bullets={false}>{productImageArray}</AwesomeSlider>
            </Image>
            <Card.Header textAlign='center'>
              <div>
                <p>{item.name}</p>
              </div>
            </Card.Header>
            <Card.Meta className="card-meta">
              <small>${item.value}</small>
            </Card.Meta>
            <Card.Description className="card-description-wrap">
              <div class="ui buttons">
                <button className="ui-buttons" class="ui button" onClick={() => props.updateSize(item._id, "S")}>S</button>
                <button className="ui-buttons" class="ui button" onClick={() => props.updateSize(item._id, "M")}>M</button>
                <button className="ui-buttons" class="ui button" onClick={() => props.updateSize(item._id, "L")}>L</button>
                <button className="ui-buttons" class="ui button" onClick={() => props.updateSize(item._id, "XL")}>XL</button>
              </div>
            </Card.Description>
            <Card.Content>
              <div>
                <button class="ui primary button" onClick={props.addCart} size="small">Add to Cart</button>
                <Button animated='vertical' onClick={() => props.openImageModal(item)}>
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
};

Product.propTypes = {
  item: PropTypes.object.isRequired,
  // name: PropTypes.string.isRequired,
  // image: PropTypes.array.isRequired,
  // value: PropTypes.number.isRequired,
  // size: PropTypes.string,
  addSize: PropTypes.func,
  addCart: PropTypes.func.isRequired,
  updateSize: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: state.product
});

export default connect(mapStateToProps, { addSize })(Product);

// export default Product;