import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imgStar1 from '../../assets/imgCarousel1.jpg';
import imgStar2 from '../../assets/imgCarousel2.jpg'
import imgStar3 from '../../assets/imgCarousel3.jpg'
import styled from 'styled-components';

const ItemCarousel = () => {
  return (
    <DivCarousel>
      <Carousel fade nextIcon='' prevIcon=''>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgStar1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgStar2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgStar3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </DivCarousel>
  )
}

export default ItemCarousel;

const DivCarousel = styled.div`
  position: relative;
  z-index: 0;
` 