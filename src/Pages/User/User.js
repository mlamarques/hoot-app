import { UserStyle } from './styles'
import Loading from '../../components/Loading/Loading'
import { Link, useNavigate, useParams  } from 'react-router-dom'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'
import HootCard from '../../components/HootCard/HootCard'
import IconArrowBack from '../../assets/icons/IconArrowBack'
import IconMessages from '../../assets/icons/IconMessages'
import { useUserState } from '../../context/UserContext'

export default function User(props) {
  const [isLoading, setIsLoading] = useState(false)
  const [isFollowing, setIsFollowing] = useState()
  const [showUnfollow, setShowUnfollow] = useState(false)
  const [userData, setUserData] = useState({
    _id: '',
    username: '',
    img_url: '',
    createdAt: '',
    date_formatted_simple: '',
    following: '',
    list_hoots: []
  })
  const [isUserFound, setIsUserFound] = useState(false)

  let navigate = useNavigate()
  let params = useParams();

  const { user, setUser } = useUserState()
  const followBtn = document.querySelector('[data-btn]')

  let followBtnText

  if (showUnfollow) {
    followBtnText =  <span>Unfollow</span>
    } else {
    isFollowing ? followBtnText = <span>Following</span> : followBtnText = <span>Follow</span>
  }

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
            following: res.data.following,
            following_count: res.data.following_count,
            followers_count: res.data.followers_count,
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
    
    user.following.includes(userData._id) ? setIsFollowing(true) : setIsFollowing(false)
    
  }, [params.user])

  function handleFollowClick(event) {

    const data = {
      userId: user._id,
      followId: userData._id
    }

    if (!isFollowing) {
      try {
        api
          .post('/follow', data)
          .then((res) => {
            // localStorage.setItem("user", JSON.stringify({...user, following: res.data.following}))
            setUser(prev => ({
              ...prev,
              following: res.data.following
            }))
            setIsFollowing(true)
          })
          .catch(err => {
            console.log(err)
            console.log('Error follow')
          })
      } catch (e) {
        console.log(e)
      }
      
    } else {
      try {
        api
          .post('/unfollow', data)
          .then((res) => {
            // localStorage.setItem("user", JSON.stringify({...user, following: res.data.following}))
            setUser(prev => ({
              ...prev,
              following: res.data.following
            }))
            setIsFollowing(false)
          })
          .catch(err => {
            console.log(err)
            console.log('Error follow')
          })
      } catch (e) {
        console.log(e)
      }
    }
    
    handleMouseLeave(event)
  }

  function handleMouseEnter() {
    if (isFollowing) {
      followBtn.classList.add('unfollow-btn')
      followBtn.classList.remove('follow-btn')
      // followBtn.innerHTML = '<span>Unfollow</span>'
      setShowUnfollow(true)
    }
    
  }

  function handleMouseLeave(event) {
    if (isFollowing) {
      followBtn.classList.remove('unfollow-btn')
      followBtn.classList.add('follow-btn')
      // followBtn.innerHTML = '<span>Following</span>'
      setShowUnfollow(false)
    }
    // if (!isFollowing) {
    //   followBtn.classList.remove('unfollow-btn')
    //   followBtn.classList.add('follow-btn')
    //   followBtn.innerHTML = '<span>Follow</span>'
    // }
  }

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

  function handleSendMessage() {
    navigate(`/messages/${user._id}-${userData._id}`)
  }

  return (
    <div className="user-page" style={{height: '100%'}}>
      
        {/* -------------------------- Main -------------------------- */}
      <UserStyle>
        {isLoading && <Loading />}
        {isUserFound ?
        <div className="main__container">
          <div className="main__header">
            <div className="go-back--wrapper" onClick={() => navigate(-1)}>
              <IconArrowBack />
            </div>
            <div className="title__container">
              <h1>{userData.username}</h1>
            </div>
          </div>
          <div className="feed__container">
            <div className="profile__container">
              <div className="profile-top">
                <div className="user--avatar__wrapper">
                    <img className="user--avatar" src={userData.img_url} alt="robot avatar" />
                </div>
                {userData.username === user.username ? 
                <div className="profile--options__container">
                  <div className="follow-btn" onClick={() => {
                    navigate('/settings/account')
                  }}>
                    <span>Edit profile</span>
                  </div>
                </div>
                :
                <div className="profile--options__container">
                  <div className="message-btn" onClick={() => handleSendMessage()}>
                    <div className="logo-item">
                      <IconMessages /> 
                    </div>
                  </div>
                  <div className="follow-btn" data-btn="follow" onClick={handleFollowClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {followBtnText}
                  </div>
                </div>
                }
              </div>
              <div className="profile--info__container">
                <div className="name__container">
                  <h2 >{userData.username}</h2>
                  <span className="username">@{userData.username}</span>
                </div>
                <h3 className="joined__container">Joined: {userData.date_formatted_simple}</h3>
                <div className="follow__container">
                  <Link to={'/home'} className="link-wrapper">
                    <span className="follow-count">{userData.following_count}</span>
                    &nbsp; {/* whitespace here to keep the underline continous */}
                    <span className="follow-text">Following</span>
                  </Link>
                  <Link to={'/home'} className="link-wrapper">
                    <span className="follow-count">{userData.followers_count}</span>
                    &nbsp; {/* whitespace here to keep the underline continous */}
                    <span className="follow-text">Followers</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="feed__container">
            <div className="hoot--individual__container">
              <div className="hoots_container">
                {userData.list_hoots.length === 0 ?
                <span>No hoots yet</span>
                :
                userData.list_hoots.map(item => {
                  return (
                    <HootCard
                      key={item?._id} 
                      hootId={item?._id}
                      userId={userData?._id}
                      box_content={item?.box_content}
                      likesCount={item?.likes_count}
                      commentsCount={item?.comments_count}
                      img_url={userData?.img_url} 
                      username={userData?.username}  
                      time={item?.date_formatted}
                      isLiked={ () => handleIsHootLiked(item?._id) } 
                      handleLikeClick={ () => handleLikeClick(item?._id) }
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