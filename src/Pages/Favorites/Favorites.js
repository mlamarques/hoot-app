import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HootCard from '../../components/HootCard/HootCard';
import LoadingFeed from '../../components/LoadingFeed/LoadingFeed';
import { useUserState } from '../../context/UserContext';
import { api } from '../../services/api';
import { FavoritesStyle } from './styles';

export default function Favorites(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [likedHoots, setLikedHoots] = useState([]);

  const { user, setUser } = useUserState();
  let navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    api
      .get(`/${user._id}/likes/`)
      .then((res) => {
        setLikedHoots(res.data.hoots_list);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  function handleLikeClick(value) {
    console.log('like clicked');
    api
      .post('/hoot/like', { userId: user._id, hootId: value })
      .then((res) => {
        setUser((prev) => ({
          ...prev,
          likes: res.data.user_likes,
        }));
      })
      .then(() => {})
      .catch((err) => console.log(err));
  }

  function handleIsHootLiked(hootId) {
    return user?.likes?.includes(hootId) ? true : false;
  }

  return (
    <div className="favorites-page" style={{ height: '100%' }} onClick={() => setIsLoading(true)}>
      <FavoritesStyle>
        <div className="main__container">
          <div className="main__header">
            {props.windowSize.width <= 500 &&
            <div className="user--avatar__container" onClick={props.handleHeaderAvatarClick}>
              <div className="user--avatar__wrapper">
                  <img className="user--avatar" src={user.img_url} alt="img" />
              </div>
            </div>}
            <h1>Favorites</h1>
          </div>
          <div className="feed__container">
            {isLoading && <LoadingFeed />}
            <div className="hoots_container">
              {likedHoots.length === 0 ? (
                <span>No favorite hoots yet</span>
              ) : (
                likedHoots?.map((item) => {
                  return (
                    <HootCard
                      key={item?._id}
                      hootId={item?._id}
                      userId={user._id}
                      box_content={item?.box_content}
                      likesCount={item?.likes_count}
                      commentsCount={item?.comments_count}
                      img_url={item?.owner?.img_url}
                      username={item?.owner?.username}
                      time={item?.date_formatted}
                      isLiked={() => handleIsHootLiked(item?._id)}
                      handleLikeClick={() => handleLikeClick(item?._id)}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
      </FavoritesStyle>
    </div>
  );
}
