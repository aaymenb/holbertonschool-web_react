import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

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

  describe('when isLoggedIn is false (default)', () => {
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
  });

  describe('when isLoggedIn is true', () => {
    test('renders the CourseList table', () => {
      const { container } = render(<App isLoggedIn />);
      expect(container.querySelector('#CourseList')).toBeInTheDocument();
    });

    test('does not render the Login form', () => {
      render(<App isLoggedIn />);
      expect(screen.queryByLabelText(/email/i)).not.toBeInTheDocument();
      expect(screen.queryByLabelText(/password/i)).not.toBeInTheDocument();
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

    test('calls logOut once when control and h keys are pressed', () => {
      const logOut = jest.fn();
      render(<App logOut={logOut} />);

      fireEvent.keyDown(window, { key: 'h', ctrlKey: true });

      expect(logOut).toHaveBeenCalledTimes(1);
    });

    test('calls alert with "Logging you out" when control and h keys are pressed', () => {
      render(<App />);

      fireEvent.keyDown(window, { key: 'h', ctrlKey: true });

      expect(alertSpy).toHaveBeenCalledWith('Logging you out');
    });
  });
});
