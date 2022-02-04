import {NavStyle} from './styles'
import { Link } from 'react-router-dom';
import LogoSimp from '../../assets/LogoSimp'
import IconHome from '../../assets/icons/IconHome'
import IconFavorite from '../../assets/icons/IconFavorite'
import IconMessages from '../../assets/icons/IconMessages'
import IconSearch from '../../assets/icons/IconSearch'
import UserCard from '../UserCard/UserCard';

export default function Nav(props) {
    const style = {
      display: 'grid'
    }

    return (
      
      <div className="nav__component" style={style}>
        <NavStyle>
          <div className="menu__container">
            <div className="header--logo">
              <a className="logo--redirect" href="">
                <LogoSimp />
              </a>
            </div>
            <nav className="nav__container">
              <Link to='/' className="nav__item">
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
              <Link to='/' className="nav__item">
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
            </nav>
            <UserCard handleClick={props.handleClick} username={props.username || "player"} />
          </div>
        </NavStyle>
      </div>
    );
  }