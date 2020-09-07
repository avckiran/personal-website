import React from 'react';
import PropTypes from 'prop-types';
import { Summary, Experience, Projects, Interests } from './sections';


export const MainBody = ({ section }) => {

  switch(section) {
    case 'summary': return <Summary />
    case 'experience': return <Experience />
    case 'projects': return <Projects/>
    case 'interests': return <Interests />
    default: return null;
  }
}

MainBody.propTypes = {
  section: PropTypes.stringå
}