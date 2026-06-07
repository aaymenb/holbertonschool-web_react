import { Component } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import WithLogging from './WithLogging';

class MockApp extends Component {
  render() {
    return <h1>Hello from Mock App Component</h1>;
  }
}

describe('WithLogging HOC', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    cleanup();
    consoleSpy.mockRestore();
  });

  test('renders the wrapped component heading', () => {
    const WithLoggingMockApp = WithLogging(MockApp);

    render(<WithLoggingMockApp />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /hello from mock app component/i,
      })
    ).toBeInTheDocument();
  });

  test('logs when the wrapped component is mounted and unmounted', () => {
    const WithLoggingMockApp = WithLogging(MockApp);

    const { unmount } = render(<WithLoggingMockApp />);
    expect(consoleSpy).toHaveBeenCalledWith('Component MockApp is mounted');

    unmount();
    expect(consoleSpy).toHaveBeenCalledWith(
      'Component MockApp is going to unmount'
    );
  });
});
