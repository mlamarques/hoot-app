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

    api.get(`/user/${params.user}`)
      .then(res => {
        if (res.data.message) {
          console.log(res.data.message)
          setIsUserFound(false)
          setIsLoading(false)
        } else {
          setIsUserFound(true)
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
          setIsLoading(false)
        }
      })
      .catch(err => {
        console.log(err)
        setIsLoading(false)
      })
      
    return
    
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
                <span>{userData._id}</span>
                <br />
              </div>
              <div className="hoots_container">
                {userData.list_hoots.map(item => {
                  return (
                    <div
                      key={item?._id}
                      className="hoot-card"
                      onClick={() => console.log(item?._id)}
                    >
                      {item?.box_content}
                      {item?.new_date}
                    </div>
                  )
                })}
              </div>
            </div>
            <HootCard box_content={'asdhuasudhashduashduashd aushduahsduhsa asuhd'} img_url={userData?.img_url} username={userData?.username} time={userData?.list_hoots[0]?.new_date} />
            <HootCard box_content={'asdhuasudhashduashduashd aushduahsduhsa asuhd'} img_url={userData?.img_url} username={'asdasdddddddddddfffffffffffffgggg'} time={userData?.list_hoots[0]?.new_date} />
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