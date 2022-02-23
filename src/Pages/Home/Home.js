import {HomeStyle} from './styles'
import Loading from '../../components/Loading/Loading'
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useParams } from 'react-router-dom';
import { useUserState } from '../../context/UserContext';
import HootCard from '../../components/HootCard/HootCard';

export default function Home(props) {
  const [isLoading, setIsLoading] = useState(false)
  const [userFeed, setUserFeed] = useState([])

  let params = useParams();

  const { user } = useUserState()

  useEffect(() => {
    setIsLoading(true)
    
    api.get(`/feed/${user.id}`)
      .then(res => {
        setUserFeed(res.data.hoots)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
        setIsLoading(false)
      })
  }, [])

  return (
    <div className="home-page">
      {isLoading && <Loading />}
        {/* -------------------------- Main -------------------------- */}
      <HomeStyle>
        <div className="main__container">
          <div className="main__header">
            <h1>Home</h1>
          </div>
          <div className="feed__container">
            <div className="hoots_container" onClick={() => console.log(userFeed)}>
              {userFeed.length === 0 ?
              <span>No feed</span>
              :
              userFeed.map(item => {
                return (
                  <HootCard
                    key={item?._id} 
                    box_content={item?.box_content} 
                    img_url={item?.owner_avatar} 
                    username={item?.owner_username}  
                    time={item?.new_date}
                  />
                )
              })}
            </div>
          </div>
        </div>
        {/* -------------------------- Alt -------------------------- */}
        <div className="alternative__container">
        </div>
      </HomeStyle>
    </div>
  );
}