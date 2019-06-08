import React, { useReducer } from 'react';
import Login from './components/login'
import Home from './components/home'
import rootReducer from './reducers/rootreducer'

import './App.css';



function App() {

  const AuthUser = React.createContext()

  const [view, setView] = useState(false)

  // Remove hook and use store/redux?
  //https://auth0.com/blog/handling-authentication-in-react-with-context-and-hooks/

  const changeView = () => {
    setView(!view)
  }

  const handleDisplay = () => {
    if (!view){
      return < Login />
    }
    else{
      return < Home />
    }
  }

  return (
    <div className="App">
    <AuthUser.Provider value={{view, changeView}}>
        {handleDisplay()}
    </AuthUser.Provider>
    </div>
  );
}

export default App;
