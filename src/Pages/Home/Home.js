import {HomeStyle} from './styles'
import Nav from '../../components/Nav/Nav'
import LogoSimp from '../../assets/LogoSimp'
import IconHome from '../../assets/icons/IconHome'
import IconFavorite from '../../assets/icons/IconFavorite'
import IconMessages from '../../assets/icons/IconMessages'
import IconSearch from '../../assets/icons/IconSearch'
import { useContext, useEffect, useState } from 'react'
import { useUserState } from '../../context/UserContext'
import Loading from '../../components/Loading/Loading'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

export default function Home(props) {
  const [isLoading, setIsLoading] = useState(false)
  // const [username, setUsername] = useState('')
  const [targetValue, setTargetValue] = useState("")

  let navigate = useNavigate()

  const { user } = useUserState()

  useEffect(() => {
    const sessionToken = localStorage.getItem("accessToken")
    
    function getAuthData() {
      if (sessionToken !== null) {
        api.get('api/session')
        .then(res => {
          // setUsername(res.data.authData.username)
        })
        .catch(err => console.log(err))
      }
    }

    getAuthData()
    
  }, [])

  return (
    <div className="home-page">
      {isLoading && <Loading />}
      <Nav username={user.username} img_url={user.img_url} />
        {/* -------------------------- Main -------------------------- */}
      <HomeStyle>
        <div className="main__container">
          <div className="main__header">
            <h1 onClick={props.handleLogout} >Home</h1>
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
      </HomeStyle>
    </div>
  );
}