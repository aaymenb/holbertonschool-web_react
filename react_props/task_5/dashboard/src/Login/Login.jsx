import { getFooterCopy } from '../utils/utils';
import './Login.css';

function Login() {
  return (
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
  );
}

export default Login;
