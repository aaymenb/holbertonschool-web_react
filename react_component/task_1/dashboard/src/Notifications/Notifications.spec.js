import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';

const notificationsList = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: getLatestNotification() },
];

describe('Notifications component', () => {
  describe('"Your notifications" title is always displayed', () => {
    test('when displayDrawer is false', () => {
      render(<Notifications notifications={notificationsList} />);
      expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
    });

    test('when displayDrawer is true with notifications', () => {
      render(
        <Notifications displayDrawer notifications={notificationsList} />
      );
      expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
    });

    test('when displayDrawer is true with empty notifications', () => {
      render(<Notifications displayDrawer notifications={[]} />);
      expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
    });
  });

  describe('when displayDrawer is false', () => {
    test('does not display the close button', () => {
      render(<Notifications notifications={notificationsList} />);
      expect(
        screen.queryByRole('button', { name: /close/i })
      ).not.toBeInTheDocument();
    });

    test('does not display the "Here is the list of notifications" paragraph', () => {
      render(<Notifications notifications={notificationsList} />);
      expect(
        screen.queryByText(/here is the list of notifications/i)
      ).not.toBeInTheDocument();
    });

    test('does not display any notification items', () => {
      const { container } = render(
        <Notifications notifications={notificationsList} />
      );
      expect(container.querySelectorAll('li')).toHaveLength(0);
    });
  });

  describe('when displayDrawer is true and notifications are not empty', () => {
    test('displays the close button', () => {
      render(
        <Notifications displayDrawer notifications={notificationsList} />
      );
      expect(
        screen.getByRole('button', { name: /close/i })
      ).toBeInTheDocument();
    });

    test('displays the "Here is the list of notifications" paragraph', () => {
      render(
        <Notifications displayDrawer notifications={notificationsList} />
      );
      expect(
        screen.getByText(/here is the list of notifications/i)
      ).toBeInTheDocument();
    });

    test('displays the 3 notification items', () => {
      const { container } = render(
        <Notifications displayDrawer notifications={notificationsList} />
      );
      expect(container.querySelectorAll('li')).toHaveLength(3);
    });

    test('logs "Close button has been clicked" when the close button is clicked', () => {
      const consoleSpy = jest
        .spyOn(console, 'log')
        .mockImplementation(() => {});
      render(
        <Notifications displayDrawer notifications={notificationsList} />
      );
      fireEvent.click(screen.getByRole('button', { name: /close/i }));
      expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');
      consoleSpy.mockRestore();
    });
  });

  describe('when displayDrawer is true and notifications is empty', () => {
    test('displays the "No new notification for now" text', () => {
      render(<Notifications displayDrawer notifications={[]} />);
      expect(
        screen.getByText(/no new notification for now/i)
      ).toBeInTheDocument();
    });

    test('does not display the "Here is the list of notifications" paragraph', () => {
      render(<Notifications displayDrawer notifications={[]} />);
      expect(
        screen.queryByText(/here is the list of notifications/i)
      ).not.toBeInTheDocument();
    });
  });
});
