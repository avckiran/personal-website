import React, { useState } from 'react';
import { Row, Button, ButtonGroup } from 'react-bootstrap';

export const NavButtons = ({ onSectionChange }) => {

  const [currentSection, setCurrentSection] = useState('summary')

  const buttonClick = e => {
    setCurrentSection(e.currentTarget.id);
    onSectionChange(e.currentTarget.id);
  };

  const sections = [
    {
      label: 'Summary',
      id: 'summary'
    },
    {
      label: 'Professional Experience',
      id: 'experience'
    },
    {
      label: 'Personal Projects',
      id: 'projects'
    },
    {
      label: 'Books & Interests',
      id: 'interests'
    }
  ]


  return (
    <Row className="mb-5">
       <ButtonGroup size="lg" className="w-100">
          { sections.map( section => (
            <Button
              key={section.id}
              onClick={e => buttonClick(e)}
              variant={currentSection === section.id ? 'success' : 'dark'}
              id={section.id}
            >
              {section.label}
            </Button>
          ))}
        </ButtonGroup>
    </Row>
  );
}