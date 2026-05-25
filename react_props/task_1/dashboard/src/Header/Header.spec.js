import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  it('renders the Holberton logo', () => {
    const { container } = render(<Header />);
    const img = container.querySelector('img');
    expect(img).toBeInTheDocument();
    expect(screen.getByAltText(/holberton logo/i)).toBeInTheDocument();
  });

  it('renders a heading element with the text School dashboard', () => {
    render(<Header />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('School dashboard');
  });
});
