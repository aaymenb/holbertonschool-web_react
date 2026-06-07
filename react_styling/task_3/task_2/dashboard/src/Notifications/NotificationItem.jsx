import { PureComponent } from 'react';

class NotificationItem extends PureComponent {
  render() {
    const { id, type, html, value, markAsRead } = this.props;
    const colorClass =
      type === 'urgent'
        ? 'text-[var(--urgent-notification-item)]'
        : 'text-[var(--default-notification-item)]';

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
