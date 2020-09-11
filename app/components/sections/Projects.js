import React from 'react';
import { ProjectItem } from '../ProjectItem';
import { projects } from '../../model/projects';

export const Projects = () => {
  return (
  <>
    {projects.map(project => <ProjectItem key={project.title} project={project} />)}
  </>
  )
}