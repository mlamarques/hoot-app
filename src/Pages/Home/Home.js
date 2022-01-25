import {HomeStyle} from './styles'
import LogoSimp from '../../assets/LogoSimp'
import IconHome from '../../assets/icons/IconHome'
import IconFavorite from '../../assets/icons/IconFavorite'
import IconMessages from '../../assets/icons/IconMessages'
import IconSearch from '../../assets/icons/IconSearch'

export default function Home(props) {
    return (
      <HomeStyle>
        <div className="home-page">
          {/* -------------------------- Nav -------------------------- */}
          <div className="menu__container">
            <div className="header--logo">
              <a className="logo--redirect" href="">
                <LogoSimp />
              </a>
            </div>
            <nav className="nav__container">
              <a className="nav__item" href="#">
                <div className="item--wrapper">
                  <div className="logo-item">
                    <IconHome /> 
                  </div>
                  <div className="logo-text">
                    <span className="logo-text--value">Home</span>
                  </div>
                </div>
              </a>
              <a className="nav__item" href="#">
                <div className="item--wrapper">
                  <div className="logo-item">
                    <IconFavorite /> 
                  </div>
                  <div className="logo-text">
                    <span className="logo-text--value">Favorites</span>
                  </div>
                </div>
              </a>
              <a className="nav__item" href="#">
                <div className="item--wrapper">
                  <div className="logo-item">
                    <IconMessages /> 
                  </div>
                  <div className="logo-text">
                    <span className="logo-text--value">Messages</span>
                  </div>
                </div>
              </a>
              <a className="nav__item" href="#">
                <div className="item--wrapper">
                  <div className="logo-item">
                    <IconSearch /> 
                  </div>
                  <div className="logo-text">
                    <span className="logo-text--value">Search</span>
                  </div>
                </div>
              </a>
            </nav>
          </div>
          {/* -------------------------- Main -------------------------- */}
          <div className="main__container">
            <div className="main__header">
              <h1 onClick={props.handleLogout} >Home</h1>
            </div>
            <div className="feed__container">
              <div className="hoot--individual__container"></div>
              <div className="hoot--individual__container"></div>
              <div className="hoot--individual__container"></div>
            </div>
          </div>
          {/* -------------------------- Alt -------------------------- */}
          <div className="alternative__container">
          </div>
        </div>
      </HomeStyle>
    );
  }