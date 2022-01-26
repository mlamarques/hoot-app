import {FavoritesStyle} from './styles'

export default function Favorites(props) {
    return (
      <FavoritesStyle>
        <div className="favorites-page">
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
        </div>
      </FavoritesStyle>
    );
  }