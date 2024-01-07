import React, {useState, useEffect } from 'react';
import '../App.css';
import slika from '../assets/3.jpg';
import TopImage from './TopImage';

const AboutComponent = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
    }, []);

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
                            Neprestano težimo daljnjem poboljšanju kvalitete svojih usluga, pri čemu je najvažnija stručnost naših djelatnika,
                            njih 35, koliko trenutačno zapošljavamo. Učinkovitosti našeg rada pridonosi i vozni park kojeg čini 6 kombi vozila, 
                            5 kamiona kipera, 8 bagera rovokopača, 2 valjka i dr.
                        </p>
                    </div>
                </div>
            </div>
    );
}

export default AboutComponent;