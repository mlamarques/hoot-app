import {React, useState, useEffect} from 'react';
import { useNavigate  } from 'react-router-dom';
import Logo from '../../assets/Logo'
import IconVisible from '../../assets/icons/IconVisible'
import IconNotVisible from '../../assets/icons/IconNotVisible'
import IconClose from '../../assets/icons/IconClose'
import {LoginStyle} from './styles'

function SignUp(props) {

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
      return
    }
  }

  function togglePassword() {
    setIsPasswordShown(prev => !prev)
  }

  return (
    <div className="login-page">
      <LoginStyle>
        <div className="sign-in__container"id="sign-in__container">
          <div className="go-back--wrapper" onClick={() => navigate(-1)} tabindex="0">
            <IconClose />
            <div className="llabel" role="tooltip">
              <span >Close</span>
            </div>
          </div>
          <div className="logo__container"><Logo /></div>
          <span className="signup--title">Create your account</span>
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
            />
            <label htmlFor="passwordContainer">Password</label>
            <div className="toggle-visible__container">
              <div className="icon--visible__background" onClick={togglePassword} >
                {isPasswordShown ? <IconNotVisible /> : <IconVisible />}
              </div>
            </div>
          </div>
          <div className="create-account__container">
            <div className="btn--create-account" onClick={handlePassword}>
              <span>Sign up</span>
            </div>
          </div>
        </div>
      </LoginStyle>
    </div>
    );
  }
  
export default SignUp;