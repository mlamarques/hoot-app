import { useEffect, useState } from 'react'
import {SearchStyle} from './styles'
import { api } from '../../services/api'
import Loading from '../../components/Loading/Loading'


export default function Search(props) {
  const [searchTerm, setSearchTerm] = useState('')
  const [autoComplete, setAutoComplete] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect( () => {
    setIsLoading(true)
    if (searchTerm.length) {
      try {
        api.post('/user/search', { "term": searchTerm })
          .then(res => {
            setAutoComplete(res.data.list_users)
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
    <div className="search-page">
      <SearchStyle>
      <div className="main__container">
        <div className="main__header">
          <h1>Search</h1>
        </div>
        <div className="feed__container">
          <div className="hoot--individual__container">
            <h2>Search here...</h2>
            <input type="text" value={searchTerm} onChange={handleChange}/>
            <div className="results__container">
              {isLoading && <Loading />}
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
              {(autoComplete.length === 0 && searchTerm.length > 0) && 
                <ul className="user-card_container">
                  <span>No user found</span>
                </ul>
              }
            </div>
          </div>
        </div>
      </div>
      </SearchStyle>
    </div>
  );
}