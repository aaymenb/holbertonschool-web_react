import { PureComponent } from 'react';

class NotificationItem extends PureComponent {
  render() {
    const { id, type, html, value, markAsRead } = this.props;
    const responsiveClass =
      'max-[912px]:text-xl max-[912px]:py-2.5 max-[912px]:border-b max-[912px]:border-black';
    const colorClass =
      type === 'urgent'
        ? `text-[var(--urgent-notification-item)] ${responsiveClass}`
        : `text-[var(--default-notification-item)] ${responsiveClass}`;

    if (html) {
      return (
        <li
          data-notification-type={type}
          className={colorClass}
          onClick={() => markAsRead(id)}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    }

    return (
      <li
        data-notification-type={type}
        className={colorClass}
        onClick={() => markAsRead(id)}
      >
        {value}
      </li>
    );
  }
}

NotificationItem.defaultProps = {
  id: 0,
  type: 'default',
  html: null,
  value: '',
  markAsRead: () => {},
};

export default NotificationItem;
