import { React, useState } from 'react';
import { api } from '../../services/api'
import IconNotVisible from '../../assets/icons/IconNotVisible';
import IconVisible from '../../assets/icons/IconVisible';
import { PasswordChangeStyle } from './styles';
import { useUserState } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

export default function PasswordChange() {
  const [isCurrentPasswordShown, setIsCurrentPasswordShown] = useState(false);
  const [isNewPasswordShown, setIsNewPasswordShown] = useState(false);
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isCurrentPasswordValid, setIsCurrentPasswordValid] = useState(true);
  const [isNewPasswordValid, setIsNewPasswordValid] = useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);
  const [validationMessage, setValidationMessage] = useState('')

  const { user, setUser } = useUserState()
  let navigate = useNavigate()

  function handlePasswordChange(event) {
    const { name, value } = event.target
    
    if (name === 'currentPassword') {
        setCurrentPassword(value)
        setIsCurrentPasswordValid(true)
    }
    if (name === 'newPassword') {
        setNewPassword(value)
        setIsNewPasswordValid(true)
    }
    if (name === 'confirmPassword') {
        setConfirmPassword(value)
        setIsConfirmPasswordValid(true)
    }
  }

  function checkValidation() {
    
      if (newPassword.length < 8) {
        setIsNewPasswordValid(false)
        setValidationMessage('Your password needs to be at least 8 characters.')
        return
      }

      if (newPassword !== confirmPassword) {
        setIsConfirmPasswordValid(false)
        setValidationMessage('Passwords do not match.')
        return 
      }

      // Call API for check current passwordName
      api.post('change-password', { userId: user._id, currentPassword: currentPassword, newPassword: newPassword})
        .then(res => {
          console.log(res.data)
          navigate('/home')
        })
        .catch(err => console.error(err))
      // if wrong:
        //   setIsCurrentPasswordValid(false)
        //     setValidationMessage('Passwords do not match.')
        //     return 
    
    // if valid:
    //show modal with msg: password changed
  }

  function togglePassword(passwordName) {
    if (passwordName === 'currentPassword') {
        setIsCurrentPasswordShown(prev => !prev)
    }
    if (passwordName === 'newPassword') {
        setIsNewPasswordShown(prev => !prev)
    }
    if (passwordName === 'confirmPassword') {
        setIsConfirmPasswordShown(prev => !prev)
    }
  }

  return (
    <div className="password-change__component">
      <PasswordChangeStyle>
        <div
          className="current-password__container password__container"
          id="passwordContainer"
        >
          <div 
            className="password__wrapper--input" 
            style={
                isCurrentPasswordValid ? {} : { borderColor: 'var(--red-twitter' }}
            >
            <input
              className="current-password--input password--input"
              id="currentPasswordInput"
              name="currentPassword"
              type={isCurrentPasswordShown ? 'text' : 'password'}
              required="required"
              autoComplete="off"
              // onKeyPress={handleKeyPress}
              onChange={(event) => handlePasswordChange(event)}
              // onBlur={handlePassword}
              value={currentPassword}
            />
            <label htmlFor="passwordContainer" style={isCurrentPasswordValid ? {} : { color: 'var(--red-twitter' }}>Current password</label>
            <div className="toggle-visible__container">
              <div
                className="icon--visible__background"
                onClick={() => togglePassword('currentPassword')}
              >
                {isCurrentPasswordShown ? <IconNotVisible /> : <IconVisible />}
              </div>
            </div>
          </div>
          {!isCurrentPasswordValid && (
            <div className="password--validation">
              <span>The password you entered was incorrect.</span>
            </div>
          )}
        </div>
        <div className="password-division"></div>
        {/* <div className="new-password__container"></div> */}
        <div className="new-password__container password__container">
          <div
            className="password__wrapper--input new-password--wrapper"
            style={
              isNewPasswordValid ? {} : { borderColor: 'var(--red-twitter' }
            }
          >
            <input
              className="new-password--input password--input"
              id="passwordInput"
              name="newPassword"
              type={isNewPasswordShown ? 'text' : 'password'}
              required="required"
              autoComplete="off"
              // onKeyPress={handleKeyPress}
              onChange={(event) => handlePasswordChange(event)}
              // onBlur={handlePassword}
              value={newPassword}
            />
            <label htmlFor="passwordContainer" style={isNewPasswordValid ? {} : { color: 'var(--red-twitter' }}>New password</label>
            <div className="toggle-visible__container">
              <div
                className="icon--visible__background"
                onClick={() => togglePassword('newPassword')}
              >
                {isNewPasswordShown ? <IconNotVisible /> : <IconVisible />}
              </div>
            </div>
          </div>
          {/* Password validation */}
          {!isNewPasswordValid && (
            <div className="password--validation">
              <span>{validationMessage}</span>
            </div>
          )}
        </div>
        <div className="confirm-password__container password__container">
          <div
            className="password__wrapper--input confirm-password--wrapper"
            style={
              isConfirmPasswordValid ? {} : { borderColor: 'var(--red-twitter' }
            }
          >
            <input
              className="confirm-password--input password--input"
              id="confirmPasswordInput"
              name="confirmPassword"
              type={isConfirmPasswordShown ? 'text' : 'password'}
              required="required"
              autoComplete="off"
              // onKeyPress={handleKeyPress}
              onChange={(event) => handlePasswordChange(event)}
              // onBlur={handlePassword}
              value={confirmPassword}
            />
            <label htmlFor="passwordContainer" style={isConfirmPasswordValid ? {} : { color: 'var(--red-twitter' }}>Confirm password</label>
            <div className="toggle-visible__container">
              <div
                className="icon--visible__background"
                onClick={() => togglePassword('confirmPassword')}
              >
                {isConfirmPasswordShown ? <IconNotVisible /> : <IconVisible />}
              </div>
            </div>
          </div>
          {!isConfirmPasswordValid && (
            <div className="password--validation">
              <span>Passwords do not match.</span>
            </div>
          )}
        </div>
        <div className="password-division"></div>
        <div className="save__container" style={(newPassword.length === 0 || confirmPassword.length === 0 || currentPassword.length === 0) ? {opacity: 0.5, pointerEvents: 'none'} : {}}>
            <div
            className="save__button"
            onClick={checkValidation}
            >
            <span>Save</span>
            </div>
        </div>
        
      </PasswordChangeStyle>
    </div>
  );
}
