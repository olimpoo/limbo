import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Related = ({ properties, images }) => (
  <Container className='my-4'>
    <p style={{ 'margin-left': '-5px' }}>
      <b>Más inmuebles como este</b>
    </p>
    <Row>
      {images.map((image, index) => (
        <Col xs={12} md={6} lg={3} className='px-2 my-2 my-lg-0'>
          <Link
            to={`/propiedades/${index}`}
            className='text-reset text-decoration-none'
          >
            <Card>
              <Card.Img variant='top' src={image} />
              <Card.Body>
                <p style={{ fontSize: '12px' }}>Precio Venta</p>
                <h4 className='m-0'>
                  <b>US$ {properties[index].price}</b>
                </h4>
                <p style={{ fontSize: '14px' }}>
                  Casa · {properties[index].area}m<sup>2</sup> ·{' '}
                  {properties[index].rooms} Hab. ·{properties[index].bathrooms}{' '}
                  · Baños
                </p>
                <p style={{ fontSize: '10px' }} className='text-muted'>
                  {properties[index].sector}, {properties[index].parish}
                </p>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
    <div className='text-center my-4'>
      <Link to='/propiedades'>
        Ver más Casas en Cumbres De Curumo, Municipio Baruta
      </Link>
    </div>
  </Container>
);

export default Related;
