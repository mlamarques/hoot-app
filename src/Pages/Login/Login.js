import {React, useContext, useState, useEffect} from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { api } from '../../services/api'
import { UserContext } from '../../context/UserContext'
import Logo from '../../assets/Logo'
import Notification from '../../components/Notification/Notification'
import Loading from '../../components/Loading/Loading'
import IconVisible from '../../assets/icons/IconVisible'
import IconNotVisible from '../../assets/icons/IconNotVisible'
import IconArrowBack from '../../assets/icons/IconArrowBack'
import {LoginStyle} from './styles'

function Login(props) {

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

  function handleUsername() {
    // if (username.length !== 0) {
    //   setIsUSerNameValid(true)
    // }
    navigator.clipboard.writeText(username) // save username clipboard
    const data = {
      username: username
    }
    setIsLoading(true)
    api.post('/usercheck', data)
      .then(res => {
        // console.log(res.data.message)
        // console.log(res.data.message)
        // res.data.isFound ? setIsUserNameValid(true) : console.log(res.data.message)
        res.data.isFound ? setIsUserNameValid(true) : notifyUserNotFound(res)
        setUsername(res.data.username)
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
            likes: res.data.likes || [],
            following: res.data.following || [],
            followers: res.data.followers || [],
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
          <div className="logo__container">
            <Logo />
          </div>
          {!isUsernameValid ? (
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
                <span
                  className="sign-up--link"
                  onClick={() => navigate('/signup')}
                >
                  Sign up
                </span>
              </div>
            </>
          ) : (
            <>
              <div
                className="go-back--wrapper"
                onClick={() => setIsUserNameValid(false)}
              >
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
                  type={isPasswordShown ? 'text' : 'password'}
                  required="required"
                  autoComplete="off"
                  onKeyPress={handleKeyPress}
                  onChange={(event) => handleChange(event)}
                  value={password}
                  autoFocus
                />
                <label htmlFor="passwordContainer">Password</label>
                <div className="toggle-visible__container">
                  <div
                    className="icon--visible__background"
                    onClick={togglePassword}
                  >
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
          )}
        </div>
        {showNotifications && <Notification text={notificationValue} />}
        {props.windowSize.height > 580 && (
          <address className="author__container">
            <a href="https://www.linkedin.com/in/mlamarques/" className="linkedin-badge">
              <svg viewBox="0 0 128 128">
                <path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"></path>
              </svg>
              <div className="linkedin-badge__background"></div>
            </a>
            <a href="https://github.com/mlamarques" className="github-badge">
              <svg viewBox="0 0 128 128">
                <g fill="#181616">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M64 1.512c-23.493 0-42.545 19.047-42.545 42.545 0 18.797 12.19 34.745 29.095 40.37 2.126.394 2.907-.923 2.907-2.047 0-1.014-.04-4.366-.058-7.92-11.837 2.573-14.334-5.02-14.334-5.02-1.935-4.918-4.724-6.226-4.724-6.226-3.86-2.64.29-2.586.29-2.586 4.273.3 6.523 4.385 6.523 4.385 3.794 6.504 9.953 4.623 12.38 3.536.383-2.75 1.485-4.628 2.702-5.69-9.45-1.075-19.384-4.724-19.384-21.026 0-4.645 1.662-8.44 4.384-11.42-.442-1.072-1.898-5.4.412-11.26 0 0 3.572-1.142 11.7 4.363 3.395-.943 7.035-1.416 10.65-1.432 3.616.017 7.258.49 10.658 1.432 8.12-5.504 11.688-4.362 11.688-4.362 2.316 5.86.86 10.187.418 11.26 2.728 2.978 4.378 6.774 4.378 11.42 0 16.34-9.953 19.938-19.427 20.99 1.526 1.32 2.886 3.91 2.886 7.88 0 5.692-.048 10.273-.048 11.674 0 1.13.766 2.458 2.922 2.04 16.896-5.632 29.07-21.574 29.07-40.365C106.545 20.56 87.497 1.512 64 1.512z"
                  ></path>
                  <path d="M37.57 62.596c-.095.212-.428.275-.73.13-.31-.14-.482-.427-.382-.64.09-.216.424-.277.733-.132.31.14.486.43.38.642zM39.293 64.52c-.203.187-.6.1-.87-.198-.278-.297-.33-.694-.124-.884.208-.188.593-.1.87.197.28.3.335.693.123.884zm1.677 2.448c-.26.182-.687.012-.95-.367-.262-.377-.262-.83.005-1.013.264-.182.684-.018.95.357.262.385.262.84-.005 1.024zm2.298 2.368c-.233.257-.73.188-1.093-.163-.372-.343-.475-.83-.242-1.087.237-.257.736-.185 1.102.163.37.342.482.83.233 1.086zm3.172 1.374c-.104.334-.582.485-1.064.344-.482-.146-.796-.536-.7-.872.1-.336.582-.493 1.067-.342.48.144.795.53.696.87zm3.48.255c.013.35-.396.642-.902.648-.508.012-.92-.272-.926-.618 0-.354.4-.642.908-.65.506-.01.92.272.92.62zm3.24-.551c.06.342-.29.694-.793.787-.494.092-.95-.12-1.014-.46-.06-.35.297-.7.79-.792.503-.088.953.118 1.017.466zm0 0"></path>
                </g>
                <path
                  d="M24.855 108.302h-10.7a.5.5 0 00-.5.5v5.232a.5.5 0 00.5.5h4.173v6.5s-.937.32-3.53.32c-3.056 0-7.327-1.116-7.327-10.508 0-9.393 4.448-10.63 8.624-10.63 3.614 0 5.17.636 6.162.943.31.094.6-.216.6-.492l1.193-5.055a.468.468 0 00-.192-.39c-.403-.288-2.857-1.66-9.058-1.66-7.144 0-14.472 3.038-14.472 17.65 0 14.61 8.39 16.787 15.46 16.787 5.854 0 9.405-2.502 9.405-2.502.146-.08.162-.285.162-.38v-16.316a.5.5 0 00-.5-.5zM79.506 94.81H73.48a.5.5 0 00-.498.503l.002 11.644h-9.392V95.313a.5.5 0 00-.497-.503H57.07a.5.5 0 00-.498.503v31.53c0 .277.224.503.498.503h6.025a.5.5 0 00.497-.504v-13.486h9.392l-.016 13.486c0 .278.224.504.5.504h6.038a.5.5 0 00.497-.504v-31.53a.497.497 0 00-.497-.502zm-47.166.717c-2.144 0-3.884 1.753-3.884 3.923 0 2.167 1.74 3.925 3.884 3.925 2.146 0 3.885-1.758 3.885-3.925 0-2.17-1.74-3.923-3.885-3.923zm2.956 9.608H29.29c-.276 0-.522.284-.522.56v20.852c0 .613.382.795.876.795h5.41c.595 0 .74-.292.74-.805v-20.899a.5.5 0 00-.498-.502zm67.606.047h-5.98a.5.5 0 00-.496.504v15.46s-1.52 1.11-3.675 1.11-2.727-.977-2.727-3.088v-13.482a.5.5 0 00-.497-.504h-6.068a.502.502 0 00-.498.504v14.502c0 6.27 3.495 7.804 8.302 7.804 3.944 0 7.124-2.18 7.124-2.18s.15 1.15.22 1.285c.07.136.247.273.44.273l3.86-.017a.502.502 0 00.5-.504l-.003-21.166a.504.504 0 00-.5-.502zm16.342-.708c-3.396 0-5.706 1.515-5.706 1.515V95.312a.5.5 0 00-.497-.503H107a.5.5 0 00-.5.503v31.53a.5.5 0 00.5.503h4.192c.19 0 .332-.097.437-.268.103-.17.254-1.454.254-1.454s2.47 2.34 7.148 2.34c5.49 0 8.64-2.784 8.64-12.502s-5.03-10.988-8.428-10.988zm-2.36 17.764c-2.073-.063-3.48-1.004-3.48-1.004v-9.985s1.388-.85 3.09-1.004c2.153-.193 4.228.458 4.228 5.594 0 5.417-.935 6.486-3.837 6.398zm-63.689-.118c-.263 0-.937.107-1.63.107-2.22 0-2.973-1.032-2.973-2.368v-8.866h4.52a.5.5 0 00.5-.504v-4.856a.5.5 0 00-.5-.502h-4.52l-.007-5.97c0-.227-.116-.34-.378-.34h-6.16c-.238 0-.367.106-.367.335v6.17s-3.087.745-3.295.805a.5.5 0 00-.36.48v3.877a.5.5 0 00.497.503h3.158v9.328c0 6.93 4.86 7.61 8.14 7.61 1.497 0 3.29-.48 3.586-.59.18-.067.283-.252.283-.453l.004-4.265a.51.51 0 00-.5-.502z"
                  fill="#100E0F"
                ></path>
              </svg>
              <div className="github-badge__background"></div>
            </a>
          </address>
        )}
      </LoginStyle>
    </div>
  );
  }
  
  export default Login;