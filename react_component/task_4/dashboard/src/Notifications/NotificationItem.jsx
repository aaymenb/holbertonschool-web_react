import { Component } from 'react';

class NotificationItem extends Component {
  render() {
    const { id, type, html, value, markAsRead } = this.props;
    const color = type === 'urgent' ? '#e1003c' : '#002b56';
    const style = { color };

    if (html) {
      return (
        <li
          data-notification-type={type}
          style={style}
          onClick={() => markAsRead(id)}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    }

    return (
      <li
        data-notification-type={type}
        style={style}
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
