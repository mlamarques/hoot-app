import {SearchStyle} from './styles'

export default function Search(props) {
    return (
      <SearchStyle>
        <div className="Search-page">
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
        </div>
      </SearchStyle>
    );
  }