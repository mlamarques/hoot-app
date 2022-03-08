import {React, useEffect, useState} from 'react';
import { Navigate, Routes, Route, useLocation } from 'react-router-dom';
import PrivateRoutes from './private.routes';
import Nav from '../src/components/Nav/Nav'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import Favorites from './Pages/Favorites/Favorites'
import Home from './Pages/Home/Home'
import User from './Pages/User/User';
import Search from './Pages/Search/Search'
import Messages from './Pages/Messages/Messages'
import ComposeHoot from './Pages/ComposeHoot/ComposeHoot'
import ChangePassword from './Pages/ChangePassword/ChangePassword'
import Account from './Pages/Account/Account'
import AnotherSetting from './Pages/AnotherSetting/AnotherSetting'
import { useUserState } from './context/UserContext';
import './App.css';
import GlobalStyles from './assets/GlobalStyles'


function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  const [navWidth, setNavWidth] = useState(275)

  let location = useLocation()
  let state = location.state

  const { user } = useUserState()

  useEffect(() => {

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })

      // let navWidth = document.querySelector('.nav__component')
      setNavWidth(document.querySelector('.nav__component').offsetWidth)
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    
  }, [])

  // Check if server is up

  return (
    <div className="App">
      <GlobalStyles/>
        {(location.pathname !== "/signup" && location.pathname !== "/login") && <Nav username={user.username} img_url={user.img_url} windowSize={windowSize} navWidth={navWidth} />}
        <Routes location={state?.backgroundLocation || location}>
          <Route path="/login" element={<Login windowSize={windowSize} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/"  element={<PrivateRoutes />}>
            <Route path="/settings/another" element={<AnotherSetting />} />
            <Route path="/settings/account" element={<Account />} />
            <Route path="/settings/password" element={<ChangePassword />} />
            <Route path="/settings/" element={<Navigate to="/settings/account" />} />
            <Route path="/messages/:id" element={<Messages />} />
            <Route path="/messages/" element={<Messages />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/search" element={<Search />} />
            <Route path="/home" element={<Home />} />
            <Route path="/:user" element={<User />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Route>
        </Routes>
        {state?.backgroundLocation && (
          <Routes>
            <Route path="/compose/hoot" element={<ComposeHoot />} />
          </Routes>
        )}
    </div>
  );
}

export default App;
