import { useContext, useEffect, useState } from 'react'
import LoadingFeed from '../../components/LoadingFeed/LoadingFeed'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { useUserState } from '../../context/UserContext'
import PasswordChange from '../../components/PasswordChange/PasswordChange'
import {ChangePasswordStyle} from './styles'
import IconArrowFoward from '../../assets/icons/IconArrowFoward'
import IconUser from '../../assets/icons/IconUser'
import IconArrowBack from '../../assets/icons/IconArrowBack'

export default function ChangePassword(props) {
  const [isLoading, setIsLoading] = useState(false)

  let navigate = useNavigate()

  return (
    <div className="change-password-page">
      {isLoading && <LoadingFeed />}

      {/* -------------------------- Main -------------------------- */}
      <ChangePasswordStyle>
        {props.windowSize.width >= 988 &&
        <div className="main__container">
          <div className="main__header">
            <h2>Settings</h2>
          </div>
          <div className="settings__container">
            <div className="setting-option__container your-account__item">
              <Link className="account-item--link" to={'/settings/account'}>
                <div className="text__container">
                  <span>Your account</span>
                </div>
                <IconArrowFoward />
              </Link>
            </div>
            <div className="setting-option__container another__item">
              <Link className="account-item--link" to={'/settings/another'}>
                <div className="text__container">
                  <span>Another topic</span>
                </div>
                <IconArrowFoward />
              </Link>
            </div>
          </div>
        </div>}
        {/* -------------------------- Alt -------------------------- */}
        <div className="alternative__container">
          <div className="main__header">
            {props.windowSize.width <= 988 &&
            <div className="go-back--wrapper" onClick={() => navigate('/settings/account')}>
              <IconArrowBack />
            </div>}
            <div className="title__container">
              <h2>Change your password</h2>
            </div>
          </div>
          <div className="change-password_container">
            <PasswordChange />
          </div>
        </div>
      </ChangePasswordStyle>
    </div>
  );
}