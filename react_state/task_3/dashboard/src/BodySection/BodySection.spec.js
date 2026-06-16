import { render, screen } from '@testing-library/react';
import BodySection from './BodySection';

describe('BodySection component', () => {
  test('renders a heading with the title prop value', () => {
    render(<BodySection title="test" />);
    expect(
      screen.getByRole('heading', { level: 2, name: /test/i })
    ).toBeInTheDocument();
  });

  test('renders children passed to it', () => {
    render(
      <BodySection title="test">
        <p>first child</p>
        <p>second child</p>
      </BodySection>
    );
    expect(screen.getByText(/first child/i)).toBeInTheDocument();
    expect(screen.getByText(/second child/i)).toBeInTheDocument();
  });
});
