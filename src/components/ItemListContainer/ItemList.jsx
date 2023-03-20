import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Item from './Item';
import './sliderStyles.css';

const ProductSlider = ({ listProducts }) => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 4  
        },
        desktop: {
          breakpoint: { max: 1024, min: 860 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 860, min: 560 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 560, min: 0 },
          items: 1
        }
    };

  return (
    <>
      <Carousel responsive={responsive}>
        {listProducts.map((product, i) => <Item key={`${product.id}-${i}`} product={product}/>)}
      </Carousel>
    </>
  )
}

export default ProductSlider