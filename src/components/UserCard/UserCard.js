import {UserCardStyle} from './styles'

export default function UserCard(props) {
    return (
      
        <div className="usercard__component" onClick={props.handleClick}>
          <UserCardStyle> 
            <h3>{props.username}</h3>
          </UserCardStyle>
        </div>
      
    );
  }