import { UserStyle } from './styles'
import Nav from '../../components/Nav/Nav'
import LogoSimp from '../../assets/LogoSimp'
import IconHome from '../../assets/icons/IconHome'
import IconFavorite from '../../assets/icons/IconFavorite'
import IconMessages from '../../assets/icons/IconMessages'
import IconSearch from '../../assets/icons/IconSearch'
import { useContext, useEffect, useState } from 'react'
import { useUserState } from '../../context/UserContext'
import Loading from '../../components/Loading/Loading'
import { useNavigate, useParams  } from 'react-router-dom'
import { api } from '../../services/api'

export default function User(props) {
  const [isLoading, setIsLoading] = useState(false)
  const [targetValue, setTargetValue] = useState("")
  const [userData, setUserData] = useState({
    username: '',
    img_url: '',
    createdAt: ''
  })
  const [isUserFound, setIsUserFound] = useState(false)

  let navigate = useNavigate()
  let params = useParams();

  const { user } = useUserState()
  console.log(isUserFound)

  useEffect(() => {
    const sessionToken = localStorage.getItem("accessToken")
    
    function getAuthData() {
      setIsLoading(true)
      if (sessionToken !== null) {
        // api.get('/api/session')
        // .then(res => {
        //   // setUsername(res.data.authData.username)
        // })
        // .catch(err => {
        //   console.log(err)
        // })
        api.get(`/${params.user}`)
          .then(res => {
            if (res.data.message) {
              setIsUserFound(false)
              setIsLoading(false)
            } else {
              setIsUserFound(true)
              setUserData(prev => ({
                ...prev,
                username: res.data.username,
                img_url: res.data.img_url,
                createdAt: res.data.createdAt
              }))
              setIsLoading(false)
            }
          })
          .catch(err => {
            console.log(err)
            setIsLoading(false)
          })
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
    <div className="user-page">
      {isLoading && <Loading />}
      <Nav username={user.username} handleClick={handleLogout} />
        {/* -------------------------- Main -------------------------- */}
      <UserStyle>
        {isUserFound ?
        <div className="main__container">
          <div className="main__header">
            <h1>{userData.username}</h1>
          </div>
          <div className="feed__container">
            <div className="hoot--individual__container">
              <div className="user--avatar__wrapper">
                  <img className="user--avatar" src={userData.img_url} alt="robot avatar" />
              </div>
              <h2>{userData.createdAt}</h2>
            </div>
          </div>
        </div>
        :
        <div className="main__container">
          <span>Hmm...this page doesn't exist. Try searching for something else.</span>
        </div>
        }
        {/* -------------------------- Alt -------------------------- */}
        <div className="alternative__container">
        </div>
      </UserStyle>
    </div>
  );
}