import React from 'react';
import '../App.css';
import Petrinja from '../assets/Petrinja.jpg';
import EUnoteProject from './EUnoteProject';

const ProjectsComponent = () => {
    
    return (
    <div className="main_content">
        <img src={Petrinja} alt="Slika Petrinje." style={{ width: '100%', height: 'auto' }} />
        <h1>NOVI RAZVOJ U PETRINJI KABEL-OPTIKA d.o.o.</h1>
        <h2>Kod projekta: KK.08.2.1.16.0148</h2>
        <h2>Naziv poziva: Podrška razvoju poduzetništva u gradu Petrinji</h2>
        <div className="container">
            {/* <img src={Petrinja} alt="Slika Petrinje." style={{ width: '100%', height: 'auto' }} /> */}
            <p>Cilj ovog projekta je održiva fizička, socijalna i gospodarska regeneracija grada Petrinje, s ciljem smanjenja socijalnih nejednakosti, isključenosti i siromaštva. 
                    Nabavom novih roba i/ili usluga, Prijavitelj će povećati svoju: konkurentnost i održivost poslovanja i proizvodne kapacitete. Prijavitelj će otvoriti nova tržišta i povećat će mu se prihod. 
                    Projekt je usmjeren na djelatnike Prijavitelja, kupce i dobavljače kao ciljne skupine projekta, ali i sve građane Republike Hrvatske i to upravo kroz očuvanje postojećih radnih mjesta i otvaranje novih. 
                    Projekt vodi računa o zaštiti okoliša.</p>
            <div className="box">
                <h3>Informacije o troškovima</h3>
                <p>Ukupna vrijednost projekta (EUR): 263.997,69</p>
                <p>Ukupni prihvatljivi troškovi (EUR): 209.364,52</p>
                <p>Ukupna bespovratna sredstva (EUR): 177.959,84</p>
            </div>
            {/* <div className="spacer"></div> */}
            <div className="box">
                <h3>Vrijeme provedbe</h3>
                <p>Početak provedbe: 04/2022</p>
                <p>Kraj provedbe: 12/2023</p>
                <p>Trajanje provedbe (mjeseci): 20</p>
            </div>
        </div>
        <EUnoteProject />
    </div>
    );
}

export default ProjectsComponent;