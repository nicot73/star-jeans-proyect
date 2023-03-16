import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/img-carrusel-1.jpg';
import img2 from '../../assets/img-carrusel-2.jpg';
import img3 from '../../assets/img-carrusel-3.jpg';
import styled from 'styled-components';

const ItemCarousel = () => {
  return (
    <DivCarousel>
      <Carousel fade nextIcon='' prevIcon=''>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
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
  z-index: -1;
` 