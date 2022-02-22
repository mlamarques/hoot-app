import {UserCardStyle} from './styles'
import { Link } from 'react-router-dom';

export default function UserCardSearch(props) {

  const usercardStyle = {
    display: 'flex',
    position: 'relative',
    width: '100%',
  };

  return (
    // style={{pointerEvents: isSettingsShown && "none"}}
      <div className="usercard__component"  style={usercardStyle}> 
        <UserCardStyle>
          <Link to={`/${props.username}`} className="usercard--wrapper">
              <div className="usercard-user__container">
                <div className="user--avatar__container">
                  <div className="user--avatar__wrapper">
                      <img className="user--avatar" src={props.img_url} alt="robot avatar" />
                  </div>
                </div>
                <div className="user--info__container">
                  <div className="user--info--wrapper">
                    <span className="user--name">{props.username}</span>
                    <span className="user--username">@{props.username}</span>
                  </div>
                </div> 
              </div>
              <div className="usercard-user--info">
                <div className="follow__container">
                  {props.followValue || 'Follow'}
                </div>
              </div>
          </Link>
        </UserCardStyle>
      </div>
  );
}