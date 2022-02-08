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
          <Route path="/settings/another" element={<AnotherSetting />} />
          <Route path="/settings/account" element={<Account />} />
          <Route path="/settings/password" element={<ChangePassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search" element={<Search />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
