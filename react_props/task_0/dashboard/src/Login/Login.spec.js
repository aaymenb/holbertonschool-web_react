import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login component', () => {
  test('renders without crashing', () => {
    render(<Login />);
    expect(screen.getByRole('button', { name: /^ok$/i })).toBeInTheDocument();
  });
});
