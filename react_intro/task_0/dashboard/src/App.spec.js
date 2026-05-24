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
});
