import Logo from '../assets/Logo'
import {LoginStyle} from './styles'

function Login() {
    return (
      <div className="login-page">
        <LoginStyle>
          <div className="sign-in__container">
            <Logo />
            <span className="sign-in">Sign in</span>
            <div className="username__container" id="usernameContainer">
              <input className="username--input" id="usernameInput" autoCapitalize="sentences" autoComplete="username" autoCorrect="on" name="text" spellCheck="true" type="text" required="required" />
              <label htmlFor="usernameContainer">Username</label>
            </div>
            <div className="btn--next">
              <span>Next</span>
            </div>
            <div className="btn--forget-password">
              <span>Forgot password?</span>
            </div>
          </div>
        </LoginStyle>
      </div>
    );
  }
  
  export default Login;