import holbertonLogo from './assets/holberton-logo.jpg';
import Notifications from './Notifications';
import { getCurrentYear, getFooterCopy } from './utils';
import './App.css';

function App() {
  return (
    <>
      <Notifications />
      <div className="App-header">
        <img src={holbertonLogo} alt="holberton logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>{getFooterCopy(false)}</p>
        <div className="App-form">
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-row">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">OK</button>
        </div>
      </div>
      <div className="App-footer">
        <p>Copyright {getCurrentYear()} - holberton School</p>
      </div>
    </>
  );
}

export default App;
