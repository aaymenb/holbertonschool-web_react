function NotificationItem({ type = 'default', html, value }) {
  const color = type === 'urgent' ? '#e1003c' : '#002b56';
  const style = { color };

  if (html) {
    return (
      <li
        data-notification-type={type}
        style={style}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <li data-notification-type={type} style={style}>
      {value}
    </li>
  );
}

export default NotificationItem;
