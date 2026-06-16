import { Component } from 'react';
import closeButton from '../assets/close-button.png';
import NotificationItem from './NotificationItem';
import './Notifications.css';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
  }

  handleClick() {
    console.log('Close button has been clicked');
    this.props.handleHideDrawer();
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.notifications.length !== this.props.notifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  render() {
    const { displayDrawer, notifications } = this.props;

    return (
      <>
        <div
          className="notification-title"
          onClick={this.props.handleDisplayDrawer}
        >
          Your notifications
        </div>

        {displayDrawer && (
          <div className="Notifications">
            <button
              type="button"
              aria-label="Close"
              className="Notifications-close"
              onClick={this.handleClick}
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
                      id={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={this.markAsRead}
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
}

Notifications.defaultProps = {
  displayDrawer: false,
  notifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;
