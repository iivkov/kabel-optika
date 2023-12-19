import React, {useState, useEffect } from 'react';
import '../App.css';
// import slika from '../assets/.jpg';

const AboutComponent = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
    }, []);

    return (
        <div className="main_content">
                <h1>O nama</h1>
                <div className="container">
                    <div className={`box left ${animate ? 'enter' : 'left-enter'}`}>
                        <p>Naša glavna djelatnost su...</p>
                    </div>
                {/* <div className="spacer"></div> */}
                    <div className={`box right ${animate ? 'enter' : 'right-enter'}`}>
                        {/* <img src={slika} alt="Slika građevinskih radova." style={{ width: '100%', height: 'auto' }} /> */}
                    </div>
                </div>
            </div>
    );
}

export default AboutComponent;