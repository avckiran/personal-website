import React from 'react';
import { Button, Container, Col, Row } from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
 
const App = () => {

  return (
    <Container className="mt-5">
      <Row className="mb-5">
        <Col xs={12} md={4}>
          Image Placeholder
        </Col>
        <Col xs={12} md={8}> 
          <Jumbotron>
            Name, Contact, Tagline placeholder
          </Jumbotron>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col> Option 1</Col>
        <Col> Option 2</Col>
        <Col> Option 3</Col>
        <Col> Option 4</Col>
      </Row>
      <Row>
        <Col xs={12} md={8}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nesciunt doloremque quisquam laudantium minima? Eligendi ipsum quasi cupiditate sit sequi aut saepe quod unde eveniet architecto beatae, molestias iusto distinctio repellat neque sunt amet reprehenderit, explicabo perferendis? Voluptas, veniam voluptatem.
        </Col>
        <Col xs={12} md={4}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, suscipit.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, suscipit.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, suscipit.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, suscipit.
        </Col>
      </Row>
    </Container>
  )
};

export default App;
