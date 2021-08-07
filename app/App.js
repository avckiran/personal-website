import React from 'react';
import { LegacyHome } from './components/LegacyHome/LegacyHome';
import { NavBar } from './components/NavBar/NavBar';
import { MainContent } from './components/MainContent/MainContent';
import { Footer } from './components/Footer/Footer';
import './app.scss';



const App = () => {

  return (
    <div className='app-root'>
      <NavBar />
      <MainContent />
      <Footer />
    </div>
  )

  
};

export default App;
