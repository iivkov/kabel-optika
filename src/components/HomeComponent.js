import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import EUnoteSite from './EUnoteSite';
import '../App.css';
import slika from '../assets/top/1.jpg';
import slika2 from '../assets/Radovi na izgradnji Retail parka PIGIK Petrinja/12.jpg'
import TopImage from './TopImage';

const HomeComponent = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
    }, []);

    return (
    <div className="main_content">
        <Helmet>
            <title>Početna – KABEL-OPTIKA d.o.o.</title>
            <meta name="description" content="Specijalizirani smo za izvođenje svih vrsta građevinskih radova, uključujući izgradnju cjevovoda, telekomunikacijskih vodova i nasipa te uklanjanje objekata." />
            <meta name="keywords" content="građevinski radovi, izgradnja objekata, održavanje, cjevovodi, telekomunikacijski vodovi, nasipi, uklanjanje objekata, zadovoljstvo, kvaliteta, iskustvo, stručnost, opremljenost " />
        </Helmet>
        <TopImage selectedImage={slika} />
        <EUnoteSite/>
        <h1>Dobrodošli!</h1>
        <div className="container">
            <div className={`box left ${animate ? 'enter' : 'left-enter'}`}>
                <p>Tvrtka KABEL-OPTIKA d.o.o. osnovana je 2000. godine. 
                    Specijalizirani smo za izvođenje svih vrsta građevinskih radova, uključujući radove na izgradnji i održavanju ukopanih manipulativnih cjevovoda, telekomunikacijskih vodova i mreža te uklanjanje objekata i izgradnju nasipa. 
                    Također, usmjereni smo isključivo na Vaše zamisli i želje te nam je glavni cilj da konačna izvedba bude Vaš zahtjev, a naš maksimalno uloženi trud. Suradnja s Vama počiva na profesionalnoj, ugodnoj i pouzdanoj razini. 
                    Na prvom mjestu je zadovoljstvo klijenta, kao i kvalitetno izvršen posao. Struktura zaposlenih djelatnika, stečena iskustva iz dugogodišnjeg rada kao i zavidna razina tehničke opremljenosti jamči kvalitetno i pravovremeno izvođenje ugovorenih radova. 
                    Stojimo Vam na raspolaganju. Čekamo Vaš poziv.</p>
            </div>
            <div className={`box right ${animate ? 'enter' : 'right-enter'}`}>
                <img decoding="async" src={slika2} alt="Slika građevinskih radova." style={{ width: '100%', height: 'auto' }} />
            </div>
        </div>
    </div>
    );
}

export default HomeComponent;