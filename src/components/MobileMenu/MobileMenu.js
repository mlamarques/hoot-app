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

export default function MobileMenu(props) {

  const menuRef = useRef();
  const backgroundRef = useRef();

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

  function closeMenuTransition() {

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

  return (
    <div className="mobile-menu__component" ref={backgroundRef} style={menuStyle} onClick={props.handleClick}>
      <MobileMenuStyle>
        <div className={"mobile-menu__container"} ref={menuRef}>
          <div className="menu__header">
            <div className="go-back--wrapper" onClick={closeMenuTransition} tabIndex="0">
              <IconClose />
              <div className="tooltip" role="tooltip">
                <span >Close</span>
              </div>
            </div>
          </div>
        </div>
      </MobileMenuStyle>
    </div>
  );
}