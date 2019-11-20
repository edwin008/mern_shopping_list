import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import PropTypes from 'prop-types';

const slider = (

  <AwesomeSlider>
    <div data-src="https://i.ibb.co/tQ3h1ZF/thumbnail-IMG-8576.jpg" />
    <div data-src="https://i.ibb.co/j3LcTH2/thumbnail-IMG-8579.jpg" />
  </AwesomeSlider>
);


const Product = item => {
  console.log("This is item: " + JSON.stringify(item.image));
  const productImageArray = item.image.map(image => (
    <div data-src={image} />
  ));

  return (
    <div>
      <div>
        <AwesomeSlider>{productImageArray}</AwesomeSlider>
        {/* <img src={props.image} alt={props.alt}></img> */}
      </div>
      {/* <div>
        {slider}
      </div> */}
      <div>
        <p>{item.name}</p>
      </div>
      <div>
        <small>${item.value}</small>
        <button onClick={item.addCart}>Add to Cart</button>
      </div>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.array.isRequired,
  value: PropTypes.number.isRequired,
  addCart: PropTypes.func.isRequired
};

export default Product;