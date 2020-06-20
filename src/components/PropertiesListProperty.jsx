import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import PropertySlider from './PropertySlider';

const data = require('../server/properties.json');

const property = data[Math.floor(Math.random())];

const images = [
  'https://source.unsplash.com/1000x500/?house',
  'https://source.unsplash.com/800x400/?house',
  'https://source.unsplash.com/900x450/?house',
];

const PropertiesListProperty = () => (
  <Card className='PropertiesListProperty my-3'>
    <Container>
      <Row>
        <Col xs={12} md={5} className='px-0'>
          <Card>
            <PropertySlider images={images}></PropertySlider>
            <div className='p-3'>
              <h3 className='font-weight-normal'>
                <b>US$ {data[Math.floor(Math.random() * 100)].price}</b>
              </h3>
            </div>
          </Card>
        </Col>
        <Col xs={12} md={7}>
          <div className='p-2 d-flex flex-column justify-content-between h-100'>
            <h5>
              <a href='#'>{data[Math.floor(Math.random() * 100)].title}</a>
            </h5>
            <p className='mb-2'>
              {data[Math.floor(Math.random() * 100)].sector},
              {data[Math.floor(Math.random() * 100)].parish},
              {data[Math.floor(Math.random() * 100)].municipality}
            </p>
            <p>
              <b>
                {data[Math.floor(Math.random() * 100)].area} m²
                totales&nbsp;&nbsp;
                {data[Math.floor(Math.random() * 100)].area} m² construidos
                &nbsp;&nbsp;{data[Math.floor(Math.random() * 100)].rooms}{' '}
                Habitaciones&nbsp;&nbsp;
                {data[Math.floor(Math.random() * 100)].bathrooms} Baños
                &nbsp;&nbsp; 2 Estacionamientos
              </b>
            </p>
            <p
              className='text-muted'
              style={{
                'max-height': '3rem',
                overflow: 'hidden',
                'font-size': '12px',
              }}
            >
              {data[Math.floor(Math.random() * 100)].description}
            </p>
            <div class='d-flex justify-content-between align-items-center mt-3'>
              <p className='text-muted'>
                <i className='fas fa-sync'></i> Publicado hace&nbsp;
                {parseInt(Math.random() * 100)} dias
              </p>
              <Button
                className='PropertiesListProperty__contact'
                variant='primary'
              >
                Contactar
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </Card>
);

export default PropertiesListProperty;
