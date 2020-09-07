import React from 'react';
import { Col, Card } from 'react-bootstrap';

export const Summary = () => {
  return (
    <>
        <Col xs={12} md={8}>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime commodi omnis aspernatur, in facilis, excepturi odit voluptate magnam, dolorem blanditiis quam laboriosam culpa saepe. Similique reprehenderit accusamus labore commodi sapiente voluptates fugiat ipsa voluptatibus totam ratione alias, adipisci ullam iure explicabo asperiores expedita autem impedit rem repellendus unde eligendi aliquam? Nemo eum reprehenderit cupiditate odit incidunt consequatur labore quaerat dolore pariatur a cumque architecto velit ad autem rem, temporibus quas possimus, alias at dignissimos! Eos, cumque possimus sit neque beatae quaerat assumenda optio animi ea, amet quidem asperiores fugit blanditiis illum in pariatur iusto dignissimos velit natus expedita nam ex quae? Modi est minima nesciunt deserunt vel aliquid adipisci veritatis doloremque voluptate reprehenderit molestias ab facilis, odit non aliquam libero laboriosam similique fuga, tempore inventore ex alias! Hic quisquam aspernatur veniam porro nesciunt minus voluptas consectetur dolor a enim, accusantium eaque dolorum sequi ipsam harum? Facere assumenda non cupiditate ipsam optio, voluptatem quis ab nobis fugit dolores? Facilis provident expedita inventore fugiat nisi minima illo iste sit consequuntur maxime laudantium voluptate facere, alias ab eum animi? Sunt tempore excepturi quaerat esse consectetur dolor distinctio a enim nisi facilis voluptatum nesciunt perferendis incidunt autem labore assumenda
        </Col>
        <Col xs={12} md={4}>
          <h4>Education:</h4>
          <Card style={{ width: '23rem' }} className="mb-3">
            <Card.Img variant="top" src="https://www.nicepng.com/png/detail/271-2714436_utd-the-university-of-texas-at-dallas-ut.png" />
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
          <Card style={{ width: '23rem' }}>
            <Card.Header style={{backgroundColor: 'green', color: 'white'}}>Acharya Nagarjuna University</Card.Header>
            <Card.Body>
              <Card.Title>Bachelors in Computer Science</Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-between">
                  <strong>May 2008 </strong>
                  <strong>GPA: 3.8</strong>
                  </div>
                <ul>
                  <li>Recepient of Dean's Impact Scholarship</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
         
        </Col>
    </>
  )
}