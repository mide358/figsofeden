import { Carousel } from 'react-bootstrap';
import slide_01 from '../assets/slide_01.jpg';
import slide_02 from '../assets/slide_02.jpg';
import slide_03 from '../assets/slide_03.jpg';

import React from 'react';

const HomeCarousel = () => {
  return (
    <>
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100 caro-item"
            src={slide_01}
            alt="First slide"
          />
          <Carousel.Caption className="caption">
            <h5>BEST OFFER</h5>
            <h2>NEW ARRIVALS ON SALE</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 caro-item"
            src={slide_02}
            alt="Second slide"
          />

          <Carousel.Caption className="caption">
            <h5>FLASH DEALS</h5>
            <h2>GET YOUR BEST PRODUCTS</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 caro-item"
            src={slide_03}
            alt="Third slide"
          />

          <Carousel.Caption className="caption">
            <h5>LAST MINUTE</h5>
            <h2>GRAB LAST MINUTE DEALS</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HomeCarousel;
