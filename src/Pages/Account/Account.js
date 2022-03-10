import { useContext, useEffect, useState } from 'react'
import Loading from '../../components/Loading/Loading'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { api } from '../../services/api'
import { useUserState } from '../../context/UserContext'
import {AccountStyle} from './styles'
import IconArrowFoward from '../../assets/icons/IconArrowFoward'
import IconUser from '../../assets/icons/IconUser'
import IconPassword from '../../assets/icons/IconPassword'
import IconDeactivate from '../../assets/icons/IconDeactivate'
import IconArrowBack from '../../assets/icons/IconArrowBack'

export default function Account(props) {
  const [isLoading, setIsLoading] = useState(false)

  let params = useParams();
  let location = useLocation()
  let navigate = useNavigate()
  console.log(location.pathname)

  const currentOptionStyle = {
    borderRight: "2px solid var(--orange)",
    backgroundColor: "var(--mellow-apricot-shade)"
  }

  return (
    <div className="account-page" style={{ height: '100%'}}>
      {isLoading && <Loading />}
      
        {/* -------------------------- Main -------------------------- */}
      <AccountStyle>
        {!(props.windowSize.width <= 988 && location.pathname === '/settings/account') &&
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
        </div>}
        {/* -------------------------- Alt -------------------------- */}
        {((props.windowSize.width >= 988 && location.pathname !== '/settings/account') || location.pathname === '/settings/account') &&
        <div className="alternative__container">
          <div className="main__header">
            {props.windowSize.width <= 988 &&
            <div className="go-back--wrapper" onClick={() => navigate('/settings')}>
              <IconArrowBack />
            </div>}
            <div className="title--wrapper">
              <span>Your account</span>
            </div>
          </div>
          <div className="account-info__container">
            <div className="info-description">
              <span className="description--value">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a porta dolor. Proin magna urna, bibendum vel volutpat ac, ornare eget quam.</span>
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
                  <IconPassword />
                </div>
                <div className="text__container">
                  <span>Change your password</span>
                </div>
                <IconArrowFoward />
              </Link>
            </div>
            <div className="account-item__container">
              <Link className="option-item--link" to={"/settings/account"} >
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
        </div>}
      </AccountStyle>
    </div>
  );
}