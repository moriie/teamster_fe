import React, { useState, useEffect, createContext, useReducer } from 'react';
import { Routes } from './routes'
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import './App.css';

export const AuthUser = createContext([{}, ()=>{}])

export function App() {

  const [user, setUser] = useState({})

  useEffect(()=>{
    // if (document.cookie && !document.cookie.match(/undefined/)){
        fetch('http://localhost:3000/session', {
            headers: {
                "Authorization": document.cookie
            }
        })
        .then(res=>res.json())
        .then(json=>setUser({...user, ...json}))
    }, [])
  // }, [])

  return (
    <AuthUser.Provider value={[user, setUser]}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <div className="App">
              < Routes />
        </div>
      </MuiPickersUtilsProvider>
    </AuthUser.Provider>
  );
}

 
