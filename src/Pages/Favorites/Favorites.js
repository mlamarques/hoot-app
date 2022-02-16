import { useContext } from 'react'
import {FavoritesStyle} from './styles'
import Nav from '../../components/Nav/Nav'
import { useUserState } from '../../context/UserContext'

export default function Favorites(props) {

  const { user } = useUserState()

  return (
    <div className="favorites-page">
      <Nav username={user.username} img_url={user.img_url} />
      <FavoritesStyle>
      <div className="main__container">
        <div className="main__header">
          <h1 onClick={props.handleLogout} >Favorites</h1>
        </div>
        <div className="feed__container">
          <div className="hoot--individual__container">
            <h2>My favorite</h2>
          </div>
        </div>
      </div>
      </FavoritesStyle>
    </div>
  );
}