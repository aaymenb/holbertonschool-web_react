import { getCurrentYear } from '../utils/utils';
import './Footer.css';

function Footer() {
  return (
    <div className="App-footer">
      <p>Copyright {getCurrentYear()} - holberton School</p>
    </div>
  );
}

export default Footer;
