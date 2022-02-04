import {UserCardStyle} from './styles'

export default function UserCard(props) {
    return (
      <UserCardStyle> 
        <div className="usercard__component" onClick={props.handleClick}>
          <h3>{props.username}</h3>
        </div>
      </UserCardStyle>
    );
  }