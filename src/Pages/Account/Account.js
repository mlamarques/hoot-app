import { useContext, useEffect, useState } from 'react'
import Loading from '../../components/Loading/Loading'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { useUserState } from '../../context/UserContext'
import {AccountStyle} from './styles'
import IconArrowFoward from '../../assets/icons/IconArrowFoward'
import IconUser from '../../assets/icons/IconUser'
import IconDeactivate from '../../assets/icons/IconDeactivate'

export default function Account(props) {
  const [isLoading, setIsLoading] = useState(false)

  const currentOptionStyle = {
    borderRight: "2px solid var(--orange)",
    backgroundColor: "var(--mellow-apricot-shade)"
  }

  return (
    <div className="account-page">
      {isLoading && <Loading />}
      
        {/* -------------------------- Main -------------------------- */}
      <AccountStyle>
        <div className="main__container">
          <div className="main__header">
            <h2>Settings</h2>
          </div>
          <div className="settings__container">
            <div className="setting-option__container your-account__item">
              <Link className="account-item--link" to={"/settings/account"} style={currentOptionStyle} >
                <div className="text__container">
                  <span>Your account</span>
                </div>
                <IconArrowFoward />
              </Link>
            </div>
            <div className="setting-option__container another__item">
              <Link className="account-item--link" to={"/settings/another"} >
                <div className="text__container">
                  <span>Another topic</span>
                </div>
                <IconArrowFoward />
              </Link>
            </div>
          </div>
        </div>
        {/* -------------------------- Alt -------------------------- */}
        <div className="alternative__container">
          <div className="main__header">
            <h2>Your account</h2>
          </div>
          <div className="account-info__container">
            <div className="info-description">
              <span className="description--value">Some info about this section. Lorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum</span>
            </div>
            <div className="account-item__container account-info__item">
              <Link className="option-item--link" to={"/settings/account"} >
                <div className="icon__container">
                  <IconUser />
                </div>
                <div className="text__container">
                  <span>Your account</span>
                </div>
                <IconArrowFoward />
              </Link>
            </div>
            <div className="account-item__container password-change__item">
              <Link className="option-item--link" to={"/settings/password"} >
                <div className="icon__container">
                  <IconDeactivate />
                </div>
                <div className="text__container">
                  <span>Deactivate your account</span>
                </div>
                <IconArrowFoward />
              </Link>
            </div>
          </div>
        </div>
      </AccountStyle>
    </div>
  );
}