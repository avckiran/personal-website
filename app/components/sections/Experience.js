import React from 'react';
import { Col } from 'react-bootstrap';
import { ExperienceItem } from '../ExperienceItem';
import { experience } from '../../model/experience';

export const Experience = () => {
  return <>
    <Col xs={12}>
      <ExperienceItem company={experience["home-depot"]}/>
      <ExperienceItem company={experience["unibees"]}/>
      <ExperienceItem company={experience["cognizant"]}/>
      <ExperienceItem company={experience["tcs"]}/>
    </Col>
  </>
}