import {MobileMenuStyle} from './styles'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import LogoSimp from '../../assets/LogoSimp'
import IconHome from '../../assets/icons/IconHome'
import IconFavorite from '../../assets/icons/IconFavorite'
import IconMessages from '../../assets/icons/IconMessages'
import IconSearch from '../../assets/icons/IconSearch'
import IconProfile from '../../assets/icons/IconProfile'
import IconCompose from '../../assets/icons/IconCompose'
import UserCard from '../UserCard/UserCard';
import { useUserState } from '../../context/UserContext'
import { useState, useEffect, useRef, createRef } from 'react';
import IconClose from '../../assets/icons/IconClose';
import IconUser from '../../assets/icons/IconUser';

export default function MobileMenu(props) {

  const menuRef = useRef();
  const backgroundRef = useRef();

  const { user } = useUserState()
  let navigate = useNavigate()

  const menuStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    transitionDuration: '250ms',
    zIndex: 100,
  }

  useEffect(() => {
    if (menuRef.current) {
      setTimeout(function () {
        menuRef.current.classList.add('show-menu')
        backgroundRef.current.style.backgroundColor = 'var(--black-shade)'
      }, 250)
    }
  }, [])

  function closeMenuTransition(props) {

    new Promise(
      function(resolve, reject) {
        setTimeout(function () {
          resolve(
            menuRef.current.classList.remove('show-menu'),
            backgroundRef.current.style.backgroundColor = 'transparent'
          )
        }, 250)
      }
    ).then(() => {
      setTimeout(function () {
        props.closeMenu()
      }, 250)
      })
  }

  function handleLogout() {
    if (localStorage.getItem("accessToken")) {
      props.closeMenu()
      
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
    <div
      className="mobile-menu__component"
      ref={backgroundRef}
      style={menuStyle}
      onClick={props.handleClick}
    >
      <MobileMenuStyle>
        <div className={'mobile-menu__container'} ref={menuRef}>
          <div className="menu__header">
            <div className="info--title">
              <div className="text--wrapper">
                <span>Account info</span>
              </div>
            </div>
            <div className="close__container">
              <div
                className="go-back--wrapper"
                onClick={closeMenuTransition}
                tabIndex="0"
              >
                <IconClose />
                <div className="tooltip" role="tooltip">
                  <span>Close</span>
                </div>
              </div>
            </div>
          </div>
          <div className="menu__body">
            <div className="info__container">
              <div className="avatar__container">
                <div className="user--avatar__wrapper" onClick={() => console.log('go to profile')}>
                  <img className="user--avatar" src={user.img_url} alt="img" />
                </div>
              </div>
              <div className="name__container">
                <a  className="name--wrapper" href={user.username}>
                  <div className="nickname__container">
                    <div className="nickname--wraper">
                      <span>{user.username}</span>
                    </div>
                  </div>
                  <div className="address__container">
                    <div className="address--wraper">
                      <span>@{user.username}</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="follow__container">
                <div className="following__container">
                  <a href="/home" className="following--wrapper">
                    <span className="follow-count">{user.following.length}</span>
                      &nbsp; {/* whitespace here to keep the underline continous */}
                    <span className="follow-text">Following</span>
                  </a>
                </div>
                <div className="followers__container">
                    <a href="/home" className="followers--wrapper">
                      <span className="followers-count">{user.followers.length}</span>
                        &nbsp; {/* whitespace here to keep the underline continous */}
                      <span className="followers-text">Followers</span>
                    </a>
                </div>
              </div>
            </div>
            <div className="options__container">
              <a href="/settings/account" className="options-item--link">
                <div className="icon__container">
                  <IconUser />
                </div>
                <div className="text__container">
                  <span>Your account</span>
                </div>
              </a>
            </div>
            <div className="content--separator"></div>
            <div className="options__container" onClick={handleLogout}>
              <div className="logout--wrapper">
                <span>Log out</span>
              </div>
            </div>
          </div>
        </div>
      </MobileMenuStyle>
    </div>
  );
}