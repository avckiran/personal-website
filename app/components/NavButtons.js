import React, { useState } from 'react';
import { Row, Button, ButtonGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const NavButtons = ({ onSectionChange }) => {

  const [currentSection, setCurrentSection] = useState('experience')

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
    <Row className="mb-5 justify-content-center nav-bttn-row">
       <ButtonGroup size="lg" className="w-auto">
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

NavButtons.propTypes = {
  onSectionChange: PropTypes.func.isRequired
}