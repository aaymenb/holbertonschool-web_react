import closeButton from '../assets/close-button.png';
import NotificationItem from './NotificationItem';
import './Notifications.css';

function Notifications({ notifications = [] }) {
  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <button
        type="button"
        aria-label="Close"
        className="Notifications-close"
        onClick={handleClick}
      >
        <img src={closeButton} alt="close" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            type={notification.type}
            value={notification.value}
            html={notification.html}
          />
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
