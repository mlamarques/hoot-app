import {UserCardMessageStyle} from './styles'
import { Link } from 'react-router-dom';
import IconOptions from '../../assets/icons/IconOptions';

export default function UserCardMessage(props) {

  const usercardStyle = {
    display: 'flex',
    position: 'relative',
    width: '100%',
  };

  const currentOptionStyle = {
    borderRight: "2px solid var(--orange)",
    backgroundColor: "var(--mellow-apricot-shade)"
  }

  return (
    // style={{pointerEvents: isSettingsShown && "none"}}
      <div className="usercard__component"  style={usercardStyle}> 
        <UserCardMessageStyle>
          <div className="usercard-user__container">
            <Link to={`/${props.username}`} className="user--avatar__container">
              <div className="user--avatar__wrapper">
                  <img className="user--avatar" src={props.img_url} alt="robot avatar" />
              </div>
            </Link>
            <div className="content--wrapper">
              <div className="content--header">
                <div className="info--header">
                  <div className="user-info--header">
                    <div className="user-info--wrapper">
                      <div className="name-user--wrapper">
                        <span className="name-user--value">{props?.username}</span>
                      </div>
                      <div className="username--wrapper">
                        <span className="username--value">@{props?.username}</span>
                      </div>
                    </div>
                    <div className="content-message">
                      <div className="last-message__container">
                        <span className="last-message__value">this was my last message and is cut off at some point</span>
                      </div>
                    </div>
                  </div>
                  <div className="message-date"> {/*  change div to link later */}
                    <time className="date-value">{/*  the main use of this tag is for helping search engines */}
                      {props.time}
                    </time>
                  </div>
                  <div className="options-header">
                    <div className="options-background"></div> 
                      <div className="icon--option__container">
                          <IconOptions />
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>          
        </UserCardMessageStyle>
      </div>
  );
}