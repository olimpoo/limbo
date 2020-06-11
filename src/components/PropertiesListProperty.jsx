import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import PropertySlider from './PropertySlider';

const images = [
  'https://source.unsplash.com/1000x500/?house',
  'https://source.unsplash.com/800x400/?house',
  'https://source.unsplash.com/700x350/?house',
];

const PropertiesListProperty = () => (
  <Card className='PropertiesList__card my-3'>
    <Row>
      <Col xs={12} md={4}>
        <Card>
          <PropertySlider images={images}></PropertySlider>
          <div className='p-3'>
            <h5>
              <b>US$ {parseInt(Math.random() * 10000)}</b>
            </h5>
          </div>
        </Card>
      </Col>
      <Col xs={12} md={8}>
        <div className='p-3'>
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
          <p className='text-muted'>
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
            <Button variant='primary'>Contactar</Button>
          </div>
        </div>
      </Col>
    </Row>
  </Card>
);

export default PropertiesListProperty;
