import {React, useState, useEffect} from 'react';
import { useNavigate  } from 'react-router-dom';
import { api } from '../../services/api'
import Logo from '../../assets/Logo'
import Loading from '../../components/Loading/Loading'
import IconVisible from '../../assets/icons/IconVisible'
import IconNotVisible from '../../assets/icons/IconNotVisible'
import IconClose from '../../assets/icons/IconClose'
import {LoginStyle} from './styles'

function SignUp(props) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isUsernameValid, setIsUSerNameValid] = useState(true)
  const [isPasswordValid, setIsPasswordValid] = useState(true)
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  let navigate = useNavigate()

  useEffect(() => {
    const sessionToken = localStorage.getItem("accessToken")
    
    function checkSessionStatus() {
      if (sessionToken !== null) {
        setIsLoading(true)
        api.post('/session', {session: sessionToken})
        .then(res => {
          console.log("session on")
          setIsLoading(false)
        })
        .then(() => {
          navigate('/home')
        })
        .catch(err => console.log(err))
      }
    }

    checkSessionStatus()
    
  }, [])

  function handleChange(event) {
    const { name, value } = event.target

    if (name === 'username') {
      setUsername(value)
    }
    if (name === 'password') {
      setPassword(value)
    }
  }

  async function handleSubmit() {
    const data = {
      username: username,
      password: password,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    if ((isPasswordValid && password.length > 0) && (isUsernameValid && username.length > 0)) {
      setIsLoading(true)
      props.handleSignIn()

      await api.post('/signup', data)
      .catch(err => console.log(err))

      await api.post('/login', {username, password})
      .then(res => {
        if (res.data.match) {
          localStorage.setItem("accessToken", res.data.token)
          setIsLoading(false)
          navigate("/home")
        } else {
          setIsLoading(false)
        }
      })
      // .finally(() => {
        
      // })
      .catch(err => console.log(err))
    }
  }

  function handleUsername() {
    if (username.length !== 0) {
      setIsUSerNameValid(true)
      
    } else {
      setIsUSerNameValid(false)
    }
  }

  function handlePassword() {
    if (password.length > 3) {
      setIsPasswordValid(true)
    } else {
      setIsPasswordValid(false)
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
            </div>
            
            {/* Username validation */}
            {!isUsernameValid &&
              <div className="username--validation">
                <span>This is a validation</span>
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
                <span>This is a validation</span>
              </div>
            }         
          </div>
          <div className="create-account__container">
            <div className="btn--create-account" onClick={handleSubmit}>
              <span>Sign up</span>
            </div>
          </div>
        </div>
      </LoginStyle>
    </div>
    );
  }
  
export default SignUp;