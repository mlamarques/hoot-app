import {React, useContext, useState, useEffect, useRef, createElement} from 'react';
import { useNavigate  } from 'react-router-dom';
import { api } from '../../services/api'
import { UserContext } from '../../context/UserContext'
import {ComposeHootStyle} from './styles'
import IconClose from '../../assets/icons/IconClose'

export default function ComposeHoot(props) {
    const [isComponentVisible, setIsComponentVisible] = useState(true);
    const [textboxValue, setTextboxValue] = useState('');
    const [textboxExcess, setTextboxExcess] = useState('');
    const [isCloseAllowed, setIsCloseAllowed] = useState(true)
    const [isCharacterLimit, setCharacterLimit] = useState(false)
    // const ref = useRef(null);
    const modalRef = useRef();
    
    let navigate = useNavigate()

    const { user } = useContext(UserContext)

    console.log(user.username)
    
    async function closeCompose(e) {

        if (isCloseAllowed && modalRef.current === e.target) {
            navigate(-1)
        }

        if (e.key === 'Escape') {
            navigate(-1)
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', closeCompose, true);
        return () => {
            document.removeEventListener('keydown', closeCompose, true);
        };
    });
    
    function handlePostHoot() {
        console.log('clicked')
    }

    function handleChange(event) {
        let { textContent } = event.target
        setTextboxValue(textContent) 

        // if (event.key === 'Enter') {
        //     const newLineText = createElement('div', {className: "content--block"}, <span></span>)
        //     // event.target.appendChild(newLineText)
        // }
        // setTextboxValue(textContent)     
        
        // event.target.innerHTML = `<span className="text-value--limit">${textboxValue}</span>`
        
        // if (textContent.length > 280) {
        //     return
        // }
    }

    function onBeforeInput(event) {
        // event.preventDefault()
        // setTextboxValue(prev => prev + event.data)  

        // if (event.nativeEvent.key === 'Enter') {
        //     console.log('jump')
        //     console.log(myFormatedText)
        // }
 
    }

    const emptyBoxStyle = {
        opacity: "0.5",
        pointerEvents: 'none'
    }

    const myFormatedText = <span onChange={(event) => event.target.selectionStart = textboxValue.length}>{textboxValue}</span>

    return (
        <div className="compose-hoot__component" onClick={closeCompose} ref={modalRef} onMouseDown={() => setIsCloseAllowed(true)}>
            <ComposeHootStyle >
                <div className="compose-hoot__container" onMouseLeave={() => setIsCloseAllowed(false)} onMouseEnter={() => setIsCloseAllowed(false)}>
                    <div className="container__header" onClick={() => console.log(textboxValue)}>
                        <div className="go-back--wrapper" onClick={() => navigate(-1)} tabIndex="0">
                            <IconClose />
                            <div className="tooltip" role="tooltip">
                            <span >Close</span>
                            </div>
                        </div>
                    </div>
                    <div className="container__body">
                        <div className="user--avatar__container">
                            <div className="user--avatar__wrapper">
                                <img className="user--avatar" src="https://avatars.dicebear.com/api/bottts/j155a1ssdgsgsd1w.svg" alt="robot avatar" />
                            </div>
                        </div>
                        <div className="text__container">
                            <div
                                className="draft-editor--content"
                                role={"textbox"}
                                tabIndex={"0"}
                                contentEditable={true}
                                suppressContentEditableWarning={true}
                                onInput={(event) => handleChange(event)}
                                onBeforeInput={(event) => onBeforeInput(event)}
                            >
                                {/* {myFormatedText} */}
                            </div>
                            <div className="footer__container">
                                <div className="icons_container"></div>
                                <div 
                                    className="submit__button"
                                    style={textboxValue.length === 0 ? emptyBoxStyle : {}}
                                    onClick={handlePostHoot}
                                >
                                    <span>Hoot</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ComposeHootStyle>
        </div>
    )
}