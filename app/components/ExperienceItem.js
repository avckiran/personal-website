import React from 'react';
import PropTypes from 'prop-types';
import { Media, Card } from 'react-bootstrap';

export const ExperienceItem = ({ company ={} }) => {

  const { title, role, period, image, details } = company;

  return (
    <>
      <Card className="mb-3">
        <Card.Header>
          <div className="d-flex justify-content-between">
            <strong>{role}</strong>
            <strong>{period}</strong>
          </div>
        </Card.Header>
        <Card.Body>
          <Media>
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src={image}
                  alt="Generic placeholder"
                />
                <Media.Body>
                  <h5>{title}</h5>
                  <ul>
                    {details.map(detail => (<li key={detail}> {detail} </li>))}
                  </ul>
                </Media.Body>
          </Media>
        </Card.Body>
      </Card>
    </>
  )
}

ExperienceItem.propTypes = {
  company: PropTypes.object.isRequired
}

