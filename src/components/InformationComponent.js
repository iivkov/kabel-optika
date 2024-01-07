import React, { useState, useEffect } from 'react';
import '../App.css';
import slika from '../assets/4.jpg';
import TopImage from './TopImage';

const InformationComponent = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
    }, []);

    return (
    <div className="main_content">
        <TopImage selectedImage={slika} />
        <h1>Osnovni podatci</h1>
        <div className="container">
            <div className={`box left ${animate ? 'enter' : 'left-enter'}`}>
                <p>KABEL-OPTIKA d.o.o. za trgovinu i prijevoz</p>
                <p>Ćire Truhelke 15</p>
                <p>HR-10000 Zagreb</p>
                <br />
                <br />
                <p>Telefon: +385 (0)1 366 5055</p>
                <p>E-pošta: info@kabel-optika.hr</p>
            </div>
            {/* <div className="spacer"></div> */}
            <div className={`box right ${animate ? 'enter' : 'right-enter'}`}>
                <p>Ključna osoba: Tomislav Krešić</p>
                <p>Godina osnutka: 2000.</p>
                <p>Mjerodavni sud: Trgovački sud u Zagrebu</p>
                <p>Pravni oblik: društvo s ograničenom odgovornošću</p>
                <p>MBS: 080337486</p>
                <p>OIB: 84074605978</p>
                <p>Temeljni kapital: 427.460,00 EUR</p>
            </div>
        </div>
    </div>
    );
}

export default InformationComponent;