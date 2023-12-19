import React, { useState, useEffect } from 'react';
import '../App.css';
import EUnoteSite from './EUnoteSite';
// import slika from '../assets/.gif';

const HomeComponent = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
    }, []);

    return (
    <div className="main_content">
        <EUnoteSite/>
        <h1>Dobrodošli!</h1>
        <div className="container">
            <div className={`box left ${animate ? 'enter' : 'left-enter'}`}>
                {/* <img src={slika} alt="Slika građevinskih radova." style={{ width: '100%', height: 'auto' }} /> */}
            </div>
            {/* <div className="spacer"></div> */}
            <div className={`box right ${animate ? 'enter' : 'right-enter'}`}>
                <p>Tvrtka KABEL-OPTIKA d.o.o. osnovana je 2000. godine. 
                    Specijalizirani smo za izvođenje svih vrsta građevinskih radova, uključujući radove na izgradnji i održavanju ukopanih manipulativnih cjevovoda, telekomunikacijskih vodova i mreža te uklanjanje objekata i izgradnju nasipa. 
                    Također, usmjereni smo isključivo na Vaše zamisli i želje te nam je glavni cilj da konačna izvedba bude Vaš zahtjev, a naš maksimalno uloženi trud. Suradnja s Vama počiva na profesionalnoj, ugodnoj i pouzdanoj razini. 
                    Na prvom mjestu je zadovoljstvo klijenta, kao i kvalitetno izvršen posao. Struktura zaposlenih djelatnika, stečena iskustva iz dugogodišnjeg rada kao i zavidna razina tehničke opremljenosti jamči kvalitetno i pravovremeno izvođenje ugovorenih radova. 
                    Stojimo Vam na raspolaganju. Čekamo Vaš poziv.</p>
            </div>
        </div>
    </div>
    );
}

export default HomeComponent;