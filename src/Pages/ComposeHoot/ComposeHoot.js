import {React, useState, useEffect, useRef, createElement} from 'react';
import { useNavigate  } from 'react-router-dom';
import { api } from '../../services/api'
import {ComposeHootStyle} from './styles'
import IconClose from '../../assets/icons/IconClose'

export default function ComposeHoot() {
    const [isComponentVisible, setIsComponentVisible] = useState(true);
    const [textboxValue, setTextboxValue] = useState('');
    const [textboxExcess, setTextboxExcess] = useState('');
    const [isCloseAllowed, setIsCloseAllowed] = useState(true)
    const [isCharacterLimit, setCharacterLimit] = useState(false)
    // const ref = useRef(null);
    const modalRef = useRef();

    let navigate = useNavigate()
    
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

    function handleChange(event) {
        const { textContent } = event.target

        if (event.key === 'Enter') {
            const newLineText = createElement('div', {className: "content--block"}, <span></span>)
            // event.target.appendChild(newLineText)
        }

        setTextboxValue(textContent)
        // if (textContent.length > 280) {
        //     return
        // }
    }

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
                                // no-focuscontainer-refocus={true}
                                
                            >
                                <div className="content--wrapper" onInput={(event) => handleChange(event)}>
                                    <div className="content--block">
                                        <div className="content--value">
                                            <span className="text-value--limit" autoFocus></span>
                                            {isCharacterLimit && <span style={{color: "red"}} className=".text-value--exceess"></span>}
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="footer__container"></div>
                        </div>
                    </div>
                </div>
            </ComposeHootStyle>
        </div>
    )
}