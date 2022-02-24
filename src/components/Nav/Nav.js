import {NavStyle} from './styles'
import { Link, useLocation } from 'react-router-dom';
import LogoSimp from '../../assets/LogoSimp'
import IconHome from '../../assets/icons/IconHome'
import IconFavorite from '../../assets/icons/IconFavorite'
import IconMessages from '../../assets/icons/IconMessages'
import IconSearch from '../../assets/icons/IconSearch'
import IconProfile from '../../assets/icons/IconProfile'
import UserCard from '../UserCard/UserCard';
import { useNavigate } from 'react-router-dom'
import { useUserState } from '../../context/UserContext'

export default function Nav(props) {
    const style = {
      display: 'grid'
    }

    let navigate = useNavigate()
    let location = useLocation();

    const { user } = useUserState()

    function handleLogout() {
      if (localStorage.getItem("accessToken")) {
        removeToken().then(() => {
          redirectToLogin()
        })
      }
  
      async function removeToken() {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("user")
      }
  
      function redirectToLogin() {
        navigate("/login")
      }
    }

    return (
      
      <div className="nav__component" style={style}>
        <NavStyle>
          <div className="menu__container">
            <div className="menu--wrapper">
              <div className="header--logo">
                <Link to='/' className="logo--redirect">
                  <LogoSimp />
                </Link>
              </div>
              <nav className="nav__container">
                <Link to='/home' className="nav__item">
                  <div className="item--wrapper">
                    <div className="logo-item">
                      <IconHome /> 
                    </div>
                    <div className="logo-text">
                      <span className="logo-text--value">Home</span>
                    </div>
                  </div>
                </Link>
                <Link to='/favorites' className="nav__item">
                  <div className="item--wrapper">
                    <div className="logo-item">
                      <IconFavorite /> 
                    </div>
                    <div className="logo-text">
                      <span className="logo-text--value">Favorites</span>
                    </div>
                  </div>
                </Link>
                <Link to='/messages' className="nav__item">
                  <div className="item--wrapper">
                    <div className="logo-item">
                      <IconMessages /> 
                    </div>
                    <div className="logo-text">
                      <span className="logo-text--value">Messages</span>
                    </div>
                  </div>
                </Link>
                <Link to='/search' className="nav__item">
                  <div className="item--wrapper">
                    <div className="logo-item">
                      <IconSearch /> 
                    </div>
                    <div className="logo-text">
                      <span className="logo-text--value">Search</span>
                    </div>
                  </div>
                </Link>
                <Link to={`/${user.username}`} className="nav__item">
                  <div className="item--wrapper">
                    <div className="logo-item">
                      <IconProfile /> 
                    </div>
                    <div className="logo-text">
                      <span className="logo-text--value">Profile</span>
                    </div>
                  </div>
                </Link>
                <Link to='/compose/hoot' className="nav__compose" state={{ backgroundLocation: location }}>
                  <div className="item--wrapper">
                    <div className="logo-text">
                      <span className="logo-text--value">Hoot</span>
                    </div>
                  </div>
                </Link>
              </nav>
            </div>
            <UserCard handleClick={handleLogout} username={props.username || ""} img_url={props.img_url} />
          </div>
        </NavStyle>
      </div>
    );
  }