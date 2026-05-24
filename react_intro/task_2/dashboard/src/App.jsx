import holbertonLogo from './assets/holberton-logo.jpg';
import './App.css';

function App() {
  return (
    <>
      <div className="App-header">
        <img src={holbertonLogo} alt="holberton logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
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
        <p>Copyright {new Date().getFullYear()} - holberton School</p>
      </div>
    </>
  );
}

export default App;
