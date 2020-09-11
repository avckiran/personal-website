import React, { useState } from 'react';
import { Container, Col, Row, Image, Button } from 'react-bootstrap';
import { ExternalLinks } from './components/ExternalLinks';
import { NavButtons } from './components/NavButtons';
import { MainBody } from './components/MainBody';

const App = () => {

  const [section, onSectionChange] = useState('summary');

  return (
    <Container className="mt-5">
      <Row className="mb-5">
        <Col xs={12} md={4} lg={3}>
          <Image src="https://chandrakiran-achanta-personal.s3.amazonaws.com/resume-pic-500.png" fluid thumbnail/>
        </Col>
        <Col xs={12} md={8} lg={9}> 
          <div className="text-left">
            <h1 className="display-4">Chandra Kiran Achanta</h1>
            <p className="lead"> Experienced Frontend / Full Stack Developer</p>
            <Row className="mb-3"> <ExternalLinks /> </Row>

            <Button variant="success">
              <i className="fas fa-download mr-2"></i>
              Download Resume</Button>
          </div>
        </Col>
      </Row>
        <NavButtons onSectionChange={onSectionChange}/>
      <Row className="main-section">
        <MainBody section={section}/>
      </Row>
    </Container>
  )
};

export default App;
