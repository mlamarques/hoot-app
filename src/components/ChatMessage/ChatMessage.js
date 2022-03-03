import {ChatMessageStyle} from './styles'
import { Link } from 'react-router-dom';
import IconOptions from '../../assets/icons/IconOptions';

export default function UserCardMessage(props) {

  const usercardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: '20px'
  }

  const otherUserStyle = {
    
  }

  const userStyle = {
    borderBottomRightRadius: '0px'
  }

  return (
    <div className="chat-message__component"  style={usercardStyle} > 
      <ChatMessageStyle>
        <div className="main__container" style={props.otherUser ? { } : {}}>
          <div className="message__container" style={props.otherUser ? otherUserStyle : userStyle}>
            <div className="message-value">
              <span>{props.message}</span>
            </div>
          </div>
          {props.otherUser && 
            <div className="avatar__container">
              <div className="avatar--wrapper">
                <img src={props.img_url} alt="avatar img" />
              </div>
            </div>
          }
        </div> 
        <div className="date__container">
          <div className="date--wrapper">
            <span>{props.date}</span>
          </div>
        </div>            
      </ChatMessageStyle>
    </div>
  );
}