import {MessagesStyle} from './styles'

export default function Favorites(props) {

  return (
    <div className="messages-page">
      <MessagesStyle>
      <div className="main__container">
        <div className="main__header">
          <h1 onClick={props.handleLogout} >Messages</h1>
        </div>
        <div className="feed__container">
          <div className="hoot--individual__container">
            <h2>Friend 1</h2>
          </div>
        </div>
      </div>
      </MessagesStyle>
    </div>
  );
}