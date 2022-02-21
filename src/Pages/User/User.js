import { UserStyle } from './styles'
import Loading from '../../components/Loading/Loading'
import { useNavigate, useParams  } from 'react-router-dom'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'
import HootCard from '../../components/HootCard/HootCard'

export default function User(props) {
  const [isLoading, setIsLoading] = useState(false)
  const [userData, setUserData] = useState({
    _id: '',
    username: '',
    img_url: '',
    createdAt: '',
    date_formatted_simple: '',
    list_hoots: []
  })
  const [isUserFound, setIsUserFound] = useState(false)

  let navigate = useNavigate()
  let params = useParams();

  useEffect(() => {
    setIsLoading(true)
    
    api.get(`/user/${params.user}`)
      .then(res => {
        if (res.data.message) {
          setIsLoading(false)
        } else {
          setUserData(prev => ({
            ...prev,
            _id: res.data._id,
            username: res.data.username,
            img_url: res.data.img_url,
            createdAt: res.data.createdAt,
            // date_formatted: res.data.date_formatted,
            date_formatted_simple: res.data.date_formatted_simple,
            list_hoots: res.data.newList
          }))
          setIsUserFound(true)
          setIsLoading(false)
        }
      })
      .catch(err => {
        console.log(err)
        setIsLoading(false)
      })
    
  }, [params])

  return (
    <div className="user-page">
      
        {/* -------------------------- Main -------------------------- */}
      <UserStyle>
        {isLoading && <Loading />}
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
              <h2>Joined: {userData.date_formatted_simple}</h2>
            </div>
          </div>
          <div className="feed__container">
            <div className="hoot--individual__container">
              <div className="text__container" onClick={() => {
                  console.log(userData.list_hoots)
                 }}>
              </div>
              <div className="hoots_container">
                {userData.list_hoots.length === 0 ?
                <span>No hoots yet</span>
                :
                userData.list_hoots.map(item => {
                  return (
                    <HootCard
                      key={item?._id} 
                      box_content={item?.box_content} 
                      img_url={userData?.img_url} 
                      username={userData?.username} 
                      time={item?.new_date}
                      onClick={() => console.log(item?._id)}
                    />
                  )
                })}
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