import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeComponent from "./components/HomeComponent";
import AboutComponent from './components/AboutComponent';
import InformationComponent from './components/InformationComponent';
import ProjectsComponent from './components/ProjectsComponent';
import ContactComponent from './components/ContactComponent';
import AccessibilityMenu from './components/AccessibilityMenu';
// import TopImage from './components/TopImage';
// import slika1 from './assets/1.jpg';
// import slika2 from './assets/3.jpg';
// import slika3 from './assets/4.jpg'; 

function App() {
  const [fontSize, setFontSize] = useState(16);
  const [grayscale, setGrayscale] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  const increaseFontSize = () => {
    if (fontSize * 1.15 <= 96) {
      setFontSize(prevFontSize => prevFontSize * 1.15);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize * 0.9 >= 16) {
      setFontSize(prevFontSize => prevFontSize * 0.9);
    }
  };

  const resetFontSize = () => {
    // setFontSize(16);
    setGrayscale(false);
    setHighContrast(false);
  };

  const toggleGrayscale = () => {
    setGrayscale(prevGrayscale => !prevGrayscale);
  };

  const toggleHighContrast = () => {
    setHighContrast(prevHighContrast => !prevHighContrast);
  };

  // const imageList = [slika1, slika2, slika3];

  return (
    <div className={`App ${grayscale ? 'grayscale' : ''} ${highContrast ? 'high-contrast' : ''}`} style={{ fontSize: `${fontSize}px`}}>
    {/* < > */}
      <BrowserRouter>
        <Navbar/>
        {/* <TopImage images={imageList} /> */}
        <AccessibilityMenu
        increaseFontSize={increaseFontSize}
        decreaseFontSize={decreaseFontSize}
        resetFontSize={resetFontSize}
        toggleGrayscale={toggleGrayscale}
        toggleHighContrast={toggleHighContrast}
        grayscale={grayscale}
        highContrast={highContrast}
        fontSize={fontSize}
      />
        <Routes>
          <Route path="/" exact element={<HomeComponent/>} />
          <Route path="/o-nama" element={<AboutComponent/>} />
          <Route path="/podatci" element={<InformationComponent/>} />
          <Route path="/EU-projekti" element={<ProjectsComponent/>} />
          <Route path="/kontakt" element={<ContactComponent/>} />
        </Routes>
        <Footer/>
		  </BrowserRouter>
    </div>
    // {/* </> */}
  );
}

export default App;