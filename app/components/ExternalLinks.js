import React from 'react';
import { Col } from 'react-bootstrap';
import { externalLinks } from '../model/external';

export const ExternalLinks = () => {
  return externalLinks.map(link => (
    <Col key={link.link}>
      <div className="mb-2">
        <i className={link.iconClass}></i>
        <a href={link.link} target="_blank" rel="noreferrer"> {link.name}</a>
      </div>
    </Col>
  ));
}