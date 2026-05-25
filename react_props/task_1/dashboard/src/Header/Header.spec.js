import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  test('renders the Holberton logo', () => {
    const { container } = render(<Header />);
    const logo = container.querySelector('img');
    expect(logo).toBeInTheDocument();
    expect(logo.tagName).toBe('IMG');
    expect(screen.getByAltText(/holberton logo/i)).toBe(logo);
    expect(logo.getAttribute('src')).toContain('holberton-logo');
  });

  test('renders an h1 heading with the text "School dashboard"', () => {
    const { container } = render(<Header />);
    const title = container.querySelector('h1');
    const heading = screen.getByRole('heading', {
      level: 1,
      name: 'School dashboard',
    });
    expect(heading).toBeInTheDocument();
    expect(title).toBe(heading);
    expect(heading.tagName).toBe('H1');
    expect(heading).toHaveTextContent('School dashboard');
  });
});
