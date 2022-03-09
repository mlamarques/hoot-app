import {React, useContext, useState, useEffect, useRef, createElement} from 'react';
import { useNavigate  } from 'react-router-dom';
import { api } from '../../services/api'
import { useUserState } from '../../context/UserContext'
import {ComposeHootStyle} from './styles'
import IconClose from '../../assets/icons/IconClose'
import Loading from '../../components/Loading/Loading'

export default function ComposeHoot(props) {
    const [isComponentVisible, setIsComponentVisible] = useState(true);
    const [textboxValue, setTextboxValue] = useState('');
    const [textboxExcess, setTextboxExcess] = useState('');
    const [isCloseAllowed, setIsCloseAllowed] = useState(true)
    const [isCharacterLimit, setCharacterLimit] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    // const ref = useRef(null);
    const modalRef = useRef();
    const focusDiv = useRef()
    
    let navigate = useNavigate()

    const { user } = useUserState()
    
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

    useEffect(() => {
        if(focusDiv.current) focusDiv.current.focus(); 
    }, [focusDiv]);
    
    function handlePostHoot() {
        const data = {
            owner: user._id,
            box_content: textboxValue,
            createdAt: new Date(),
        }

        setIsLoading(true)

        console.log(data)

        api.post('/compose/hoot', data)
            .then(res => {
                console.log(res.data.message)
                setIsLoading(false)
                navigate(-1)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
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
        <div className="compose-hoot__component" onClick={closeCompose} ref={modalRef} onMouseDown={() => setIsCloseAllowed(true)} style={{zIndex: 99, width: '100%', height: '100%'}}>
            {isLoading && <Loading />}
            <ComposeHootStyle >
                <div className="compose-hoot__container" onMouseLeave={() => setIsCloseAllowed(false)} onMouseEnter={() => setIsCloseAllowed(false)}>
                    <div className="container__header" onClick={() => console.log(textboxValue)}>
                        <div className="go-back--wrapper" onClick={() => navigate(-1)} tabIndex="0">
                            <IconClose />
                            <div className="tooltip" role="tooltip">
                            <span >Close</span>
                            </div>
                        </div>
                        {props.windowSize.width < 688 &&
                        <div 
                            className="submit__button"
                            style={textboxValue.length === 0 ? emptyBoxStyle : {}}
                            onClick={handlePostHoot}
                        >
                            <span>Hoot</span>
                        </div>}
                    </div>
                    <div className="container__body">
                        <div className="user--avatar__container">
                            <div className="user--avatar__wrapper">
                                <img className="user--avatar" src={user.img_url} alt="robot avatar" />
                            </div>
                        </div>
                        <div className="text__container">
                            <div
                                className="draft-editor--content"
                                role={"textbox"}
                                tabIndex={0}
                                contentEditable={true}
                                suppressContentEditableWarning={true}
                                onInput={(event) => handleChange(event)}
                                onBeforeInput={(event) => onBeforeInput(event)}
                                ref={focusDiv}
                            >
                                {/* {myFormatedText} */}
                                <div id="data-content" className="data-content" ></div>
                                {textboxValue.length === 0 && <label className="label--data-content" htmlFor="data-content">What's happening?</label>}
                            </div>
                            <div className="footer__container">
                                <div className="icons_container"></div>
                                {props.windowSize.width >= 688 &&
                                <div 
                                    className="submit__button"
                                    style={textboxValue.length === 0 ? emptyBoxStyle : {}}
                                    onClick={handlePostHoot}
                                >
                                    <span>Hoot</span>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </ComposeHootStyle>
        </div>
    )
}