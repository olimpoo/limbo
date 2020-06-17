import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropertiesFilters from '../components/PropertiesFilters';
import PropertiesList from '../components/PropertiesList';

const Properties = () => {
  const [openFilters, setOpenFilters] = useState(false);

  const handleClickFilters = (event) => {
    setOpenFilters(!openFilters);
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <PropertiesFilters onClickFilters={handleClickFilters} />
        </Col>
        <Col xs={12}>
          <PropertiesList openedFilters={openFilters} />
        </Col>
      </Row>
    </Container>
  );
};

export default Properties;
