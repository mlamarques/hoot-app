import {React, useContext, useState, useEffect} from 'react';
import { useNavigate  } from 'react-router-dom';
import { api } from '../../services/api'
import { UserContext } from '../../context/UserContext'
import Logo from '../../assets/Logo'
import Notification from '../../components/Notification/Notification'
import Loading from '../../components/Loading/Loading'
import IconVisible from '../../assets/icons/IconVisible'
import IconNotVisible from '../../assets/icons/IconNotVisible'
import IconArrowBack from '../../assets/icons/IconArrowBack'
import {LoginStyle} from './styles'

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isUsernameValid, setIsUserNameValid] = useState(false)
  const [isPasswordValid, setIsPasswordValid] = useState(false)
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  // const [token, setToken] = useState(null)
  const [showNotifications, setShowNotifications] = useState(false)
  const [notificationValue, setNotificationValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  let navigate = useNavigate()

  const { setUser } = useContext(UserContext)

  function handleChange(event) {
    const { name, value } = event.target

    if (name === 'username') {
      setUsername(value)
    }
    if (name === 'password') {
      setPassword(value)
    }
  }

  async function handleUsername() {
    // if (username.length !== 0) {
    //   setIsUSerNameValid(true)
    // }
    navigator.clipboard.writeText(username) // save username clipboard
    const data = {
      username: username
    }
    setIsLoading(true)
    await api.post('/usercheck', data)
      .then(res => {
        // console.log(res.data.message)
        // console.log(res.data.message)
        // res.data.isFound ? setIsUserNameValid(true) : console.log(res.data.message)
        res.data.isFound ? setIsUserNameValid(true) : notifyUserNotFound(res)
      })
      .then(() => setIsLoading(false))
      .catch(err => console.log(err))
  }

  async function handlePassword() {
    // if (password.length !== 0) {
    //   setIsPasswordValid(true)
    //   props.handleSignIn()
    //   navigate("/")
    // }

    const data = {
      username: username,
      password: password
    }

    setIsLoading(true)
    await api.post('/login', data)
      .then(res => {
        if (res.data.match) {
          const user = {
            _id: res.data._id,
            username: res.data.username,
            img_url: res.data.img_url,
            follows: res.data.follows
          }
          setIsPasswordValid(true)
          setIsLoading(false)
          localStorage.setItem("accessToken", res.data.token)
          localStorage.setItem("user", JSON.stringify(user))
          setUser(user)
          navigate('/home')
        } else {
          setIsLoading(false)
          setIsPasswordValid(false)
          notifyWrongPassword(res)
        }
      })
      .catch(err => console.log(err))
  }

  function handleKeyPress(event) {
    const { name } = event.target

    if(event.key === 'Enter'){
      if (name === 'username') {
        handleUsername()
      }
      if (name === 'password') {
        handlePassword()
      }
    }
  }

  function togglePassword() {
    setIsPasswordShown(prev => !prev)
  }

  function notifyUserNotFound(res) {
    setNotificationValue(res.data.message)
    setShowNotifications(true)
    setTimeout(() => {
      setShowNotifications(false)
    }, 4 * 1000) // 4 sec
  }

  function notifyWrongPassword(res) {
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
        <div className="sign-in__container">
        
          <div className="logo__container"><Logo /></div>
          {!isUsernameValid ? 
          <>
            <span className="sign-in">Sign in</span>
            <div className="username__container" id="usernameContainer">
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
                value={username}
              />
              <label htmlFor="usernameContainer">Username</label>
            </div>
            <div className="btn--next" onClick={handleUsername}>
              <span>Next</span>
            </div>
            <div className="btn--forget-password">
              <span>Forgot password?</span>
            </div>
            <div className="create-account__container">
              <span className="sign-up--text">Don't have an account?</span>
              <span className="sign-up--link" onClick={() => navigate("/signup")}>Sign up</span>
            </div>
          </>
          :
          <>
            <div className="go-back--wrapper" onClick={() => setIsUserNameValid(false)}>
              <IconArrowBack />
            </div>
            <span className="enter-password">Enter your password</span>
            <div className="username--selected" id="selectedUsername">
              <span>{username}</span>
              <label htmlFor="selectedUsername">Username</label>
            </div>
            <div className="password__container" id="passwordContainer">
              <input
                className="password--input"
                id="passwordInput"
                name="password"
                type={isPasswordShown ? "text" : "password"}
                required="required"
                autoComplete="off"
                onKeyPress={handleKeyPress}
                onChange={(event) => handleChange(event)}
                value={password}
                autoFocus
              />
              <label htmlFor="passwordContainer">Password</label>
              <div className="toggle-visible__container">
                <div className="icon--visible__background" onClick={togglePassword} >
                  {isPasswordShown ? <IconNotVisible /> : <IconVisible />}
                </div>
              </div>
            </div>
            <div className="log-in__bottom">
              <div className="btn--log-in" onClick={handlePassword}>
                <span>Log in</span>
              </div>
            </div>
          </>
          }
        </div>
        {showNotifications && <Notification text={notificationValue} />}
      </LoginStyle>
    </div>
    );
  }
  
  export default Login;