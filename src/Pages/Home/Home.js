import {HomeStyle} from './styles'
import Loading from '../../components/Loading/Loading'
import { useState } from 'react';

export default function Home(props) {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="home-page">
      {isLoading && <Loading />}
        {/* -------------------------- Main -------------------------- */}
      <HomeStyle>
        <div className="main__container">
          <div className="main__header">
            <h1 onClick={props.handleLogout} >Home</h1>
          </div>
          <div className="feed__container">
            <div className="hoot--individual__container"></div>
            <div className="hoot--individual__container"></div>
            <div className="hoot--individual__container"></div>
          </div>
        </div>
        {/* -------------------------- Alt -------------------------- */}
        <div className="alternative__container">
        </div>
      </HomeStyle>
    </div>
  );
}