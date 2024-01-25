import React, {useState, useEffect } from 'react';
import '../App.css';
import slika from '../assets/top/3.jpg';
import TopImage from './TopImage';
// import ReactFlipCard from 'reactjs-flip-card'
import ReactCardFlip from 'react-card-flip';
import { Gallery } from "./Gallery"

const AboutComponent = () => {
//     const [animate, setAnimate] = useState(false);

//     useEffect(() => {
//       setAnimate(true);
//     }, []);

//     const [isFlipped, setIsFlipped] = useState(false);

//   const handleCardClick = () => {
//     setIsFlipped(!isFlipped);
//   };

    return (
        <div className="main_content">
                <TopImage selectedImage={slika} />
                <h1>O nama</h1>
                <div className="container">
                    <div className="box">
                        <p>Naša glavna djelatnost su zemljani radovi niskogradnje, a svoje iskustvo i kvalitetu gradili smo i izgradili
                            tijekom dugog niza godina izvodeći mnogobrojne projekte, među ostalim i za klijente kao što su
                            Jadranski naftovod (JANAF), HEP Toplinarstvo, Hrvatski Telekom, Sokol Vinkovci, IG visokogradnja Sesvete,
                            Lučka uprava Sisak te Ministarstvo prostornoga uređenja, graditeljstva i državne imovine Republike Hrvatske.
                            Neprestano težimo daljnjem poboljšanju kvalitete svojih usluga, pri čemu je najvažnija stručnost naših djelatnika.
                        </p>
                    </div>
                    {/* <div className="box">
                        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                            <div className="card" onClick={handleCardClick}>
                                <h1>Ime projekta</h1>
                            </div>
                            <div className="card" onClick={handleCardClick}>
                                <h2>Ime naručitelja</h2>
                            </div>
                        </ReactCardFlip>
                    </div> */}
                    <Gallery />
                </div>
            </div>
    );
}

export default AboutComponent;