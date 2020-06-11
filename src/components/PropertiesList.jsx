import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropertySlider from './PropertySlider';
import Property from './PropertiesListProperty';
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
      <Row>
        <Col xl={2}>
          <Card className='my-3'>
            <Card.Body>
              <h3>Filters</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12} xl={10}>
          <Property />
          <Property />
          <Property />
          <Property />
          <Property />
        </Col>
      </Row>
    </>
  );
};

export default PropertiesList;
