import {NavStyle} from './styles'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LogoSimp from '../../assets/LogoSimp'
import IconHome from '../../assets/icons/IconHome'
import IconFavorite from '../../assets/icons/IconFavorite'
import IconMessages from '../../assets/icons/IconMessages'
import IconSearch from '../../assets/icons/IconSearch'
import IconProfile from '../../assets/icons/IconProfile'
import IconCompose from '../../assets/icons/IconCompose'
import UserCard from '../UserCard/UserCard';
import { useUserState } from '../../context/UserContext'
import { useState, useEffect, useRef } from 'react';

export default function Nav(props) {
  // const [windowSize, setWindowSize] = useState(window.innerWidth)

  // useEffect(() => {
    

  //   function handleResize() {
  //     setWindowSize(window.innerWidth)
  //   }

  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
    
  // }, [])

    const style = {
      // display: 'grid'
      display: 'flex'
    }

    const ref = useRef(1)
    console.log(ref.current.offsetWidth)

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
      
      <div className="nav__component" ref={ref} style={style}>
        <NavStyle>
          <div className="menu__container">
            <div className="menu--wrapper">
              {props.windowSize.width > 500 &&
              <div className="header--logo">
                <Link to='/' className="logo--redirect">
                  <LogoSimp />
                </Link>
              </div>}
              <nav className="nav__container">
                <Link to='/home' className="nav__item">
                  <div className="item--wrapper">
                    <div className="logo-item">
                      <IconHome /> 
                    </div>
                    {props.windowSize.width > 1280 &&
                    <div className="logo-text">
                      <span className="logo-text--value">Home</span>
                    </div>}
                  </div>
                </Link>
                <Link to='/favorites' className="nav__item">
                  <div className="item--wrapper">
                    <div className="logo-item">
                      <IconFavorite /> 
                    </div>
                    {props.windowSize.width > 1280 &&
                    <div className="logo-text">
                      <span className="logo-text--value">Favorites</span>
                    </div>}
                  </div>
                </Link>
                <Link to='/messages' className="nav__item">
                  <div className="item--wrapper">
                    <div className="logo-item">
                      <IconMessages /> 
                    </div>
                    {props.windowSize.width > 1280 &&
                    <div className="logo-text">
                      <span className="logo-text--value">Messages</span>
                    </div>}
                  </div>
                </Link>
                <Link to='/search' className="nav__item">
                  <div className="item--wrapper">
                    <div className="logo-item">
                      <IconSearch /> 
                    </div>
                    {props.windowSize > 1280 &&
                    <div className="logo-text">
                      <span className="logo-text--value">Search</span>
                    </div>}
                  </div>
                </Link>
                <Link to={`/${user.username}`} className="nav__item">
                  <div className="item--wrapper">
                    <div className="logo-item">
                      <IconProfile /> 
                    </div>
                    {props.windowSize.width > 1280 &&
                    <div className="logo-text">
                      <span className="logo-text--value">Profile</span>
                    </div>}
                  </div>
                </Link>
                <Link to='/compose/hoot' className="nav__compose" state={{ backgroundLocation: location }}>
                  <div className="compose--wrapper">
                    {props.windowSize.width > 1280 ?
                    <div className="compose-text">
                      <span className="compose-text--value">Hoot</span>
                    </div>
                    :
                    <IconCompose />
                    }
                  </div>
                </Link>
              </nav>
            </div>
            {props.windowSize.width > 500 &&
            <UserCard handleClick={handleLogout} username={props.username || ""} img_url={props.img_url} windowSize={props.windowSize.width} navWidth={ref.current.offsetWidth} />}
          </div>
        </NavStyle>
      </div>
    );
  }