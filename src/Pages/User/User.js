import { UserStyle } from './styles'
import Loading from '../../components/Loading/Loading'
import { useNavigate, useParams  } from 'react-router-dom'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'

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

  return (
    <div className="user-page">
      {isLoading && <Loading />}
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
          <div className="feed__container">
            <div className="hoot--individual__container">
              <div className="text__container">
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
              </div>
              <div className="text__container">
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
              </div>
              <div className="text__container">
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
              </div>
              <div className="text__container">
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
              </div>
              <div className="text__container">
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
              </div>
              <div className="text__container">
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
              </div>
              <div className="text__container">
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
              </div>
              <div className="text__container">
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
              </div>

              <div className="text__container">
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
              </div>

              <div className="text__container">
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
              </div><div className="text__container">
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
              </div>
              <div className="text__container">
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
                <span>asdasduihasiudhasasddddddddddddddddddddddddddddddddddasdddddddddddddd</span>
              </div>
              
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