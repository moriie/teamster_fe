import React, { useState, useEffect, createContext, useReducer } from 'react';
import { Routes } from './routes'

import './App.css';

export const AuthUser = createContext({}, ()=>{})

export function App() {

  const [user, setUser] = useState({})

  useEffect(()=>{
    if (document.cookie && !document.cookie.match(/undefined/)){
        fetch('http://localhost:3000/session', {
            headers: {
                "Authorization": document.cookie
            }
        })
        .then(res=>res.json())
        // .then(json=>console.log(json))
        .then(json=>setUser({...user, ...json}))
    }
  }, [])

  return (
    <AuthUser.Provider value={[user, setUser]}>
      <div className="App">
            < Routes />
      </div>
    </AuthUser.Provider>
  );
}

 


// import rootReducer from './reducers/rootreducer'


  // const [selection, setSelection] = useState(true)

  // Remove hook and use store/redux?
  //https://auth0.com/blog/handling-authentication-in-react-with-context-and-hooks/

  // const changeView = () => {
  //   setView(!view)
  // }

  // const handleDisplay = () => {
  //   if (selection){
  //     return <div>

  //       </div>
  //   }
  //   else{
  //     return null
  //   }
  // }

    // const [formSelector, setForm] = useState('')

  // const handleClick = (e) => {
  //   setForm(e.target.name)
  // }

  // const displaySelector = () => {
  //   switch (formSelector){
  //     case 'login':
  //       return < Login />
  //     break;
  //     case 'signup':
  //       return < Signup />
  //     break;
  //     default: 
        // return <div className='splash'>
        //   <img src='http://hashtag-bg.com/wp-content/uploads/2018/08/berlin-background-resume-wallpapers-backgrounds.jpg' className='bg' alt=''/>
        //   <div className='blur-box'>
            // {/* <button name='login' onClick={handleClick}>Login</button> */}
            // {/* <button name='signup' onClick={handleClick}>Signup</button> */}
            // {/* < NavLink to='/login'>Login</ NavLink> */}
            // {/* < NavLink to='/signup'>Signup</ NavLink> */}
        //   </div>
        // </div>
  //   }
  // }

// import Login from './components/login'
// import Signup from './components/signup'
// import Home from './components/home'