import { useContext, useEffect, useState } from 'react'
import {SearchStyle} from './styles'
import Nav from '../../components/Nav/Nav'
import { useUserState } from '../../context/UserContext'
import { api } from '../../services/api'


export default function Search(props) {
  const [searchTerm, setSearchTerm] = useState('')
  const [autoComplete, setAutoComplete] = useState([])  

  const { user } = useUserState()

  useEffect( () => {
    if (searchTerm.length) {
      try {
        api.post('/user/search', { "term": searchTerm })
          .then(res => {
            setAutoComplete(res.data.list_users)
          })
      } catch (error) {
        console.error(error)
      }
    } else {
      setAutoComplete([])
    }
  }, [searchTerm])

  function handleChange(event) {
    const { value } = event.target
    setSearchTerm(value)
  }

  return (
    <div className="search-page">
      <Nav username={user.username} />
      <SearchStyle>
      <div className="main__container">
        <div className="main__header">
          <h1>Search</h1>
        </div>
        <div className="feed__container">
          <div className="hoot--individual__container">
            <h2>Search here...</h2>
            <input type="text" value={searchTerm} onChange={handleChange}/>
            {autoComplete.length > 0 && (
              <ul className="user-card_container">
                {autoComplete.map(item => {
                  return (
                    <li
                      key={item?._id}
                      className="user-card"
                      onClick={() => console.log(item?._id)}
                    >
                      {item?.username}
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
      </SearchStyle>
    </div>
  );
}