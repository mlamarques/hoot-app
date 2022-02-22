import { UserStyle } from './styles'
import Loading from '../../components/Loading/Loading'
import { useNavigate, useParams  } from 'react-router-dom'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'
import HootCard from '../../components/HootCard/HootCard'
import IconArrowBack from '../../assets/icons/IconArrowBack'
import IconMessages from '../../assets/icons/IconMessages'
import { useUserState } from '../../context/UserContext'

export default function User(props) {
  const [isLoading, setIsLoading] = useState(false)
  const [isFollowing, setIsFollowing] = useState()
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

  const { user, setUser } = useUserState()
  const followBtn = document.querySelector('[data-btn]')

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
    
    user.follows.includes(userData._id) ? setIsFollowing(true) : setIsFollowing(false)
    
  }, [params, user.follows, userData._id])

  function handleFollowClick(event) {

    const data = {
      username: user.username,
      followId: userData._id
    }

    if (!isFollowing) {
      try {
        api
          .post('/follow', data)
          .then((res) => {
            localStorage.setItem("user", JSON.stringify({...user, follows: res.data.follows}))
            setUser(prev => ({
              ...prev,
              follows: res.data.follows
            }))
            // setIsFollowing(true)
            console.log('Success follow')
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
            localStorage.setItem("user", JSON.stringify({...user, follows: res.data.follows}))
            setUser(prev => ({
              ...prev,
              follows: res.data.follows
            }))
            console.log('Success unfollow')
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
      followBtn.innerHTML = '<span>Unfollow</span>'
    }
    
  }

  function handleMouseLeave(event) {
    if (isFollowing) {
      followBtn.classList.remove('unfollow-btn')
      followBtn.classList.add('follow-btn')
      followBtn.innerHTML = '<span>Following</span>'
    }
    if (!isFollowing) {
      followBtn.classList.remove('unfollow-btn')
      followBtn.classList.add('follow-btn')
      followBtn.innerHTML = '<span>Follow</span>'
    }
  }

  return (
    <div className="user-page">
      
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
                  <div className="follow-btn" onClick={() => console.log('Edit Profile')}>
                    <span>Edit profile</span>
                  </div>
                </div>
                :
                <div className="profile--options__container" onClick={() => {
                  console.log(user.follows)
                  console.log(isFollowing)
                  }}>
                  <div className="message-btn" onClick={() => console.log('Message User')}>
                    <div className="logo-item">
                      <IconMessages /> 
                    </div>
                  </div>
                  <div className="follow-btn" data-btn="follow" onClick={handleFollowClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {isFollowing ? 
                      <span>Following</span>
                      :
                      <span>Follow</span>
                    }
                  </div>
                </div>
                }
              </div>
              <div className="profile--info__container">
                <h2>{userData.username}</h2>
                <h3>Joined: {userData.date_formatted_simple}</h3>
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