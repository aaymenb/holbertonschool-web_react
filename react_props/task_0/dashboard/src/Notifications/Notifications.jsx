import closeButton from '../assets/close-button.png';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css';

function Notifications() {
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
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
}

export default Notifications;
