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

  const otherCardStyle = {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    paddingBottom: '20px'
  }

  const otherUserStyle = {
    borderBottomLeftRadius: '0px',
    backgroundColor: 'var(--orange)'
  }

  const userStyle = {
    borderBottomRightRadius: '0px'
  }
  
  return (
    <div className="chat-message__component"  style={props.otherUser ? otherCardStyle : usercardStyle} > 
      <ChatMessageStyle style={props.otherUser ? {alignItems: 'flex-start'} : {alignItems: 'flex-end'}} >
        <div className="main__container" style={props.otherUser ? { justifyContent: 'flex-start' } : {justifyContent: 'flex-end'}}>
          {props.otherUser && 
            <div className="avatar__container">
              <div className="avatar--wrapper">
                <img src={props.img_url} alt="avatar img" />
              </div>
            </div>
          }
          <div className="message__container" style={props.otherUser ? otherUserStyle : userStyle}>
            <div className="message-value">
              <span>{props.message}</span>
            </div>
          </div>
        </div> 
        <div className="date__container" style={props.otherUser ? {justifyContent: 'flex-start'} : {justifyContent: 'flex-end'}} > 
          <div className="date--wrapper">
            <span>{props.date}</span>
          </div>
        </div>            
      </ChatMessageStyle>
    </div>
  );
}