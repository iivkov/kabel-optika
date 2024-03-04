import '../App.css';
import EU_logo from '../assets/icons/EU_logo.png';
import ESIF_logo from '../assets/icons/ESIF_logo.png';
import OPKK_logo from '../assets/icons/OPKK_logo.png';

const EUnoteSite = () => {

  return (
    <div className="EU-note">
        <a href="https://european-union.europa.eu/index_hr" target="_blank" rel="noopener noreferrer">
            <div className="image"><img decoding="async" src={EU_logo} alt="Zastava Europske unije"/></div>
        </a>
        <a href="https://strukturnifondovi.hr/" target="_blank" rel="noopener noreferrer">
            <div className="image"><img decoding="async" src={ESIF_logo} alt="Logotip Europskih strukturnih i investicijskih fondova" /></div>
        </a>
        <a href="https://opzo-opkk.hr/" target="_blank" rel="noopener noreferrer">
            <div className="image"><img decoding="async" src={OPKK_logo} alt="Logotip Operativnog programa Konkurentnost i kohezija" /></div>
        </a>
        <div className="text">Projekt i izrada internetske stranice i Facebook stranice sufinancirani su sredstvima Europske unije iz Europskog fonda za regionalni razvoj.</div>
    </div>
  )
}

export default EUnoteSite