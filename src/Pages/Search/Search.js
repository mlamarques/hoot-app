import { useEffect, useState } from 'react'
import {SearchStyle} from './styles'
import { api } from '../../services/api'
import LoadingFeed from '../../components/LoadingFeed/LoadingFeed'
import LoadingSimple from '../../components/LoadingSimple/LoadingSimple'
import IconSearchInput from '../../assets/icons/IconSearchInput'
import IconClose from '../../assets/icons/IconClose'
import UserCardSearch from '../../components/UserCardSearch/UserCard'
import { useUserState } from '../../context/UserContext'


export default function Search(props) {
  const [searchTerm, setSearchTerm] = useState('')
  const [autoComplete, setAutoComplete] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const { user } = useUserState()

  useEffect( () => {
    setIsLoading(true)
    if (searchTerm.length) {
      try {
        api.post('/user/search', { "term": searchTerm })
          .then(res => {
            setAutoComplete(res.data.list_users)
            setIsLoading(false)
          })
          .catch ((err) => {
            console.log('Invalid character')
            setIsLoading(false)
          })
      } catch (error) {
        console.error(error)
        setIsLoading(false)
      }
    } else {
      setAutoComplete([])
      setIsLoading(false)
    }
  }, [searchTerm])

  function handleChange(event) {
    const { value } = event.target
    setSearchTerm(value)
  }

  return (
    <div className="search-page" style={{ height: '100%' }}>
      <SearchStyle>
        <div className="main__container">
          <div className="main__header">
            {props.windowSize.width <= 500 && (
              <div
                className="user--avatar__container"
                onClick={props.handleHeaderAvatarClick}
              >
                <div className="user--avatar__wrapper">
                  <img className="user--avatar" src={user.img_url} alt="img" />
                </div>
              </div>
            )}
            <h1>Search</h1>
          </div>
          <div className="feed__container">
            <div className="hoot--individual__container">
              <div className="search__container">
                <div className="search--logo__container">
                  <IconSearchInput />
                </div>
                <div className="input--wrapper">
                  {searchTerm.length === 0 && (
                    <div className="label__container">
                      <span>Search user</span>
                    </div>
                  )}
                  <input
                    className="search--input"
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                  />
                </div>
                {searchTerm.length !== 0 && (
                  <div className="clean-input__container">
                    <div
                      className="clean-input__background"
                      onClick={() => setSearchTerm('')}
                    >
                      <IconClose />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="results__container">
              <div className="loading__container">
                {isLoading && <LoadingSimple />}
              </div>
              {autoComplete.length > 0 && (
                <div className="user-card_container">
                  {autoComplete.map((item) => {
                    return (
                      <UserCardSearch
                        key={item?._id}
                        username={item?.username}
                        img_url={item?.img_url}
                        followValue={
                          user?.following.includes(item?._id)
                            ? 'Following'
                            : 'Follow'
                        }
                      />
                    );
                  })}
                </div>
              )}
              {autoComplete.length === 0 && searchTerm.length > 0 && (
                <ul className="user-card_container">
                  <span>No user found</span>
                </ul>
              )}
            </div>
          </div>
        </div>
      </SearchStyle>
    </div>
  );
}