import {React, useContext, useState} from 'react';
import { useNavigate  } from 'react-router-dom';
import { api } from '../../services/api'
import { UserContext } from '../../context/UserContext'
import Logo from '../../assets/Logo'
import Notification from '../../components/Notification/Notification'
import Loading from '../../components/Loading/Loading'
import IconVisible from '../../assets/icons/IconVisible'
import IconNotVisible from '../../assets/icons/IconNotVisible'
import IconClose from '../../assets/icons/IconClose'
import {LoginStyle} from './styles'

function SignUp() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isUsernameValid, setIsUSerNameValid] = useState(true)
  const [usernameMessage, setUsernameMessage] = useState('please enter your username')
  const [isPasswordValid, setIsPasswordValid] = useState(true)
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [passwordMessage, setPasswordMessage] = useState('please enter your password')
  const [showNotifications, setShowNotifications] = useState(false)
  const [notificationValue, setNotificationValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  let navigate = useNavigate()

  const { setUser } = useContext(UserContext)

  const styleDisabled = {
    opacity: "0.5",
    pointerEvents: 'none'
  }

  function handleChange(event) {
    const { name, value } = event.target

    if (name === 'username') {
      setUsername(value)
      handleUsername()
    }
    if (name === 'password') {
      setPassword(value)
      handlePassword()
    }
  }

  async function handleSubmit() {
    const randomNumber = Math.floor(Math.random() * 1000)

    const data = {
      username: username,
      password: password,
      img_url: `https://avatars.dicebear.com/api/bottts/${username}${randomNumber}.svg`,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    

    if ((isPasswordValid && password.length > 0) && (isUsernameValid && username.length > 0)) {
      setIsLoading(true)

      await api.post('/signup', data)
        .then(res => {
          if (res.data.message === "User already exists") {
            setIsLoading(false)
            notifyUser(res)
          } else {
            api.post('/login', {username, password})
              .then(res => {
                if (res.data.match) {
                  const user = {
                    _id: res.data._id,
                    username: res.data.username,
                    img_url: res.data.img_url
                  }
                  setIsPasswordValid(true)
                  setIsLoading(false)
                  localStorage.setItem("accessToken", res.data.token)
                  localStorage.setItem("user", JSON.stringify(user))
                  setUser(user)
                  navigate('/home')
                } else {
                  setIsLoading(false)
                }
              })
              .catch(err => {
                console.log(err)
                setIsLoading(false)
              })
          }
        })
        .catch(err => {
          console.log(err)
          setIsLoading(false)
        })
    }
  }

  function handleUsername() {
    if (username.length <= 20 && username.length !== 0) {
      setIsUSerNameValid(true)
    }
    else {
      if (username.length === 0) {
        setUsernameMessage('please enter your username')
      }
      if (username.length > 20) {
        setUsernameMessage('username characters limit is 20')
      }
      setIsUSerNameValid(false)
    }
  }

  function handlePassword() {
    // Set password validation 
    if (password.length >= 8) {
      setIsPasswordValid(true)
    }
     else {
      if (password.length === 0) {
        setPasswordMessage('please enter your password')
  
      }
      if (password.length !== 0) {
        setPasswordMessage('Password must contain at least 8 characters')
  
      }
      setIsPasswordValid(false)
    }
  }

  function handleKeyPress(event) {
    const { name } = event.target

    if(event.key === 'Enter'){
      handleSubmit()
    }
  }

  function togglePassword() {
    setIsPasswordShown(prev => !prev)
  }

  function notifyUser(res) {
    setNotificationValue(res.data.message)
    setShowNotifications(true)
    setTimeout(() => {
      setShowNotifications(false)
    }, 4 * 1000) // 4 sec
  }

  return (
    <div className="login-page">
      {isLoading && <Loading />}
      <LoginStyle>
        <div className="sign-in__container"id="sign-in__container">
          <div className="go-back--wrapper" onClick={() => navigate(-1)} tabIndex="0">
            <IconClose />
            <div className="tooltip" role="tooltip">
              <span >Close</span>
            </div>
          </div>
          <div className="logo__container"><Logo /></div>
          <span className="signup--title">Create your account</span>
          <div className="username__container" id="usernameContainer">
            <div className="username__wrapper--input">
              <input
                className="username--input"
                id="usernameInput"
                autoCapitalize="sentences"
                autoComplete="username"
                autoCorrect="on"
                name="username"
                spellCheck="true"
                type="text"
                required="required"
                onKeyPress={handleKeyPress}
                onChange={(event) => handleChange(event)}
                onBlur={handleUsername}
                value={username}
                autoFocus
              />
              <label htmlFor="usernameContainer">Username</label>
              {username.length !== 0 &&
              <div className="clean-input__container">
                <div className="clean-input__background" onClick={() => setUsername('')} >
                  <IconClose />
                </div>
              </div>
              }
              <div className="characters-length__container">
                <span><span style={username.length > 20 ? {color: 'red'} : {}}>{username ? username.length : 0}</span>/20</span>
              </div>
            </div>
            
            {/* Username validation */}
            {!isUsernameValid &&
              <div className="username--validation">
                <span>{usernameMessage}</span>
              </div>
            }
          </div>
          <div className="password__container" id="passwordContainer">
            <div className="password__wrapper--input">
              <input
                className="password--input"
                id="passwordInput"
                name="password"
                type={isPasswordShown ? "text" : "password"}
                required="required"
                autoComplete="off"
                onKeyPress={handleKeyPress}
                onChange={(event) => handleChange(event)}
                onBlur={handlePassword}
                value={password}
              />
              <label htmlFor="passwordContainer">Password</label>
              <div className="toggle-visible__container">
              <div className="icon--visible__background" onClick={togglePassword} >
                {isPasswordShown ? <IconNotVisible /> : <IconVisible />}
              </div>
              </div>
            </div>
            {/* Password validation */}
            {!isPasswordValid &&
              <div className="password--validation">
                <span>{passwordMessage}</span>
              </div>
            }         
          </div>
          <div className="create-account__container">
            <div className="btn--create-account" style={ (isPasswordValid && isUsernameValid && password && username) ? {} : styleDisabled} onClick={handleSubmit}>
              <span>Sign up</span>
            </div>
          </div>
        </div>
      </LoginStyle>
      {showNotifications && <Notification text={notificationValue} />}
    </div>
    );
  }
  
export default SignUp;