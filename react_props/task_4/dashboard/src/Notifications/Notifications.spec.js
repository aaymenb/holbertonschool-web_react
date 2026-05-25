import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';

const notificationsList = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: getLatestNotification() },
];

describe('Notifications component', () => {
  test('renders the notifications title', () => {
    render(<Notifications notifications={notificationsList} />);
    expect(
      screen.getByText(/here is the list of notifications/i)
    ).toBeInTheDocument();
  });

  test('renders a close button', () => {
    render(<Notifications notifications={notificationsList} />);
    const button = screen.getByRole('button', { name: /close/i });
    expect(button).toBeInTheDocument();
  });

  test('renders 3 li elements when 3 notifications are passed', () => {
    const { container } = render(
      <Notifications notifications={notificationsList} />
    );
    const items = container.querySelectorAll('li');
    expect(items.length).toBe(3);
  });

  test('renders the appropriate text in each notification item', () => {
    render(<Notifications notifications={notificationsList} />);
    expect(screen.getByText('New course available')).toBeInTheDocument();
    expect(screen.getByText('New resume available')).toBeInTheDocument();
    expect(screen.getByText(/urgent requirement/i)).toBeInTheDocument();
  });

  test('logs "Close button has been clicked" when the close button is clicked', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Notifications notifications={notificationsList} />);
    const button = screen.getByRole('button', { name: /close/i });
    fireEvent.click(button);
    expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');
    consoleSpy.mockRestore();
  });

  test('renders 0 li elements when notifications prop is empty', () => {
    const { container } = render(<Notifications notifications={[]} />);
    expect(container.querySelectorAll('li')).toHaveLength(0);
  });
});
