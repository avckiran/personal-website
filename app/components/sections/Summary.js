import React from 'react';
import { Col, Card } from 'react-bootstrap';

export const Summary = () => {
  return (
    <>
        <Col xs={12} md={8}>
         <h4>Overview:</h4>
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, aliquid similique adipisci tempora modi esse iste doloribus architecto tenetur doloremque.
        </Col>
        <Col xs={12} md={4}>
          <h4>Education:</h4>
          <Card style={{ width: '21rem' }} className="mb-3">
            <Card.Img variant="top" src="https://chandrakiran-achanta-personal.s3.amazonaws.com/experience-companies-logo/utd-logo.png" />
            <Card.Body>
              <Card.Title>Masters in Business Analytics</Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-between">
                  <strong>May 2018</strong>
                  <strong>GPA: 3.7</strong>
                </div>
                <ul>
                  <li>Recepient of Dean's Impact Scholarship</li>
                  <li>Member of Dean's Council and Marketing Committee Chair</li>
                  <li>Vice President of Entrepreneurship Club (E-Club)</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '21rem' }}>
            <Card.Header style={{backgroundColor: '#2c3e50', color: 'white'}}>
              <strong>Acharya Nagarjuna University</strong>
            </Card.Header>
            <Card.Body>
              <Card.Title>Bachelors in Computer Science</Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-between">
                  <strong>May 2008 </strong>
                  <strong>GPA: 3.8</strong>
                  </div>
                <ul>
                  <li>Majored in Mathematics, Physics and Computer Science</li>
                  <li>Part of literary committee at the college and responsible to technical news reporting and wrote several articles</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
         
        </Col>
    </>
  )
}