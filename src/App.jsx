import React, { useState, useEffect } from 'react';
import './App.css';
import NavbarDesktop from './components/navbar-desktop/NavbarDesktop';
import NavbarMobile from './components/navbar-mobile/NavbarMobile';
import Views from './Views/Views';

const App = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <div className={isDesktop ? 'row main-container' : ''}>
      {isDesktop ? <NavbarDesktop /> : <NavbarMobile />}
      <div className="col border w-100 page-content">
        <Views />
      </div>
    </div>
  );
};

export default App;
