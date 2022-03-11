import { useContext, useEffect, useState } from 'react'
import Loading from '../../components/Loading/Loading'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { useUserState } from '../../context/UserContext'
import {AnotherSettingStyle} from './styles'
import IconArrowFoward from '../../assets/icons/IconArrowFoward'
import IconUser from '../../assets/icons/IconUser'
import IconDeactivate from '../../assets/icons/IconDeactivate'
import IconArrowBack from '../../assets/icons/IconArrowBack'

export default function Account(props) {
  const [isLoading, setIsLoading] = useState(false)

  let navigate = useNavigate()

  const currentOptionStyle = {
    borderRight: "2px solid var(--orange)",
    backgroundColor: "var(--mellow-apricot-shade)"
  }

  return (
    <div className="account-page">
      {isLoading && <Loading />}
        {/* -------------------------- Main -------------------------- */}
      <AnotherSettingStyle>
        <div className="main__container">
          <div className="main__header">
            { props.windowSize.width <= 988 &&
              <div className="go-back--wrapper" onClick={() => navigate(-1)}>
              <IconArrowBack />
            </div>
            }
            <h2>Settings</h2>
          </div>
          <div className="settings__container">
            <div className="setting-option__container your-account__item">
              <Link className="account-item--link" to={"/settings/account"} >
                <div className="text__container">
                  <span>Your account</span>
                </div>
                <IconArrowFoward />
              </Link>
            </div>
            <div className="setting-option__container another__item">
              <Link className="account-item--link" to={"/settings/another"} style={currentOptionStyle} >
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
            {props.windowSize.width <= 988 &&
            <div className="go-back--wrapper" onClick={() => navigate('/settings')}>
              <IconArrowBack />
            </div>}
            <div className="title--wrapper">
              <span>Another settings</span>
            </div>
          </div>
          <div className="account-info__container">
            <div className="info-description">
              <span className="description--value">Mauris consequat bibendum justo eu dignissim. Cras semper eros et risus dignissim, eget tristique lacus dapibus. Phasellus feugiat odio nec fringilla laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dictum quis purus id porttitor. </span>
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
          </div>
        </div>
      </AnotherSettingStyle>
    </div>
  );
}