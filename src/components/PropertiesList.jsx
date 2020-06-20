import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Property from './PropertiesListProperty';
import '../assets/styles/PropertiesList.scss';

const orderOptions = [
  'Relevantes',
  'Recién Publicados',
  'Caros',
  'Baratos',
  'Bajaron de precio',
  'Nuevos',
  'Antiguos',
  'Amplios',
  'Pequeños',
];

const PropertiesList = ({ openedFilters }) => {
  const [orderBy, setOrderBy] = useState('Relevantes');

  const handleSelect = (eventKey, event) => {
    setOrderBy(orderOptions[eventKey]);
  };

  return (
    <>
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
        <Col
          xs={12}
          xl={3}
          className={'d-xl-block ' + (openedFilters ? 'd-block' : 'd-none')}
        >
          <Card className='my-3 PropertiesList__filters '>
            <Card.Body>
              <div className='d-flex justify-content-between'>
                <p style={{ 'font-size': '18px' }}>
                  <b>Selección actual</b>
                </p>
                <button type='button' className='btn btn-link p-0'>
                  <b>
                    <i className='fas fa-trash'></i> Limpiar filtros
                  </b>
                </button>
              </div>
              <hr />
              <div>
                <p style={{ 'font-size': '18px' }}>
                  <b>Ubicación</b>&nbsp;
                </p>
                <Form.Group controlId='formBasicSearch' className='d-flex my-3'>
                  <Form.Control placeholder='Buscar por distrito o barrio' />
                  <Button
                    variant='primary btn-primary-inverse'
                    className='ml-1'
                  >
                    <b>
                      <i className='fas fa-plus'></i>
                    </b>
                  </Button>
                </Form.Group>
                <Button className='my-3' block>
                  <i className='fas fa-map-marker-alt'></i> Ver mapa
                </Button>
              </div>
              <p style={{ 'font-size': '18px' }}>
                <b>Dirección</b>&nbsp;
              </p>
              <Form.Group controlId='formBasicSearch' className='d-flex my-3'>
                <Form.Control placeholder='Buscar por dirección' />
                <Button variant='primary btn-primary-inverse' className='ml-1'>
                  <b>
                    <i className='fas fa-search '></i>
                  </b>
                </Button>
              </Form.Group>
              <hr />
              <p style={{ 'font-size': '18px' }}>
                <b>Tipo de operación</b>&nbsp;
              </p>
              <div className='my-3'>
                <Form.Check
                  type='radio'
                  label='Comprar'
                  name='formHorizontalRadios'
                  id='comprar'
                  className='my-1'
                />
                <Form.Check
                  type='radio'
                  label='Alquilar'
                  name='formHorizontalRadios'
                  id='alquilar'
                  className='my-1'
                />
                <Form.Check
                  type='radio'
                  label='Temporal/Vacacional'
                  name='formHorizontalRadios'
                  id='temporal'
                  className='my-1'
                />
                <Form.Check
                  type='radio'
                  label='Proyectos'
                  name='formHorizontalRadios'
                  id='proyectos'
                  className='my-1'
                />
              </div>
              <hr />
              <p style={{ 'font-size': '18px' }}>
                <b>Precio</b>&nbsp;
                <div className='d-flex'>
                  <Form.Control placeholder='Desde $' />
                  <Form.Control placeholder='Hasta $' className='mx-1' />
                  <Button>
                    <i className='fas fa-check'></i>
                  </Button>
                </div>
              </p>
              <hr />
              <p style={{ 'font-size': '18px' }}>
                <b>Condominio</b>&nbsp;
                <div className='d-flex'>
                  <Form.Control placeholder='Desde $' />
                  <Form.Control placeholder='Hasta $' className='mx-1' />
                  <Button>
                    <i className='fas fa-check'></i>
                  </Button>
                </div>
              </p>
              <hr />
              <p style={{ 'font-size': '18px' }}>
                <b>Tipo de inmueble</b>&nbsp;
              </p>
              <div className='my-3'>
                <Form.Check
                  type='radio'
                  label='Apartamento'
                  name='formHorizontalRadios2'
                  id='apartamento'
                  className='my-1'
                />
                <Form.Check
                  type='radio'
                  label='Casa'
                  name='formHorizontalRadios2'
                  id='casa'
                  className='my-1'
                />
                <Form.Check
                  type='radio'
                  label='Terreno'
                  name='formHorizontalRadios2'
                  id='terreno'
                  className='my-1'
                />
                <Form.Check
                  type='radio'
                  label='Local comercial'
                  name='formHorizontalRadios2'
                  id='local'
                  className='my-1'
                />
              </div>
              <hr />
              <p style={{ 'font-size': '18px' }}>
                <b>Habitaciones</b>&nbsp;
              </p>
              <ButtonGroup className='d-flex justify-content-between' toggle>
                <ToggleButton
                  type='radio'
                  name='radio'
                  defaultChecked
                  value='1'
                  variant='primary btn-primary-inverse'
                  className='rounded-circle'
                >
                  +1
                </ToggleButton>
                <ToggleButton
                  type='radio'
                  name='radio'
                  value='2'
                  variant='primary btn-primary-inverse'
                  className='rounded-circle'
                >
                  +2
                </ToggleButton>
                <ToggleButton
                  type='radio'
                  name='radio'
                  value='3'
                  variant='primary btn-primary-inverse'
                  className='rounded-circle'
                >
                  +3
                </ToggleButton>
                <ToggleButton
                  type='radio'
                  name='radio'
                  value='4'
                  variant='primary btn-primary-inverse'
                  className='rounded-circle'
                >
                  +4
                </ToggleButton>
                <ToggleButton
                  type='radio'
                  name='radio'
                  value='5'
                  variant='primary btn-primary-inverse'
                  className='rounded-circle'
                >
                  +5
                </ToggleButton>
              </ButtonGroup>
              <hr />
              <p style={{ 'font-size': '18px' }}>
                <b>Baños</b>&nbsp;
              </p>
              <ButtonGroup className='d-flex justify-content-between' toggle>
                <ToggleButton
                  type='radio'
                  name='radio'
                  defaultChecked
                  value='1'
                  variant='primary btn-primary-inverse'
                  className='rounded-circle'
                >
                  +1
                </ToggleButton>
                <ToggleButton
                  type='radio'
                  name='radio'
                  value='2'
                  variant='primary btn-primary-inverse'
                  className='rounded-circle'
                >
                  +2
                </ToggleButton>
                <ToggleButton
                  type='radio'
                  name='radio'
                  value='3'
                  variant='primary btn-primary-inverse'
                  className='rounded-circle'
                >
                  +3
                </ToggleButton>
                <ToggleButton
                  type='radio'
                  name='radio'
                  value='4'
                  variant='primary btn-primary-inverse'
                  className='rounded-circle'
                >
                  +4
                </ToggleButton>
                <ToggleButton
                  type='radio'
                  name='radio'
                  value='5'
                  variant='primary btn-primary-inverse'
                  className='rounded-circle'
                >
                  +5
                </ToggleButton>
              </ButtonGroup>
              <hr />
              <p style={{ 'font-size': '18px' }}>
                <b>Estacionamientos</b>&nbsp;
              </p>
              <ButtonGroup className='d-flex justify-content-between' toggle>
                <ToggleButton
                  type='radio'
                  name='radio'
                  defaultChecked
                  value='1'
                  variant='primary btn-primary-inverse'
                  className='rounded-circle'
                >
                  +1
                </ToggleButton>
                <ToggleButton
                  type='radio'
                  name='radio'
                  value='2'
                  variant='primary btn-primary-inverse'
                  className='rounded-circle'
                >
                  +2
                </ToggleButton>
                <ToggleButton
                  type='radio'
                  name='radio'
                  value='3'
                  variant='primary btn-primary-inverse'
                  className='rounded-circle'
                >
                  +3
                </ToggleButton>
                <ToggleButton
                  type='radio'
                  name='radio'
                  value='4'
                  variant='primary btn-primary-inverse'
                  className='rounded-circle'
                >
                  +4
                </ToggleButton>
                <ToggleButton
                  type='radio'
                  name='radio'
                  value='5'
                  variant='primary btn-primary-inverse'
                  className='rounded-circle'
                >
                  +5
                </ToggleButton>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} xl={9}>
          <div className='d-none d-xl-flex justify-content-end my-3'>
            <ButtonGroup>
              <Button variant='primary btn-primary-inverse'>
                Ordernar por:
              </Button>
              <Button variant='primary btn-primary-inverse'>
                <b>Relevantes</b>
              </Button>
              <Button variant='primary btn-primary-inverse'>
                Recién publicado
              </Button>
              <DropdownButton
                as={ButtonGroup}
                title={<b>Ver más</b>}
                variant='primary btn-primary-inverse'
              >
                <Dropdown.Item eventKey='1'>Baratos</Dropdown.Item>
                <Dropdown.Item eventKey='2'>Caros</Dropdown.Item>
                <Dropdown.Item eventKey='3'>Bajaron de precio</Dropdown.Item>
                <Dropdown.Item eventKey='4'>Amplios</Dropdown.Item>
              </DropdownButton>
            </ButtonGroup>
          </div>
          <p>
            <b>{parseInt(Math.random() * 10000)}</b>
            &nbsp;Casas relevantes en Venezuela
          </p>
          <Link to='/propiedades/1' className='text-reset text-decoration-none'>
            <Property />
          </Link>
          <Link to='/propiedades/2' className='text-reset text-decoration-none'>
            <Property />
          </Link>
          <Link to='/propiedades/3' className='text-reset text-decoration-none'>
            <Property />
          </Link>
          <Link to='/propiedades/4' className='text-reset text-decoration-none'>
            <Property />
          </Link>
          <Link to='/propiedades/5' className='text-reset text-decoration-none'>
            <Property />
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default PropertiesList;
