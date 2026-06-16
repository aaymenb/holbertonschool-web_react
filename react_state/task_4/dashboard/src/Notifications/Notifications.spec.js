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
      const displayDrawerSpy = jest.spyOn(
        Notifications.prototype,
        'handleDisplayDrawer'
      );
      render(
        <Notifications
          notifications={notificationsList}
          handleDisplayDrawer={handleDisplayDrawer}
        />
      );
      fireEvent.click(screen.getByText(/your notifications/i));
      expect(displayDrawerSpy).toHaveBeenCalled();
      expect(handleDisplayDrawer).toHaveBeenCalled();
      displayDrawerSpy.mockRestore();
    });

    test('calls handleHideDrawer when the close button is clicked', () => {
      const handleHideDrawer = jest.fn();
      const hideDrawerSpy = jest.spyOn(
        Notifications.prototype,
        'handleHideDrawer'
      );
      render(
        <Notifications
          displayDrawer
          notifications={notificationsList}
          handleHideDrawer={handleHideDrawer}
        />
      );
      fireEvent.click(screen.getByRole('button', { name: /close/i }));
      expect(hideDrawerSpy).toHaveBeenCalled();
      expect(handleHideDrawer).toHaveBeenCalled();
      hideDrawerSpy.mockRestore();
    });

    test('calls markNotificationAsRead when a notification item is clicked', () => {
      const markNotificationAsRead = jest.fn();
      const { container } = render(
        <Notifications
          displayDrawer
          notifications={notificationsList}
          markNotificationAsRead={markNotificationAsRead}
        />
      );
      fireEvent.click(container.querySelectorAll('li')[1]);
      expect(markNotificationAsRead).toHaveBeenCalledWith(2);
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
