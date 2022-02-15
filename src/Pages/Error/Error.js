import {ErrorStyle} from './styles'
import Nav from '../../components/Nav/Nav'
import LogoSimp from '../../assets/LogoSimp'
import IconHome from '../../assets/icons/IconHome'
import IconFavorite from '../../assets/icons/IconFavorite'
import IconMessages from '../../assets/icons/IconMessages'
import IconSearch from '../../assets/icons/IconSearch'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import Loading from '../../components/Loading/Loading'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

export default function Home(props) {
  const [isLoading, setIsLoading] = useState(false)
  // const [username, setUsername] = useState('')
  const [targetValue, setTargetValue] = useState("")

  let navigate = useNavigate()

  const { user } = useContext(UserContext)

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

  function handleLogout(event) {
    event.preventDefault()
    if (localStorage.getItem("accessToken")) {
      removeToken().then(() => {
        redirectToLogin()
      }, () => {
        return
      })
    }

    async function removeToken() {
      localStorage.removeItem("accessToken")
    }

    function redirectToLogin() {
      navigate("/login")
    }
    
  }

  return (
    <div className="home-page">
      {isLoading && <Loading />}
      <Nav username={user.username} handleClick={handleLogout} targetValue={targetValue} />
        {/* -------------------------- Main -------------------------- */}
      <ErrorStyle>
        <div className="main__container">
          <span>Hmm...this page doesn't exist. Try searching for something else.</span>
        </div>
        {/* -------------------------- Alt -------------------------- */}
        <div className="alternative__container">
        </div>
      </ErrorStyle>
    </div>
  );
}