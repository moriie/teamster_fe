import React, { useState, useEffect, createContext } from 'react';
import { Routes } from './routes'
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import './App.css';

export const AuthUser = createContext([{}, ()=>{}])
export const ViewState = createContext([{}, ()=>{}])
export const fetchURL = 'https://teamsterbe-env.hnmf4266v7.us-east-1.elasticbeanstalk.com';

export function App() {

  const [user, setUser] = useState({})
  const [view, setView] = useState('')

  useEffect(()=>{
        fetch(`${fetchURL}/session`, {
            headers: {
                "Authorization": document.cookie
            }
        })
        .then(res=>res.json())
        .then(json=>setUser({...user, ...json}))
    }, [])

  return (
    <AuthUser.Provider value={[user, setUser]}>
      <ViewState.Provider value={[view, setView]}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
        <div className="App">
              < Routes />
        </div>
      </MuiPickersUtilsProvider>
      </ViewState.Provider>
    </AuthUser.Provider>
  );
}

 
