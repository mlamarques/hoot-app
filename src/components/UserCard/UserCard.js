import { useEffect, useState } from 'react';
import useComponentVisible from '../../hooks/showComponent';
import {UserCardStyle} from './styles'
import { Link } from 'react-router-dom';

export default function UserCard(props) {
  const [isSettingsShown, setIsSettingsShown] = useState(false)
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

  return (
    // style={{pointerEvents: isSettingsShown && "none"}}
      <div className="usercard__component" onClick={handleClick}> 
        <UserCardStyle> 
          <h3>{props.username}</h3>
          {/* <div ref={ref}>
          {!isComponentVisible && (<h4 onClick={() => handleClickOutside()}>Showing</h4>)}
          </div> */}
          <div ref={ref}>
            {isComponentVisible && 
              <div className="usercard__options" onClick={(event) => handleInsideClick(event)} style={{ animation: `${isAnimationShown ? "fadeIn" : "fadeOut"} 0.5s ease-in-out` }} >
                <div className="a">
                  <div className="ainside"></div>
                  <Link to='/logout' className="binside" onClick={() => props.handleClick()} >
                    <span >Log out</span>
                  </Link>
                </div>
                <div className="b"></div>
              </div>
            }
          </div>
        </UserCardStyle>
      </div>
  );
}