import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { summary } from '../../model/summary';
import { education } from '../../model/education';

const { frontend, backend, database } = summary.skills;


export const Summary = () => {

  return (
    <>
        <Col xs={12} md={8}>
         <h4 className="mb-3">Overview:</h4>
         {summary && (<p>{summary.overview}</p>)}
         {summary.highlights && (
           <>
            <h6>Few highlights of my career: </h6>
            <ul>
              {summary.highlights.map((line) => {
                return <li key={line}>{line}</li>
              })}
            </ul>
           </ >
         )}
        <h4>Skills: </h4>
        <h6 className="mt-3">Frontend: </h6>
        {frontend.map(skill => <span key={skill} className="m-2">{skill}</span> )}
        <h6 className="mt-3">Backend: </h6>
        {backend.map(skill => <span key={skill} className="m-2">{skill}</span> )}
        <h6 className="mt-3">Database: </h6>
        {database.map(skill => <span key={skill} className="m-2">{skill}</span> )}
        </Col>
        <Col xs={12} md={4}>
          <h4>Education:</h4>
          {education && education.map((item) => {
            return (
              <Card style={{ width: '21rem' }} key={item.universityName} className="mb-3">
                <Card.Header style={{backgroundColor: '#2c3e50', color: 'white'}}>
                  <strong>{item.universityName}</strong>
                </Card.Header>
                {item.image && (<Card.Img variant="top" src={item.image} />)}
                <Card.Body>
                  <Card.Title>{item.degree}</Card.Title>
                  <Card.Text>
                    <div className="d-flex justify-content-between">
                      <strong>{item.year}</strong>
                      {item.gpa && (<strong>GPA: {item.gpa}</strong>)}
                    </div>
                    <ul>
                      {item.highlights && (item.highlights.map(line => {
                        return <li key={line}>{line}</li>
                      }))}
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            )
          })}
        </Col>
    </>
  )
}