import React, {useState, useEffect, useRef } from "react";
import {Helmet} from "react-helmet";
import EUnoteSite from './EUnoteSite';
import emailjs from '@emailjs/browser';
import '../App.css';
import slika from '../assets/top/13.jpg';
import TopImage from "./TopImage";

const ContactComponent = () => {
    const form = useRef();
    const SERVICE_ID = "service_c9xfdk7";
    const TEMPLATE_ID = "template_7pp5bcq";
    const PUBLIC_KEY = "M-4tGCyzhVCDjW15A";
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
          .then(
            (result) => {
              alert('Poruka je uspješno poslana! Ubrzo ćemo Vam odgovoriti.');
            },
            (error) => {
              console.log(error.text);
            }
          );
      };

	return (
    <div className="main_content">
        <Helmet>
            <title>Kontakt – KABEL-OPTIKA d.o.o.</title>
            <meta name="description" content="Glavna načela kojima se vodimo u poslovanju su kvaliteta i stručnost, s krajnjom težnjom zadovoljstvu svih klijenata. Stoga nam se javite!" />
            <meta name="keywords" content="kvaliteta, stručnost, zadovoljstvo" />
        </Helmet>
        <TopImage selectedImage={slika} />
        <EUnoteSite/>
        <h1>Kontakt</h1>
        <div className="container">
            <div className={`box left ${animate ? 'enter' : 'left-enter'}`}>
                <form className="contact" ref={form} onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="sender_name">Ime i prezime:</label>
                        <input type="text" id="sender_name" name="sender_name" placeholder="Unesite svoje ime i prezime" required />
                    </div>
                    <div>
                        <label htmlFor="sender_email">E-pošta:</label>
                        <input type="email" id="sender_email" name="sender_email" placeholder="Unesite svoju adresu e-pošte" required />
                    </div>
                    <div>
                        <label htmlFor="sender_subject">Predmet:</label>
                        <input type="text" id="sender_subject" name="sender_subject" placeholder="Unesite predmet poruke" required/>
                    </div>
                    <div>
                        <label htmlFor="sender_message">Poruka:</label>
                        <textarea id="sender_message" name="sender_message" placeholder="Napišite svoju poruku" rows="8" required ></textarea>
                    </div>
                    <button className="submit_button" type="submit">Pošalji</button>
                </form>
            </div>
        {/* <div className="spacer"></div> */}
            <div className={`box right ${animate ? 'enter' : 'right-enter'}`}>
                <iframe title="Lokacija tvrtke" decoding="async" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d695.5245968052798!2d15.952682269637318!3d45.78925659819257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d69099c16d9f%3A0xeffe502d8c8b4d13!2sUl.%20%C4%86ire%20Truhelke%2015%2C%2010000%2C%20Zagreb!5e0!3m2!1shr!2shr!4v1703317735526!5m2!1shr!2shr" width="100%" height="400" style={{border: 0, allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade"}}></iframe>
            </div>
        </div>
    </div> 
	);
};

export default ContactComponent;