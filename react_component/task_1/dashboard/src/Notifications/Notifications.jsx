import closeButton from '../assets/close-button.png';
import NotificationItem from './NotificationItem';
import './Notifications.css';

function Notifications({ displayDrawer = false, notifications = [] }) {
  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <>
      <div className="notification-title">Your notifications</div>

      {displayDrawer && (
        <div className="Notifications">
          <button
            type="button"
            aria-label="Close"
            className="Notifications-close"
            onClick={handleClick}
          >
            <img src={closeButton} alt="close" />
          </button>

          {notifications.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <>
              <p>Here is the list of notifications</p>
              <ul className="notification-items">
                {notifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Notifications;
