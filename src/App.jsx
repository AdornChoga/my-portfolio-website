import React, { useState, useEffect } from 'react';
import './App.css';
import NavbarDesktop from './components/navbar-desktop/NavbarDesktop';
import NavbarMobile from './components/navbar-mobile/NavbarMobile';

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
    <div className={isDesktop && 'd-flex main-container'}>
      {isDesktop ? <NavbarDesktop /> : <NavbarMobile />}
      <div className="border w-100">
        <h1>Welcome</h1>
      </div>
    </div>
  );
};

export default App;
