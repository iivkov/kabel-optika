import '../App.css';
import MRRFEU_logo from '../assets/MRRFEU_logo.png';
import EU_logo from '../assets/EU_logo.png';
import ESIF_logo from '../assets/ESIF_logo.png';
import OPKK_logo from '../assets/OPKK_logo.png';

const EUnoteProject = () => {

  return (
    <div className="EU-note">
        <a href="https://razvoj.gov.hr/" target="_blank" rel="noopener noreferrer">
            <div class="image"><img src={MRRFEU_logo} alt="Logotip Ministarstva regionalnog razvoja i fondova Europske unije"/></div>
        </a>
        <a href="https://strukturnifondovi.hr/" target="_blank" rel="noopener noreferrer">
            <div class="image"><img src={ESIF_logo} alt="Logotip Europskih strukturnih i investicijskih fondova" /></div>
        </a>
        <a href="https://opzo-opkk.hr/" target="_blank" rel="noopener noreferrer">
            <div class="image"><img src={OPKK_logo} alt="Logotip Operativnog programa Konkurentnost i kohezija" /></div>
        </a>
        <a href="https://european-union.europa.eu/index_hr" target="_blank" rel="noopener noreferrer">
            <div class="image"><img src={EU_logo} alt="Zastava Europske unije"/></div>
        </a>
        <div class="text">Projekt je sufinancirala Europska unija – „Europski fond za regionalni razvoj“.</div>
    </div>
  )
}

export default EUnoteProject