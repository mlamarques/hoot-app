import { useContext, useEffect, useState } from 'react'
import Loading from '../../components/Loading/Loading'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { useUserState } from '../../context/UserContext'
import {ChangePasswordStyle} from './styles'

export default function Home(props) {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="home-page">
      {isLoading && <Loading />}
        {/* -------------------------- Main -------------------------- */}
      <ChangePasswordStyle>
        <div className="main__container">
          <div className="main__header">
            <h1 onClick={props.handleLogout} >Settings</h1>
          </div>
          <div className="feed__container">
            <div className="hoot--individual__container"></div>
            <div className="hoot--individual__container"></div>
            <div className="hoot--individual__container"></div>
          </div>
        </div>
        {/* -------------------------- Alt -------------------------- */}
        <div className="alternative__container">
        </div>
      </ChangePasswordStyle>
    </div>
  );
}