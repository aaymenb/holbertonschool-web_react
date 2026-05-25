import { render, screen } from '@testing-library/react';
import Header from './Header';

test('should contain an img element with alt holberton logo, and an h1 with text School dashboard', () => {
  render(<Header />);

  const headingElement = screen.getByRole('heading', { name: /school dashboard/i });
  const imgElement = screen.getByAltText(/holberton logo/i);

  expect(headingElement).toBeInTheDocument();
  expect(imgElement).toBeInTheDocument();
});
