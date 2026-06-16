import { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from '../utils/utils';
import newContext from '../Context/context';

const notificationsList = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: getLatestNotification() },
];

const coursesList = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      logOut: this.logOut,
    };
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    });
  }

  handleChangeEmail(event) {
    const { value } = event.target;
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        email: value,
      },
    }));
  }

  handleChangePassword(event) {
    const { value } = event.target;
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        password: value,
      },
    }));
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (
      'key' in event &&
      event.ctrlKey &&
      event.key.toLowerCase() === 'h'
    ) {
      alert('Logging you out');
      this.logOut();
    }
  }

  render() {
    const { displayDrawer, user, logOut } = this.state;
    const { isLoggedIn, email, password } = user;
    const contextValue = { user, logOut };

    return (
      <newContext.Provider value={contextValue}>
        <div className="app-container flex flex-col min-h-screen p-4 max-[912px]:p-2 max-[520px]:p-0">
          <Notifications
            displayDrawer={displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
            notifications={notificationsList}
          />
          <Header />
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList courses={coursesList} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login
                logIn={this.logIn}
                email={email}
                password={password}
                handleChangeEmail={this.handleChangeEmail}
                handleChangePassword={this.handleChangePassword}
              />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Holberton School News goes here</p>
          </BodySection>
          <Footer />
        </div>
      </newContext.Provider>
    );
  }
}

export default App;
