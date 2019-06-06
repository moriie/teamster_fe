import React, { useState } from 'react';
import Login from './components/login'
import Home from './components/home'

import './App.css';

function App() {

  const [view, setView] = useState(false)
  // Remove hook and use store/redux?
  //https://auth0.com/blog/handling-authentication-in-react-with-context-and-hooks/

  const changeView = () => {
    setView(!view)
  }

  const handleDisplay = () => {
    if (!view){
      return < Login changeView={changeView} />
    }
    else{
      return < Home changeView={changeView} />
    }
  }

  return (
    <div className="App">
      {handleDisplay()}
    </div>
  );
}

export default App;
