import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactForm = () => (
  <Card className='sticky-top'>
    <Card.Body>
      <p>
        <b>Mensaje al anunciante</b>
      </p>
      <Form>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='Ingresa tu email' />
          <Form.Text className='text-muted'>
            Nunca compartiremos tu email con nadie
          </Form.Text>
        </Form.Group>

        <Form.Group controlId='formBasicName'>
          <Form.Label>Nombre</Form.Label>
          <Form.Control type='text' placeholder='Ingresa tu nombre' />
        </Form.Group>

        <Form.Group controlId='formBasicName'>
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type='text'
            placeholder='Ingresa tu número de teléfono'
          />
        </Form.Group>

        <Form.Group controlId='ControlTextarea'>
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as='textarea'
            value='Hola, me interesa este inmueble que vi en Conlallave y quiero que me contacten. Gracias.'
            rows='3'
          />
        </Form.Group>

        <Form.Group controlId='formBasicCheckbox' className='d-flex'>
          <Form.Check type='checkbox' label='' custom></Form.Check>
          <Form.Label htmlFor='formBasicCheckbox'>
            Confirmo que he leido los&nbsp;
            <a href='/terms'>terminos y condiciones</a>
          </Form.Label>
        </Form.Group>

        <Button variant='primary' type='submit' block>
          <b>CONTACTAR ANUNCIANTE</b>
        </Button>
      </Form>
    </Card.Body>
  </Card>
);

export default ContactForm;
