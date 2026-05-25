import { render, screen } from '@testing-library/react';
import Header from './Header.jsx';

describe('Header component', () => {
  test('renders the Holberton logo', () => {
    const { container } = render(<Header />);
    const logos = container.querySelectorAll('img');
    const logo = container.querySelector('img');

    expect(logos).toHaveLength(1);
    expect(logo).toBeInTheDocument();
    expect(logo.tagName).toBe('IMG');
    expect(screen.getByAltText(/holberton logo/i)).toBe(logo);
    expect(logo.getAttribute('src')).toBe('holberton-logo.jpg');
  });

  test('renders an h1 heading with the text "School dashboard"', () => {
    const { container } = render(<Header />);
    const headings = container.querySelectorAll('h1');
    const title = container.querySelector('h1');
    const heading = screen.getByRole('heading', {
      level: 1,
      name: 'School dashboard',
    });

    expect(headings).toHaveLength(1);
    expect(heading).toBeInTheDocument();
    expect(title).toBe(heading);
    expect(heading.tagName).toBe('H1');
    expect(heading.textContent).toBe('School dashboard');
    expect(heading).toHaveTextContent('School dashboard');
  });
});
