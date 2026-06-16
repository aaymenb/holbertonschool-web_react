import { Component } from 'react';
import WithLogging from '../HOC/WithLogging';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  handleChangeEmail(event) {
    const { value } = event.target;
    const { password } = this.state;

    if (value !== '' && password !== '') {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }

    this.setState({ email: value });
  }

  handleChangePassword(event) {
    const { value } = event.target;
    const { email } = this.state;

    if (email !== '' && value !== '') {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }

    this.setState({ password: value });
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <div className="App-body p-10 min-h-[50vh] border-t-[3px] border-[var(--main-color)] max-[520px]:p-5">
        <p className="text-xl mb-5">Login to access the full dashboard</p>
        <form
          className="App-form flex flex-wrap items-center gap-5 max-[520px]:flex-col max-[520px]:items-stretch max-[520px]:gap-2.5"
          onSubmit={this.handleLoginSubmit}
        >
          <div className="form-row flex items-center gap-2.5 max-[520px]:flex-col max-[520px]:items-start max-[520px]:gap-1">
            <label htmlFor="email" className="text-base cursor-pointer">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChangeEmail}
              className="text-base border border-gray-300 rounded px-2.5 py-1.5 max-[520px]:w-full"
            />
          </div>
          <div className="form-row flex items-center gap-2.5 max-[520px]:flex-col max-[520px]:items-start max-[520px]:gap-1">
            <label htmlFor="password" className="text-base cursor-pointer">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleChangePassword}
              className="text-base border border-gray-300 rounded px-2.5 py-1.5 max-[520px]:w-full"
            />
          </div>
          <button
            type="submit"
            disabled={!enableSubmit}
            className="text-base text-white border-none rounded px-4 py-1.5 cursor-pointer bg-[var(--main-color)] hover:bg-[#b50030] max-[520px]:w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            OK
          </button>
        </form>
      </div>
    );
  }
}

export default WithLogging(Login);
