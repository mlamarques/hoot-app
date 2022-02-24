import { useState } from 'react';
import useComponentVisible from '../../hooks/showComponent';
import {UserCardStyle} from './styles'
import { Link } from 'react-router-dom';
import IconOptions from '../../assets/icons/IconOptions'

export default function UserCard(props) {
  const [isAnimationShown, setIsanimationShown] = useState(true)

  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)

  function handleClick() {
    if (isComponentVisible) {
      setIsanimationShown(false)
      setTimeout(() => {
        setIsComponentVisible(false)
        setIsanimationShown(true)
      }, 400)
    } else {
      setIsComponentVisible(true)
    }
  }

  function handleInsideClick(event) {
    event.preventDefault()
    event.stopPropagation()
  }

  const usercardStyle = {
    display: 'flex',
    position: 'relative',
    width: '100%',
  };

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
            <div className="user--info__container">
              <div className="user--info--wrapper">
                <span className="user--name">{props.username}</span>
                <span className="user--username">@{props.username}</span>
              </div>
            </div>
            <div className="icon--option__container">
                <IconOptions />
            </div>
            <div ref={ref}>
              {isComponentVisible && 
                <div className="usercard__options" onClick={(event) => handleInsideClick(event)} style={{ animation: `${isAnimationShown ? "fadeIn" : "fadeOut"} 0.5s ease-in-out` }} >
                  <div className="a">
                    <div className="ainside"></div>
                    {/* link to logout route */}
                    <div className="binside" onClick={() => props.handleClick()} >
                      <span >Log out</span>
                    </div>
                  </div>
                  <div className="b"></div>
                </div>
              }
            </div>
          </div> 
        </UserCardStyle>
      </div>
  );
}