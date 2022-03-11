import {HomeStyle} from './styles'
import LoadingHoot from '../../components/LoadingHoot/LoadingHoot'
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useParams } from 'react-router-dom';
import { useUserState } from '../../context/UserContext';
import HootCard from '../../components/HootCard/HootCard';

export default function Home(props) {
  const [isLoading, setIsLoading] = useState(false)
  const [userFeed, setUserFeed] = useState([])
  

  let params = useParams();

  const { user, setUser } = useUserState()

  useEffect(() => {
    setIsLoading(true)
    
    api.get(`/feed/${user._id}`)
      .then(res => {
        setUserFeed(res.data.hoots)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
        setIsLoading(false)
      })
  }, [])

  function handleLikeClick(value) {
    api.post('/hoot/like', { userId: user._id, hootId: value })
      .then(res => {
        setUser(prev => ({
          ...prev,
          likes: res.data.user_likes
        }))
      })
      .then(() => {})
      .catch(err => console.log(err))
  }

  function handleIsHootLiked(hootId) {
    return user?.likes?.includes(hootId) ? true : false
  }

  

  return (
    <div className="home-page" style={{height: '100%'}}>
        {/* -------------------------- Main -------------------------- */}
      <HomeStyle>
        <div className="main__container" onWheel={() => console.log('scroll')}>
          <div className="main__header">
            {props.windowSize.width <= 500 &&
            <div className="user--avatar__container" onClick={props.handleHeaderAvatarClick}>
              <div className="user--avatar__wrapper">
                  <img className="user--avatar" src={user.img_url} alt="img" />
              </div>
            </div>}
            <h1>Home</h1>
          </div>
          <div className="feed__container">
          {isLoading && <LoadingHoot />}
            <div className="hoots_container">
              {userFeed.length === 0 ?
              <span>No feed</span>
              :
              userFeed?.map(item => {
                return (
                  <HootCard
                    key={item?._id} 
                    hootId={item?._id}
                    userId={user._id}
                    box_content={item?.box_content}
                    isLiked={ () => handleIsHootLiked(item?._id) } 
                    likesCount={item?.likes_count}
                    commentsCount={item?.comments_count}
                    img_url={item?.owner_info?.img_url} 
                    username={item?.owner_info?.username}  
                    time={item?.date_formatted}
                    handleLikeClick={ () => handleLikeClick(item?._id) }
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