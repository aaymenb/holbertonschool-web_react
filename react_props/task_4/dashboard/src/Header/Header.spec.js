import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  test('renders the Holberton logo image', () => {
    render(<Header />);
    const logo = screen.getByAltText(/holberton logo/i);
    expect(logo).toBeInTheDocument();
    expect(logo.tagName).toBe('IMG');
  });

  test('renders the h1 heading with the text "School dashboard"', () => {
    render(<Header />);
    const heading = screen.getByRole('heading', {
      level: 1,
      name: /school dashboard/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
