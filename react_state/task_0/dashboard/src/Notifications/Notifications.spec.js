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
      const handleHideDrawer = jest.fn();
      render(
        <Notifications
          displayDrawer
          notifications={notificationsList}
          handleHideDrawer={handleHideDrawer}
        />
      );
      fireEvent.click(screen.getByRole('button', { name: /close/i }));
      expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');
      consoleSpy.mockRestore();
    });

    test('calls handleDisplayDrawer when "Your notifications" is clicked', () => {
      const handleDisplayDrawer = jest.fn();
      render(
        <Notifications
          notifications={notificationsList}
          handleDisplayDrawer={handleDisplayDrawer}
        />
      );
      fireEvent.click(screen.getByText(/your notifications/i));
      expect(handleDisplayDrawer).toHaveBeenCalled();
    });

    test('calls handleHideDrawer when the close button is clicked', () => {
      const handleHideDrawer = jest.fn();
      render(
        <Notifications
          displayDrawer
          notifications={notificationsList}
          handleHideDrawer={handleHideDrawer}
        />
      );
      fireEvent.click(screen.getByRole('button', { name: /close/i }));
      expect(handleHideDrawer).toHaveBeenCalled();
    });

    test('logs when a notification item is marked as read', () => {
      const consoleSpy = jest
        .spyOn(console, 'log')
        .mockImplementation(() => {});
      const { container } = render(
        <Notifications displayDrawer notifications={notificationsList} />
      );
      fireEvent.click(container.querySelectorAll('li')[1]);
      expect(consoleSpy).toHaveBeenCalledWith(
        'Notification 2 has been marked as read'
      );
      consoleSpy.mockRestore();
    });

    test('does not re-render if the notifications prop length remains the same', () => {
      const nextNotificationsList = [
        { id: 1, type: 'default', value: 'Updated course available' },
        { id: 2, type: 'urgent', value: 'Updated resume available' },
        { id: 3, type: 'urgent', value: 'Updated urgent requirement' },
      ];
      const { rerender } = render(
        <Notifications displayDrawer notifications={notificationsList} />
      );

      rerender(
        <Notifications displayDrawer notifications={nextNotificationsList} />
      );

      expect(screen.getByText(/new course available/i)).toBeInTheDocument();
      expect(
        screen.queryByText(/updated course available/i)
      ).not.toBeInTheDocument();
    });

    test('re-renders when the notifications prop length changes', () => {
      const nextNotificationsList = [
        ...notificationsList,
        { id: 4, type: 'default', value: 'New notification added' },
      ];
      const { rerender } = render(
        <Notifications displayDrawer notifications={notificationsList} />
      );

      rerender(
        <Notifications displayDrawer notifications={nextNotificationsList} />
      );

      expect(screen.getByText(/new notification added/i)).toBeInTheDocument();
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
