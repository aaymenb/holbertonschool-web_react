import { Component } from 'react';
import closeButton from '../assets/close-button.png';
import NotificationItem from './NotificationItem';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
  }

  handleClick() {
    console.log('Close button has been clicked');
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.notifications.length !== this.props.notifications.length;
  }

  render() {
    const { displayDrawer, notifications } = this.props;

    return (
      <>
        <div className="notification-title text-right font-bold cursor-pointer mt-5 mr-5 mb-2">
          Your Notifications
        </div>

        {displayDrawer && (
          <div className="Notifications relative w-1/4 ml-auto mr-5 mb-5 border border-dashed border-[var(--main-color)] py-[15px] pr-10 pl-5">
            <button
              type="button"
              aria-label="Close"
              className="Notifications-close absolute top-2 right-2 bg-transparent border-none cursor-pointer p-0"
              onClick={this.handleClick}
            >
              <img src={closeButton} alt="close" className="w-[14px] h-[14px] block" />
            </button>

            {notifications.length === 0 ? (
              <p className="font-bold m-0">No new notification for now</p>
            ) : (
              <>
                <p className="font-bold mb-2.5">Here is the list of notifications</p>
                <ul className="notification-items list-disc list-inside p-1.5">
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
};

export default Notifications;
