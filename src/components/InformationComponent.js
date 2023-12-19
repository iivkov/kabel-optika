import React, { useState, useEffect } from 'react';
import '../App.css';

const InformationComponent = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
    }, []);

    return (
    <div className="main_content">
        <h1>Osnovni podatci</h1>
        <div className="container">
            <div className={`box left ${animate ? 'enter' : 'left-enter'}`}>
                <p>MALEKINUŠIĆ d.o.o. za gradnju, trgovinu i usluge</p>
                <p>Kunekova ulica 2B</p>
                <p>HR-10310 Ivanić-Grad</p>
                <br />
                <br />
                <p>Mobitel: +385 (0)98 622 267</p>
                <p>E-pošta: jozomalekinusic@gmail.com</p>
            </div>
            {/* <div className="spacer"></div> */}
            <div className={`box right ${animate ? 'enter' : 'right-enter'}`}>
                <p>Ključna osoba: Jozo Malekinušić</p>
                <p>Godina osnutka: 2014.</p>
                <p>Mjerodavni sud: Trgovački sud u Zagrebu</p>
                <p>Pravni oblik: društvo s ograničenom odgovornošću</p>
                <p>MBS: 080934571</p>
                <p>OIB: 66053112060</p>
                <p>Temeljni kapital: 2.654,46 EUR</p>
            </div>
        </div>
    </div>
    );
}

export default InformationComponent;