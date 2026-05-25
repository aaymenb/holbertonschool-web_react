import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders h1 with the text School dashboard', () => {
    render(<App />);
    const heading = screen.getByRole('heading', {
      level: 1,
      name: /school dashboard/i,
    });
    expect(heading).toBeInTheDocument();
  });

  test('renders the body and footer paragraphs with the expected text', () => {
    render(<App />);
    expect(
      screen.getByText(/login to access the full dashboard/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/copyright \d{4} - holberton school/i)
    ).toBeInTheDocument();
  });

  test('renders an img element with the alt text holberton logo', () => {
    render(<App />);
    const logo = screen.getByAltText(/holberton logo/i);
    expect(logo).toBeInTheDocument();
    expect(logo.tagName).toBe('IMG');
  });

  test('renders 2 input elements (email and password)', () => {
    const { container } = render(<App />);
    const inputs = container.querySelectorAll('input');
    expect(inputs.length).toBe(2);
  });

  test('renders 2 label elements with the text Email and Password', () => {
    render(<App />);
    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/password/i)).toBeInTheDocument();
  });

  test('renders a button with the text OK', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /^ok$/i });
    expect(button).toBeInTheDocument();
  });
});
