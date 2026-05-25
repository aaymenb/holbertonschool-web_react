import holbertonLogo from '../assets/holberton-logo.jpg';
import './Header.css';

const logoSrc =
  typeof holbertonLogo === 'string' ? holbertonLogo : 'holberton-logo.jpg';

function Header() {
  return (
    <div className="App-header">
      <img src={logoSrc} alt="holberton logo" />
      <h1>School dashboard</h1>
    </div>
  );
}

export default Header;
