import React from 'react';
import {Helmet} from "react-helmet";
import EUnoteSite from './EUnoteSite';
import '../App.css';
import slika from '../assets/top/Petrinja.jpg';
import EUnoteProject from './EUnoteProject';
import TopImage from './TopImage';

const ProjectsComponent = () => {
    
    return (
    <div className="main_content">
        <Helmet>
            <title>EU projekti – KABEL-OPTIKA d.o.o.</title>
            <meta name="description" content="NOVI RAZVOJ U PETRINJI KABEL-OPTIKA d.o.o. projekt je kojim smo otvorili svoju podružnicu u Petrinji." />
            <meta name="keywords" content="projekt, EU, podružnica" />
        </Helmet>
        <TopImage selectedImage={slika} />
        <EUnoteSite/>
        <h1>NOVI RAZVOJ U PETRINJI KABEL-OPTIKA d.o.o.</h1>
        <h2>Kod projekta: KK.08.2.1.16.0148</h2>
        <h2>Naziv poziva: Podrška razvoju poduzetništva u gradu Petrinji</h2>
        {/* <h2>Posredničko tijelo razine 1 (PT1): Ministarstvo regionalnoga razvoja i fondova Europske unije</h2>
        <h2>Posredničko tijelo razine 2 (PT2): Središnja agencija za financiranje i ugovaranje programa i projekata Europske unije</h2> */}
        <div className="container">
            <div className="box">
                <p>Cilj ovog projekta je održiva fizička, socijalna i gospodarska regeneracija grada Petrinje, s ciljem smanjenja socijalnih nejednakosti, isključenosti i siromaštva. 
                    Nabavom novih roba i/ili usluga, Prijavitelj će povećati svoju: konkurentnost i održivost poslovanja i proizvodne kapacitete. Prijavitelj će otvoriti nova tržišta i povećat će mu se prihod. 
                    Projekt je usmjeren na djelatnike Prijavitelja, kupce i dobavljače kao ciljne skupine projekta, ali i sve građane Republike Hrvatske i to upravo kroz očuvanje postojećih radnih mjesta i otvaranje novih. 
                    Projekt vodi računa o zaštiti okoliša.</p>
            </div>
        </div>
        <div className="container">
            {/* <p>Cilj ovog projekta je održiva fizička, socijalna i gospodarska regeneracija grada Petrinje, s ciljem smanjenja socijalnih nejednakosti, isključenosti i siromaštva. 
                    Nabavom novih roba i/ili usluga, Prijavitelj će povećati svoju: konkurentnost i održivost poslovanja i proizvodne kapacitete. Prijavitelj će otvoriti nova tržišta i povećat će mu se prihod. 
                    Projekt je usmjeren na djelatnike Prijavitelja, kupce i dobavljače kao ciljne skupine projekta, ali i sve građane Republike Hrvatske i to upravo kroz očuvanje postojećih radnih mjesta i otvaranje novih. 
                    Projekt vodi računa o zaštiti okoliša.</p> */}
            <div className="box">
                <h3>Informacije o troškovima</h3>
                <p>Ukupna vrijednost projekta (EUR): 263.997,69</p>
                <p>Ukupni prihvatljivi troškovi (EUR): 209.364,52</p>
                <p>Ukupna bespovratna sredstva (EUR): 177.959,84</p>
            </div>
            {/* <div className="spacer"></div> */}
            <div className="box">
                <h3>Vrijeme provedbe</h3>
                <p>Početak provedbe: 21.04.2022.</p>
                <p>Kraj provedbe: 12.12.2023.</p>
                <p>Trajanje provedbe (mjeseci): 20</p>
            </div>
        </div>
        <EUnoteProject />
        <div className="container">
            <div className="activity-box">
                <h3>Aktivnosti projekta</h3>
                <p>Aktivnost 1. Ulaganje u materijalnu imovinu</p>
                <p>Aktivnost 2. Ulaganje u materijalnu imovinu</p>
                <p>Aktivnost 3: Marketing i promocija proizvoda i usluga</p>
                <p>Aktivnost 4: Edukacije, stručno osposobljavanje i stjecanje novih znanja zaposlenika</p>
                <p>Aktivnost 5: Prijava na Poziv</p>
                <p>Aktivnost 6: Provedba postupka nabave za potrebe projekta</p>
                <p>Aktivnost 7: Promicanje horizontalnih načela</p>
                <p>Aktivnost 8: Upravljanje projektom</p>
                <p>Aktivnost 9: Promidžba i vidljivost</p>
            </div>
        </div>
        <div className="container">
            <div className="activity-box">
                <h3>Sve aktivnosti nabave iz predmetnog projekta</h3>
                <p>1. planiran je postupak nabave</p>
                <p>2. određene su karakteristike roba i/ili usluga koje se planiraju nabavljati u postupku nabave</p>
                <p>3. proveden je postupak nabave</p>
                <p>4. odabran je isporučitelj roba i/ili usluga</p>
                <p>5. predmetna aktivnost je provedena u cijelosti, kako je bilo planirano, sukladno propisanim pravilima i projektnim prijedlogom (pridržavanje vremenskih rokova početka i završetka provedbe aktivnosti)</p>
                <p>6. roba i/ili usluga je od strane odabranog isporučitelja isporučena na vrijeme, do roka određenog u Ugovoru.</p>
                <p>7. zaključen je zapisnik o primopredaji roba i/ili usluga</p>
                <p>8. izdan je račun od strane isporučitelja</p>
                <p>9. račun je plaćen u roku</p>
                <br />
                <p>U provedbi predmetne aktivnosti nije bilo značajnih problema.</p>
                <p>Ostvareni su rezultati koji su bili planirani - nabava roba i/ili usluga.</p>
                <p>Održane su planirane edukacije djelatnika, u količini radnih sati koje je ponudio isporučitelj.</p>
                <p>Nabavljena roba i/ili usluga se koristi u svakodnevnom poslovanju gospodarskog subjekta.</p>
            </div>
        </div>
        <EUnoteProject />
        <div className="container">
            <div className="activity-box">
                <h3>Podatci o projektu</h3>
                <p>Kod projekta: KK.08.2.1.16.0148</p>
                <p>Posredničko tijelo razine 1 (PT1): Ministarstvo regionalnoga razvoja i fondova Europske unije</p>
                <p>Posredničko tijelo razine 2 (PT2): Središnja agencija za financiranje i ugovaranje programa i projekata Europske unije</p>
                <p>Početak provedbe: 21.04.2022.</p>
                <p>Kraj provedbe: 12.12.2023.</p>
                <p>Trajanje provedbe (mjeseci): 20</p>
            </div>
        </div>
        <div className="container">
            <div className="activity-box">
                <h3>Podatci o korisniku</h3>
                <p>Prijavitelj: KABEL-OPTIKA društvo s ograničenom odgovornošću za trgovinu i prijevoz</p>
                <p>Jedinstveni broj prijavitelja: 84074605978</p>
                <p>Adresa: Ulica Ćire Truhelke 15, Zagreb</p>
                <p>E-pošta: kabelopti@gmail.com</p>
                <p>Telefon: +385 98203223 </p>
                <p>Odgovorna osoba: IVAN KREŠIĆ</p>
            </div>
        </div>
        <div className="container">
            <div className="box">
                <h3>Informacije o troškovima</h3>
                <p>Ukupna vrijednost projekta (EUR): 263.997,69</p>
                <p>Ukupni prihvatljivi troškovi (EUR): 209.364,52</p>
                <p>Ukupna bespovratna sredstva (EUR): 177.959,84 (EU sufinanciranje)</p>
            </div>
        </div>
        <EUnoteProject />
        <div className="container">
            <div className="box">
                <p>Prijavitelj, gospodarski subjekt KABEL-OPTIKA društvo s ograničenom odgovornošću za trgovinu i prijevoz; OIB: 84074605978; sa sjedištem na adresi: 
                    Zagreb (Grad Zagreb), Ulica Ćire Truhelke 15 ovim projektnim prijedlogom želi u provedbi projekta provesti niz aktivnosti, kojima bi nabavio nove 
                    robe i/ili usluge kako slijedi:</p>
            </div>
        </div>
        <div className="container">
            <div className="box">
                <h3>AKTIVNOST: 1 i AKTIVNOST 2 . Ulaganje u materijalnu imovinu; u ovoj aktivnosti se nabavlja:</h3>
                <p>- Mini bager s priključcima, 1 kom</p>
                <p>- Tandem valjak, 1 kom</p>
                <p>OPIS: planirana je nabava novih roba i/ili usluga. Ostvarivanjem te nabave Prijavitelj će povećati svoje kapacitete za pružanje usluga, očuvat će se postojeća 
                    radna mjesta, otvorit će se nova radna mjesta, povećat će se prihod Prijavitelja, konkurentnost na postojećem i novom mikro i makro tržištu. Djelatnici Prijavitelja 
                    će steći nova znanja povezana s korištenjem novih roba i/ili usluga koje se nabavljaju. Složeni postupak provedbe svih nabava obavit će vanjski stručnjak, a proračunom 
                    je određena cijena njegovog rada.</p>
            </div>
        </div>
        <div className="container">
            <div className="box">
                <h3>AKTIVNOST: 3. Marketing i promocija proizvoda i usluga; u ovoj aktivnosti se nabavlja:</h3>
                <p>- Troškovi izrade mrežne stranice</p>
                <p>- Troškovi izrade stranice na FACEBOOK-u</p>
                <p>- Troškovi reklamnih majica kratkih rukava</p>
                <p>- Troškovi reklamnih kapa</p>
                <p>OPIS: planirana je nabava novih roba i/ili usluga. Ostvarivanjem te nabave Prijavitelj će povećati svoju vidljivost na mikro i makro tržištu, kao i na 
                    društvenim mrežama. Djelatnici Prijavitelja će steći nova znanja povezana s korištenjem novih roba i/ili usluga koje se nabavljaju. Promidžbeni 
                    materijal dijelit će se poslovnim partnerima. Složeni postupak provedbe svih nabava obavit će vanjski stručnjak, a proračunom je određena cijena 
                    njegovog rada.</p>
            </div>
        </div>
        <div className="container">
            <div className="box">
                <h3>AKTIVNOST: 4. Edukacije, stručno osposobljavanje i stjecanje novih znanja zaposlenika; u ovoj aktivnosti se nabavlja:</h3>
                <p>- Troškovi stjecanja znanja iz područja uvođenja novih proizvodnih procesa</p>
                <p>- Troškovi stjecanja znanja iz područja organizacije poslovanja</p>
                <p>OPIS: planirana je nabava novih roba i/ili usluga. Ostvarivanjem te nabave djelatnici Prijavitelja će steći nova stručna znanja i biti u prilici rada 
                    sa novim proizvodnim procesima i organizacijom poslovanja, što do završetka ovog projekta nije bio slučaj. Složeni postupak provedbe svih nabava obavit 
                    će vanjski stručnjak, a proračunom je određena cijena njegovog rada.</p>
            </div>
        </div>
        <div className="container">
            <div className="box">
                <h3>AKTIVNOST: 5. Prijava na Poziv; u ovoj aktivnosti se nabavlja:</h3>
                <p>- Troškovi usluga pripreme projektnog prijedloga (vanjski stručnjak)</p>
                <p>OPIS: planirana je nabava novih roba i/ili usluga. Ostvarivanjem te nabave članovi projektnog tima će steći nova stručna. Složeni postupak provedbe svih nabava 
                    obavit će vanjski stručnjak, a proračunom je određena cijena njegovog rada.</p>
            </div>
        </div>
        <div className="container">
            <div className="box">
                <h3>AKTIVNOST: 6. Provedba postupka nabave za potrebe projekta; u ovoj aktivnosti se nabavlja:</h3>
                <p>- Troškovi povezani s provedbom postupka nabave za potrebe projekta (vanjski stručnjak)</p>
                <p>OPIS: planirana je nabava novih roba i/ili usluga. Ostvarivanjem te nabave članovi projektnog tima će steći nova stručna. Složeni postupak provedbe svih nabava obavit 
                    će vanjski stručnjak, a proračunom je određena cijena njegovog rada.</p>
            </div>
        </div>
        <div className="container">
            <div className="box">
                <h3>AKTIVNOST: 7. Promicanje horizontalnih načela; u ovoj aktivnosti se nabavlja:</h3>
                <p>- Troškovi vezani uz aktivnosti promicanja horizontalnih načela</p>
                <p>OPIS: planirana je nabava novih roba i/ili usluga. Ostvarivanjem te nabave djelatnici Prijavitelja će steći nova stručna povezana s ranjivim skupinama društva. 
                    Složeni postupak provedbe svih nabava obavit će vanjski stručnjak, a proračunom je određena cijena njegovog rada.</p>
            </div>
        </div>
        <div className="container">
            <div className="box">
                <h3>AKTIVNOST: 8. Upravljanje projektom; u ovoj aktivnosti se nabavlja:</h3>
                <p>- Troškovi usluga za upravljanje projektom (vanjski stručnjak)</p>
                <p>OPIS: planirana je nabava novih roba i/ili usluga. Ostvarivanjem te nabave članovi projektnog tima će steći nova stručna. Složeni postupak provedbe svih nabava obavit 
                    će vanjski stručnjak, a proračunom je određena cijena njegovog rada.</p>
            </div>
        </div>
        <div className="container">
            <div className="box">
                <h3>AKTIVNOST: 9. Promidžba  vidljivost; u ovoj aktivnosti se nabavlja:</h3>
                <p>- Promidžba i vidljivost</p>
                <p>OPIS: planirana je nabava novih roba i/ili usluga. Ostvarivanjem te nabave Prijavitelj će povećati svoju vidljivost na mikro i makro tržištu, kao i na društvenim mrežama.  
                    Djelatnici Prijavitelja će steći nova znanja povezana s korištenjem novih roba i/ili usluga koje se nabavljaju. Promidžbeni materijal dijelit će se poslovnim partnerima. 
                    Složeni postupak provedbe svih nabava obavit će vanjski stručnjak, a proračunom je određena cijena njegovog rada.</p>
            </div>
        </div>
        <div className="container">
            <div className="box">
                <h3>Nova tržišta:</h3>
                <p>MIKRO TRŽIŠTE: grad Petrinja i njegova naselja.</p>
                <p>MAKRO TRŽIŠTE: ŽUPANIJA - III. SISAČKO-MOSLAVAČKA; ŽUPANIJA - IV. KARLOVAČKA; ŽUPANIJA - I. ZAGREBAČKA; ŽUPANIJA - XXI. GRAD ZAGREB.</p>
            </div>
        </div>
        <div className="container">
            <div className="box">
                <p>Prijavitelj će tijekom provedbe projektnog prijedloga i nakon njega, voditi računa o utjecaju projekta na okoliš, i to:</p>
            </div>
        </div>
        <div className="container">
            <div className="box">
                <h3>1. utjecaj na ZRAK:</h3>
                <p>- tijekom provedbe: 2 (veoma mali utjecaj),</p>
                <p>- nakon provedbe: 2 (veoma mali utjecaj);</p>
                <p>OPIS: doći će do povećanja onečišćenja zraka ispušnim plinovima zbog povećanja poslova koje Prijavitelj izvodi. Novim nabavama će 
                    se smanjiti negativan utjecaj projekta na ZRAK.</p>
            </div>
        </div>
        <div className="container">
            <div className="box">
                <h3>2. utjecaj na TLO:</h3>
                <p>- tijekom provedbe: 2 (veoma mali utjecaj),</p>
                <p>- nakon provedbe: 3 (mali utjecaj);</p>
                <p>OPIS: doći će do povećanja onečišćenja tla zbog tehničkih voda koje nastaju tijekom rada i to radi povećanja poslova koje Prijavitelj izvodi. 
                    Novim nabavama će se smanjiti negativan utjecaj projekta na TLO.</p>
            </div>
        </div>
        <div className="container">
            <div className="box">
                <h3>3. utjecaj na VODA:</h3>
                <p>- tijekom provedbe: 2 (veoma mali utjecaj),</p>
                <p>- nakon provedbe: 2 (veoma mali utjecaj);</p>
                <p>OPIS: doći će do gotovo nikakvoga ili izrazito malenoga onečišćenja podzemnih voda koje nastaju tijekom rada i to radi povećanja poslova koje Prijavitelj izvodi. 
                    Novim nabavama će se smanjiti negativan utjecaj projekta na VODA.</p>
            </div>
        </div>
        <div className="container">
            <div className="box">
                <h3>4. utjecaj na KULTURNA BAŠTINA:</h3>
                <p>- tijekom provedbe: 0 (nema utjecaja),</p>
                <p>- nakon provedbe: 0 (nema utjecaja);</p>
                <p>OPIS: ne će doći do bilo kakvog negativnog utjecaja rada i to radi povećanja poslova koje Prijavitelj izvodi. 
                    Novim nabavama će se smanjiti negativan utjecaj projekta na KULTURNA BAŠTINA.</p>
            </div>
        </div>
        <div className="container">
            <div className="box">
                <h3>5. utjecaj na OTPAD:</h3>
                <p>- tijekom provedbe: 2 (veoma mali utjecaj),</p>
                <p>- nakon provedbe: 2 (veoma mali utjecaj);</p>
                <p>OPIS: doći će do povećanja stvaranja otpada koji će nastati tijekom rada i to radi povećanja poslova koje Prijavitelj izvodi. 
                    Svakodnevno će se otpad selektirati i odlagati na za to predviđeno odlagalište. Novim nabavama će se smanjiti negativan utjecaj projekta na OTPAD.</p>
            </div>
        </div>
        <div className="container">
            <div className="box">
                <h3>6. utjecaj na ZDRAVLJE:</h3>
                <p>- tijekom provedbe: 1 (zanemarivi utjecaj),</p>
                <p>- nakon provedbe: 1 (zanemarivi utjecaj);</p>
                <p>OPIS: neće doći do povećanja negativnog utjecaja na zdravlje ljudi tijekom rada i to radi povećanja poslova koje Prijavitelj izvodi. 
                    Novim nabavama će se smanjiti negativan utjecaj projekta na ZDRAVLJE.</p>
            </div>
        </div>
        <EUnoteProject />
    </div>
    );
}

export default ProjectsComponent;