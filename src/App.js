import {React, useState} from 'react';
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import './App.css';
import GlobalStyles from './assets/GlobalStyles'

function App() {
  const [hasSigned, setHasSigned] = useState(false)

  function handleSignIn() {
    setHasSigned(true)
  }

  function logout() {
    setHasSigned(false)
  }

  function handleKeyPress(event) {
    if(event.key === 'Enter'){
      handleSignIn()
    }
  }

  return (
    <div className="App">
      <GlobalStyles/>
      {hasSigned ? <Home handleLogout={logout} /> : <Login handleNext={handleSignIn} handleKeyPress={handleKeyPress}  />}
    </div>
  );
}

export default App;
