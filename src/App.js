import {React, useState} from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import Favorites from './Pages/Favorites/Favorites'
import Home from './Pages/Home/Home'
import Search from './Pages/Search/Search'
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
          {hasSigned && <Nav />}
          <Routes>
            <Route path="/login" element={<Login handleSignIn={handleSignIn}/>} />
            <Route path="/signup" element={<SignUp handleSignIn={handleSignIn}/>} />
            <Route path="/favorites" element={<Favorites handleLogout={logout} />} />
            <Route path="/search" element={<Search handleLogout={logout} />} />
            <Route path="/" element={!hasSigned ? <Navigate to="/login" /> : <Home handleLogout={logout} />} />
            <Route path="*" element={<Home handleLogout={logout} />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
