import {React, useState} from 'react';
import { BrowserRouter, Navigate, Routes, Route, Redirect } from 'react-router-dom';
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import Favorites from './Pages/Favorites/Favorites'
import Home from './Pages/Home/Home'
import Search from './Pages/Search/Search'
import ChangePassword from './Pages/ChangePassword/ChangePassword'
import Account from './Pages/Account/Account'
import AnotherSetting from './Pages/AnotherSetting/AnotherSetting'
import './App.css';
import GlobalStyles from './assets/GlobalStyles'
import Nav from './components/Nav/Nav'

function App() {
  const [hasSigned, setHasSigned] = useState(false)

  function handleSignIn() {
    setHasSigned(true)
  }

  function logout() {
    setHasSigned(false)
  }

  return (
    <div className="App">
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route path="/settings/" element={<Navigate to="/settings/account" />} />
          <Route path="/settings/another" element={<AnotherSetting handleSignIn={handleSignIn}/>} />
          <Route path="/settings/account" element={<Account handleSignIn={handleSignIn}/>} />
          <Route path="/settings/password" element={<ChangePassword handleSignIn={handleSignIn}/>} />
          <Route path="/login" element={<Login handleSignIn={handleSignIn}/>} />
          <Route path="/signup" element={<SignUp handleSignIn={handleSignIn}/>} />
          <Route path="/favorites" element={<Favorites handleLogout={logout} />} />
          <Route path="/search" element={<Search handleLogout={logout} />} />
          <Route path="/home" element={<Home handleLogout={logout} />} />
          <Route path="/" element={!hasSigned ? <Navigate to="/login" /> : <Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
