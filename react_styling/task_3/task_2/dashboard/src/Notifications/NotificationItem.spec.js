import { fireEvent, render } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
  test('renders a li with data-notification-type="default" when type is "default"', () => {
    const { container } = render(
      <NotificationItem type="default" value="New course available" />
    );
    const li = container.querySelector('li');
    expect(li).toBeInTheDocument();
    expect(li).toHaveAttribute('data-notification-type', 'default');
  });

  test('renders a li with data-notification-type="urgent" when type is "urgent"', () => {
    const { container } = render(
      <NotificationItem type="urgent" value="New resume available" />
    );
    const li = container.querySelector('li');
    expect(li).toBeInTheDocument();
    expect(li).toHaveAttribute('data-notification-type', 'urgent');
  });

  test('calls markAsRead when the li element is clicked', () => {
    const markAsRead = jest.fn();
    const { container } = render(
      <NotificationItem
        id={1}
        type="default"
        value="New course available"
        markAsRead={markAsRead}
      />
    );
    fireEvent.click(container.querySelector('li'));
    expect(markAsRead).toHaveBeenCalledTimes(1);
    expect(markAsRead).toHaveBeenCalledWith(1);
  });
});
