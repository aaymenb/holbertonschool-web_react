import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { getFooterCopy, getCurrentYear } from '../utils/utils';

describe('Footer component', () => {
  test('renders a p element with the copyright text when isIndex is true', () => {
    render(<Footer />);
    const year = getCurrentYear();
    const text = `Copyright ${year} - Holberton School`;
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test('getFooterCopy is available from utils and returns a string', () => {
    expect(typeof getFooterCopy(true)).toBe('string');
  });
});
