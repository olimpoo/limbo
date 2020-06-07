import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../assets/styles/PropertyContactForm.scss';

const ContactForm = () => (
  <Card className='PropertyContactForm sticky-top my-2'>
    <Card.Body>
      <p>
        <b>Mensaje al anunciante</b>
      </p>
      <Form>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control required type='email' placeholder='Ingresa tu email' />
          <Form.Text className='text-muted'>
            Nunca compartiremos tu email con nadie
          </Form.Text>
        </Form.Group>

        <div className='d-lg-flex'>
          <Form.Group className='mr-lg-1' controlId='formBasicName'>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              type='text'
              placeholder='Ingresa tu nombre'
            />
          </Form.Group>

          <Form.Group className='ml-lg-1' controlId='formBasicName'>
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              required
              type='text'
              placeholder='Ingresa tu número de teléfono'
            />
          </Form.Group>
        </div>

        <Form.Group controlId='ControlTextarea'>
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            required
            as='textarea'
            value='Hola, me interesa este inmueble que vi en Limbo y quiero que me contacten. Gracias.'
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
