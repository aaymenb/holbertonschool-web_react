import { getCurrentYear } from '../utils/utils';
import './Footer.css';

function Footer() {
  return (
    <div className="App-footer">
      <p>Copyright {getCurrentYear()} - Holberton School</p>
    </div>
  );
}

export default Footer;
