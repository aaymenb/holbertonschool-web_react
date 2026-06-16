import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header';
import newContext from '../Context/context';

const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

function renderHeader(contextValue) {
  return render(
    <newContext.Provider value={contextValue}>
      <Header />
    </newContext.Provider>
  );
}

test('should contain an img element with alt holberton logo, and an h1 with text School dashboard', () => {
  renderHeader({ user: defaultUser, logOut: () => {} });

  const headingElement = screen.getByRole('heading', {
    name: /school dashboard/i,
  });
  const imgElement = screen.getByAltText(/holberton logo/i);

  expect(headingElement).toBeInTheDocument();
  expect(imgElement).toBeInTheDocument();
});

test('does not render logoutSection when using the default context value', () => {
  const { container } = renderHeader({ user: defaultUser, logOut: () => {} });

  expect(container.querySelector('#logoutSection')).not.toBeInTheDocument();
});

test('renders logoutSection when user is logged in with email and password set', () => {
  const user = {
    email: 'test@holberton.com',
    password: 'password123',
    isLoggedIn: true,
  };

  renderHeader({ user, logOut: () => {} });

  expect(screen.getByText(/welcome test@holberton.com/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /logout/i })).toBeInTheDocument();
});

test('calls logOut when the logout link is clicked', () => {
  const user = {
    email: 'test@holberton.com',
    password: 'password123',
    isLoggedIn: true,
  };
  const logOut = jest.fn();

  renderHeader({ user, logOut });

  fireEvent.click(screen.getByRole('link', { name: /logout/i }));

  expect(logOut).toHaveBeenCalledTimes(1);
});
