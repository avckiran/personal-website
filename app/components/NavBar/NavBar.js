import React from 'react';
import './nav-bar.scss';

export const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar__name">
        <img className="nav-bar__image" src="https://chandrakiran-achanta-personal.s3.amazonaws.com/resume-pic-500.png" />
        <span>Chandra Kiran Achanta</span>
      </div>
      <div className="nav-bar__menu-items">
        <ul>
          <li>Experience</li>
          <li>Education</li>
          <li>Interests</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  )
}