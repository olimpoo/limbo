import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Filters from '../components/PropertyFilters';
import Slider from '../components/PropertySlider';
import Description from '../components/PropertyDescription';
import ContactForm from '../components/PropertyContactForm';
import Related from '../components/Related';

import '../assets/styles/Property.scss';

const images = [
  'https://source.unsplash.com/1000x500/?house',
  'https://source.unsplash.com/800x400/?house',
  'https://source.unsplash.com/700x350/?house',
];

const related = [
  'https://source.unsplash.com/300x200/?house',
  'https://source.unsplash.com/375x250/?house',
  'https://source.unsplash.com/400x266/?house',
  'https://source.unsplash.com/350x234/?house',
];

const property = {
  images,
  type: 'Casa',
  area: 400,
  rooms: 4,
  parkingLots: 5,
  bathrooms: 2,
  sector: 'Cumbres de Curumo',
  parish: 'Cumbres de Curumo',
  municipality: 'Municipio Baruta',
  price: 100,
  title: 'Vendemos Exclusiva Casa en Cumbres de Curumo con Piscina',
  description:
    'SE VENDE EXCLUSIVA CASA EN CUMBRES DE CURUMO CON PISCINA, ES UNA CASA MUY BONITA, MUY BIEN CONSTRUIDA, CON EXCELENTES ACABADOS Y CON MUY BUEN GUSTO. LA CASA ESTA DISTRIBUIDA EN NIVELES, EL PRIMER NIVEL TIENE UN PEQUEÑO ESTAR, MEDIO BAÑO DE VISITAS, BIBLIOTECA, COMEDOR, COCINA EMPOTRADA Y BAÑO DE SERVICIO, MEDIO NIVEL HACIA ARRIBA, SE ENCUENTRAN DOS AMPLIOS SALONES QUE DAN AL AREA SOCIAL DONDE SE ENCUENTRA EL JARDIN Y LA PISCINA. DESPUES MEDIO NIVEL MAS ARRIBA SE ENCUENTRA TRES HABITACIONES, CADA UNA CON SU BAÑO, DOS DE ESTAS HABITACIONES TIENEN UN ATICO, Y LA HABITACION Y EL BAÑO PRINCIPAL SON SUPER GRANDES, Y POR ULTIMO MEDIO NIVEL MAS ARRIBA ESTA OTRA HABITACION O FAMILY. LA CASA ES DE REVISTA, SUPER COMODA, CONFORTABLE Y MANEJABLE. INTERESADOS COMUNICARSE A LOS SIGUIENTES NUMEROS',
  years: 50,
  related,
};

const Property = (props) => (
  <div className='Property'>
    <div className=' d-xl-flex flex-row-reverse'>
      <div className='Property__contact-form d-lg d-none d-xl-block mb-3'>
        <Card className='my-2'>
          <Card.Body className='d-flex justify-content-between p-2'>
            <h3>
              <b>Venta</b>
            </h3>
            <h3>
              <b>{property.price}$</b>
            </h3>
          </Card.Body>
        </Card>
        <ContactForm />
      </div>
      <div className='Property__wrapper'>
        <Container fluid>
          <Row>
            <Col xs={12} className='mb-2 Property__hero'>
              <Filters property={property}></Filters>
              <Slider images={property.images}></Slider>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col xs={12} lg={8} xl={12} className='mb-3'>
              <div className='Property__buttons d-none d-xl-block mt-2 mb-3'>
                <Row>
                  <Col>
                    <Button
                      block
                      variant='primary'
                      className='btn-primary-inverse'
                    >
                      Quiero que me llamen
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      block
                      variant='primary'
                      className='btn-primary-inverse'
                    >
                      Enviar consulta
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      block
                      variant='primary'
                      className='btn-primary-inverse'
                    >
                      Agendar visita
                    </Button>
                  </Col>
                </Row>
              </div>
              <div className='Property__header'>
                <h3 className='mb-2'>
                  <b>
                    {property.type} · {property.area}m<sup>2</sup> ·{' '}
                    {property.rooms} Habitaciones · {property.parkingLots} ·
                    Estacionamientos
                  </b>
                </h3>
                <p className='mb-2'>
                  <b>{property.sector}</b>, {property.parish},{' '}
                  {property.municipality}
                </p>
              </div>
              <hr className='d-xl-block d-none' />
              <Card className='my-3 d-xl-none'>
                <Card.Body className='d-flex justify-content-between p-2'>
                  <h3>
                    <b>Venta</b>
                  </h3>
                  <h3>
                    <b>{property.price}$</b>
                  </h3>
                </Card.Body>
              </Card>
              <Description property={property} />
            </Col>
            <Col xs={12} lg={4} className='mb-3 d-lg d-xl-none'>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    <div className='divider bg-light p-3'>&nbsp;</div>
    <Related property={property}></Related>
  </div>
);

export default Property;
