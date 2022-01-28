import {React, useState, useEffect} from 'react';
import { useNavigate  } from 'react-router-dom';
import Logo from '../../assets/Logo'
import IconVisible from '../../assets/icons/IconVisible'
import IconNotVisible from '../../assets/icons/IconNotVisible'
import IconArrowBack from '../../assets/icons/IconArrowBack'
import {LoginStyle} from './styles'

function Login(props) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isUsernameValid, setIsUSerNameValid] = useState(false)
  const [isPasswordValid, setIsPasswordValid] = useState(false)
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  let navigate = useNavigate()

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
    if (username.length !== 0) {
      setIsUSerNameValid(true)
    }
  }

  function handlePassword() {
    if (password.length !== 0) {
      setIsPasswordValid(true)
      props.handleSignIn()
      navigate("/")
    }
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

  return (
    <div className="login-page">
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
            <div className="go-back--wrapper" onClick={() => setIsUSerNameValid(false)}>
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
      </LoginStyle>
    </div>
    );
  }
  
  export default Login;