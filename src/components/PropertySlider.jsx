import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import '../assets/styles/PropertySlider.scss';

const Property = ({ images }) => {
  const [liked, setLiked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleClick = (e) => {
    if (liked) {
      setLiked(false);
    } else {
      setLiked(true);
    }
  };

  const handleOnMouseOver = () => {
    if (!liked) {
      setHovered(true);
    }
  };

  const handleOnMouseLeave = () => {
    if (!liked) {
      setHovered(false);
    }
  };

  return (
    <Carousel className='PropertySlider'>
      {images.map((image, index) => (
        <Carousel.Item key={`carousel-item-${index}`}>
          <button
            className='PropertySlider__heart'
            onClick={handleClick}
            onMouseOver={handleOnMouseOver}
            onMouseLeave={handleOnMouseLeave}
          >
            <i
              className={`${
                liked || hovered ? 'fas fa-heart' : 'far fa-heart'
              }`}
            ></i>
            <span className='ml-1 d-none d-lg-block'>Favorito</span>
          </button>
          <img
            className='d-block w-100'
            src={image}
            alt={`Foto ${index + 1}`}
          />
          <Carousel.Caption className='d-flex PropertySlider__caption'>
            <Button
              variant='primary'
              className='btn-primary-inverse border-0 rounded py-1'
            >
              <i className='fas fa-expand-arrows-alt'></i>
              &nbsp;Gallery
            </Button>
            <div
              className='rounded px-3 py-1 ml-2'
              style={{ background: 'rgba(0, 0, 0, 0.5)' }}
            >
              <i className='fas fa-camera mr-2'></i>
              {`${index + 1}/${images.length}`}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Property;
