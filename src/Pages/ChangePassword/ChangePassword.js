import { useEffect, useState } from 'react'
import Loading from '../../components/Loading/Loading'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import Nav from '../../components/Nav/Nav'
import {ChangePasswordStyle} from './styles'

export default function Home(props) {
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState('')

  let navigate = useNavigate()

  useEffect(() => {
    const sessionToken = localStorage.getItem("accessToken")
    
    function getAuthData() {
      if (sessionToken !== null) {
        api.post('/session', {session: sessionToken})
        .then(res => {
          setUsername(res.data.authData.username)
        })
        .catch(err => console.log(err))
      }
    }

    getAuthData()
    
  }, [])

  function handleLogout() {
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
      <Nav username={username} handleClick={handleLogout} />
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