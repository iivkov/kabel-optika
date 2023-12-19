import '../App.css';
import EU_logo from '../assets/EU_logo.png';
import ESIF_logo from '../assets/ESIF_logo.png';
import OPKK_logo from '../assets/OPKK_logo.png';

const EUnoteSite = () => {

  return (
    <div className="EU-note">
        <a href="https://european-union.europa.eu/index_hr" target="_blank" rel="noopener noreferrer">
            <div class="image"><img src={EU_logo} alt="Zastava Europske unije"/></div>
        </a>
        <a href="https://strukturnifondovi.hr/" target="_blank" rel="noopener noreferrer">
            <div class="image"><img src={ESIF_logo} alt="Logotip Europskih strukturnih i investicijskih fondova" /></div>
        </a>
        <a href="https://opzo-opkk.hr/" target="_blank" rel="noopener noreferrer">
            <div class="image"><img src={OPKK_logo} alt="Logotip Operativnog programa Konkurentnost i kohezija" /></div>
        </a>
        <div class="text">Izrada internetske stranice sufinancirana je sredstvima tehničke pomoći Operativnog programa „Konkurentnost i kohezija“ iz Europskog fonda za regionalni razvoj.</div>
    </div>
  )
}

export default EUnoteSite