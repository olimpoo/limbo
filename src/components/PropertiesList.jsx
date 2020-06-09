import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropertySlider from './PropertySlider';
import '../assets/styles/PropertiesList.scss';

const orderOptions = [
  'Relevantes',
  'Recién Publicados',
  'Baratos',
  'Caros',
  'Bajaron de precio',
  'Nuevos',
  'Antiguos',
  'Amplios',
  'Pequeños',
];

const images = [
  'https://source.unsplash.com/1000x500/?house',
  'https://source.unsplash.com/800x400/?house',
  'https://source.unsplash.com/700x350/?house',
];

const PropertiesList = ({}) => {
  const [orderBy, setOrderBy] = useState('Relevantes');

  const handleSelect = (eventKey, event) => {
    setOrderBy(orderOptions[eventKey]);
  };

  return (
    <>
      <ButtonGroup className='d-none d-xl-block'>
        <Button>1</Button>
        <Button>2</Button>
        <DropdownButton as={ButtonGroup} title='Dropdown'>
          <Dropdown.Item eventKey='1'>Dropdown link</Dropdown.Item>
          <Dropdown.Item eventKey='2'>Dropdown link</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>

      <div className='d-xl-none my-3'>
        <p>
          <b>{parseInt(Math.random() * 10000)}</b>
          &nbsp;Casas relevantes en Venezuela
        </p>
        <DropdownButton
          as={ButtonGroup}
          title={
            <span>
              <i className='fas fa-sort-amount-down mr-2'></i> {orderBy}
            </span>
          }
          onSelect={handleSelect}
          className='mt-2 btn-primary-inverse'
          variant='primary-inverse btn-primary'
        >
          {orderOptions.map((option, index) => (
            <Dropdown.Item key={`orderBy-${index}`} eventKey={index}>
              {option}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
      <div>
        <Card className='PropertiesList__card'>
          <Row>
            <Col xs={12} md={5}>
              <Card>
                <PropertySlider images={images}></PropertySlider>
                <div className='p-3'>
                  <h5>
                    <b>US$ {parseInt(Math.random() * 10000)}</b>
                  </h5>
                </div>
              </Card>
            </Col>
            <Col xs={12} md={7}>
              <div className='p-3'>
                <h5>
                  <a href='#'>
                    Apartamento Consolitex Vende La Trigaleña Mirian
                  </a>
                </h5>
                <p className='mb-2'>URB LA TRIGALEÑA, La Trigaleña, Valencia</p>
                <p>
                  <b></b>
                </p>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
};

export default PropertiesList;
