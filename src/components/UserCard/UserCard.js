import { useState } from 'react';
import useComponentVisible from '../../hooks/showComponent';
import {UserCardStyle} from './styles'
import { Link } from 'react-router-dom';
import IconOptions from '../../assets/icons/IconOptions'

export default function UserCard(props) {
  const [isComponentVisible, setIsComponentVisible] = useState(false)
  
  function handleClick(event) {
    setIsComponentVisible(prev => !prev)
  }

  const usercardStyle = {
    display: 'flex',
    position: 'relative',
    width: '100%',
  };

  const optionsFullWidth = {
    left: (props.navWidth - 262),
  }

  const optionsSmallWidth = {
    left: (props.navWidth - 85),
  }

  return (
    // style={{pointerEvents: isSettingsShown && "none"}}
      <div className="usercard__component"  style={usercardStyle}> 
        <UserCardStyle>
          <div className="usercard--wrapper" onClick={handleClick}>
            <div className="user--avatar__container">
              <div className="user--avatar__wrapper">
                  <img className="user--avatar" src={props.img_url} alt="robot avatar" />
              </div>
            </div>
            {props.windowSize > 1280 &&
              <>
              <div className="user--info__container">
                <div className="user--info--wrapper">
                  <span className="user--name">{props.username}</span>
                  <span className="user--username">@{props.username}</span>
                </div>
              </div>
              <div className="icon--option__container">
                  <IconOptions />
              </div>
                
              </>
            }
            
          </div> 
          {isComponentVisible && 
                <div className="usercard__options" onClick={(e) => handleClick(e)} style={{ animation: `${isComponentVisible ? "fadeIn" : "fadeOut"} 0.5s ease-in-out` }} >
                  <div className="options_wrapper" onClick={(event) => event.stopPropagation()}style={props.navWidth > 284 ? optionsFullWidth : optionsSmallWidth}>
                    <div className="a">
                      <div className="ainside">
                        <span>{}</span>
                      </div>
                        {/* link to logout route */}
                        <div className="binside" onClick={() => props.handleClick()} >
                          <span >Log out</span>
                      </div>
                    </div>
                    <div className="b"></div>
                  </div>
                </div>
              }
        </UserCardStyle>
      </div>
  );
}