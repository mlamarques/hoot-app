import { useContext } from 'react'
import {SearchStyle} from './styles'
import Nav from '../../components/Nav/Nav'
import { UserContext } from '../../context/UserContext'


export default function Search(props) {

  const { user } = useContext(UserContext)

  return (
    <div className="search-page">
      <Nav username={user.username} />
      <SearchStyle>
      <div className="main__container">
        <div className="main__header">
          <h1 onClick={props.handleLogout} >Search</h1>
        </div>
        <div className="feed__container">
          <div className="hoot--individual__container">
            <h2>Search here...</h2>
          </div>
        </div>
      </div>
      </SearchStyle>
    </div>
  );
}