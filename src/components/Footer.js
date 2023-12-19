import '../App.css';
import { ReactComponent as FacebookLogo } from '../assets/facebook_logo.svg';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
  <div className="footer">
    <div className='copyright'>
      <p className="p-footer">
        <a href="https://www.facebook.com/malekinusicdoo" className="fb-icon" target="_blank" rel="noopener noreferrer">
          <FacebookLogo />
        </a>
      </p>
      <p className="p-footer">&copy; {year} KABEL-OPTIKA d.o.o.</p>
      <p className="p-footer">+385 (0)1 366 5055 | info@kabel-optika.hr</p>
      <p className="p-footer">Sadržaj internetske stranice isključiva je odgovornost tvrtke KABEL-OPTIKA d.o.o.</p>
    </div>
  </div>
  )
}

export default Footer