import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

function logInUser() {
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { name: 'email', value: 'test@holberton.com' },
  });
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { name: 'password', value: 'password123' },
  });
  fireEvent.click(screen.getByRole('button', { name: /^ok$/i }));
}

describe('App component', () => {
  test('always renders the h1 "School dashboard" from the Header', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: /school dashboard/i })
    ).toBeInTheDocument();
  });

  test('always renders the footer with the copyright text', () => {
    render(<App />);
    expect(
      screen.getByText(/copyright \d{4} - holberton school/i)
    ).toBeInTheDocument();
  });

  describe('when user is not logged in (default state)', () => {
    test('renders the Login form (email + password inputs and submit button)', () => {
      const { container } = render(<App />);
      expect(container.querySelectorAll('input')).toHaveLength(2);
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /^ok$/i })
      ).toBeInTheDocument();
    });

    test('does not render the CourseList table', () => {
      const { container } = render(<App />);
      expect(container.querySelector('#CourseList')).not.toBeInTheDocument();
    });

    test('does not render the logout section in the Header', () => {
      const { container } = render(<App />);
      expect(container.querySelector('#logoutSection')).not.toBeInTheDocument();
    });
  });

  describe('when user is logged in', () => {
    test('renders the CourseList table after successful login', () => {
      const { container } = render(<App />);
      logInUser();
      expect(container.querySelector('#CourseList')).toBeInTheDocument();
    });

    test('does not render the Login form after successful login', () => {
      render(<App />);
      logInUser();
      expect(screen.queryByLabelText(/email/i)).not.toBeInTheDocument();
      expect(screen.queryByLabelText(/password/i)).not.toBeInTheDocument();
    });

    test('renders the logout section in the Header after successful login', () => {
      const { container } = render(<App />);
      logInUser();
      expect(container.querySelector('#logoutSection')).toBeInTheDocument();
      expect(screen.getByText(/welcome test@holberton.com/i)).toBeInTheDocument();
    });
  });

  describe('logout from the Header', () => {
    test('returns to the Login form when the logout link is clicked', () => {
      render(<App />);
      logInUser();

      expect(screen.queryByLabelText(/email/i)).not.toBeInTheDocument();

      fireEvent.click(screen.getByRole('link', { name: /logout/i }));

      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.queryByRole('heading', { name: /course list/i })).not.toBeInTheDocument();
    });
  });

  test('renders the news section by default', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /news from the school/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/holberton school news goes here/i)
    ).toBeInTheDocument();
  });

  describe('keyboard logout shortcut', () => {
    let alertSpy;

    beforeEach(() => {
      alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    });

    afterEach(() => {
      alertSpy.mockRestore();
    });

    test('logs out when control and h keys are pressed', () => {
      render(<App />);
      logInUser();

      expect(screen.queryByLabelText(/email/i)).not.toBeInTheDocument();

      fireEvent.keyDown(window, { key: 'h', ctrlKey: true });

      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    });

    test('calls alert with "Logging you out" when control and h keys are pressed', () => {
      render(<App />);

      fireEvent.keyDown(window, { key: 'h', ctrlKey: true });

      expect(alertSpy).toHaveBeenCalledWith('Logging you out');
    });
  });
});
