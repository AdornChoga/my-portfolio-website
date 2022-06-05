import React, { useState, useEffect } from 'react';
import './App.css';
import NavigationBar from './components/navigation-bar/NavigationBar';
import NavbarMobile from './components/navbar-mobile/NavbarMobile';
import Views from './Views/Views';

const App = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth >= 991);

  const updateMedia = () => {
    setDesktop(window.innerWidth >= 991);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <div className={isDesktop ? 'main-container' : 'w-100'}>
      <div className={isDesktop ? 'navbar-container' : ''}>
        {isDesktop ? <NavigationBar /> : <NavbarMobile />}
      </div>
      <div className="border page-content">
        <Views />
      </div>
    </div>
  );
};

export default App;
