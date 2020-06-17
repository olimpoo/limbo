import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import PropertySlider from './PropertySlider';

const images = [
  'https://source.unsplash.com/1000x500/?house',
  'https://source.unsplash.com/800x400/?house',
  'https://source.unsplash.com/700x350/?house',
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
                <b>US$ {parseInt(Math.random() * 10000)}</b>
              </h3>
            </div>
          </Card>
        </Col>
        <Col xs={12} md={7}>
          <div className='p-2 d-flex flex-column justify-content-between h-100'>
            <h5>
              <a href='#'>Apartamento Consolitex Vende La Trigaleña Mirian</a>
            </h5>
            <p className='mb-2'>URB LA TRIGALEÑA, La Trigaleña, Valencia</p>
            <p>
              <b>
                106 m² totales&nbsp;&nbsp; 106 m² construidos&nbsp;&nbsp; 3
                Habitaciones&nbsp;&nbsp; 4 Baños &nbsp;&nbsp; 2 Estacionamientos
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur eveniet, optio perferendis tempora ut facere
              voluptatibus, asperiores veritatis rerum praesentium numquam
              consequatur est ipsum culpa distinctio quibusdam animi fuga
              aspernatur!
            </p>
            <div class='d-flex justify-content-between align-items-center mt-3'>
              <p className='text-muted'>
                <i className='fas fa-sync'></i> Publicado hace&nbsp;
                {parseInt(Math.random() * 100)} dias
              </p>
              <Button
                variant='primary'
                className='PropertiesListProperty__contact'
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
