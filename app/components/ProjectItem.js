import React from 'react';
import { Media, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';


export const ProjectItem = ({ project = {} } ) => {

  const { title, summary, links, details } = project;
    
  return (
    <>
      <Card className="mb-3">
        <Card.Header>
            <strong>{title}</strong>
        </Card.Header>
        <Card.Body>
          {links.website && (<h6>Project link is <a href={links.website}>here</a> </h6>)}
          {links.github && (<h6>Github Repo is  <a href={links.github}>here</a></h6>)}
          {summary && (<p className="mt-3 mb-3">{summary}</p>)}
          <ul>
            {details.map(detail => (<li key={detail}> {detail} </li>))}
          </ul>
        </Card.Body>
      </Card>
    </>
  )
}

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired
}