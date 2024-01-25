import React, { useState } from 'react';
import { ReactComponent as AccessibilityLogo } from '../assets/icons/accessibility_logo.svg';

const AccessibilityMenu = ({
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    toggleGrayscale,
    toggleHighContrast,
    grayscale,
    highContrast,
    fontSize
}) => {
    
    const [accessibilityMenuOpen, setAccessibilityMenuOpen] = useState(false);
    
    const handleAccessibilityIconClick = () => {
        setAccessibilityMenuOpen(!accessibilityMenuOpen);
    };

    return (
    <div className={`accessibility-menu ${accessibilityMenuOpen ? 'open' : ''}`}>
        <div className="accessibility-icon" onClick={handleAccessibilityIconClick}>
            <AccessibilityLogo />
        </div>
        <div className={`accessibility-buttons ${accessibilityMenuOpen ? 'open' : ''}`} style={{ fontSize: `${fontSize}px` }}>
            {/* <button onClick={increaseFontSize}>Povećaj tekst</button>
            <button onClick={decreaseFontSize}>Smanji tekst</button> */}
            <button onClick={toggleGrayscale}>
                {grayscale ? 'Isključi grayscale' : 'Uključi grayscale'}
            </button>
            <button onClick={toggleHighContrast}>
                {highContrast ? 'Isključi visoki kontrast' : 'Uključi visoki kontrast'}
            </button>
            <button onClick={resetFontSize}>Vrati početne postavke</button>
        </div>
    </div>
  );
};

export default AccessibilityMenu;