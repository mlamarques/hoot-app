import {NotificationStyle} from './styles'

export default function Notification(props) {
    return (
      <NotificationStyle> 
        <div className="notification__component">
          <h3>{props.text}</h3>
        </div>
      </NotificationStyle>
    );
  }