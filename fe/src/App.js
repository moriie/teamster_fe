import React, { useState, useEffect, createContext } from 'react';
import { Routes } from './routes'
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Modal from '@material-ui/core/Modal'
import Link from '@material-ui/core/Link'

import './App.css';

export const AuthUser = createContext([{}, ()=>{}])
export const ViewState = createContext([{}, ()=>{}])
export const fetchURL = 'https://teamster-be.herokuapp.com'
// export const fetchURL = 'http://localhost:3000'

export function App() {

  const [user, setUser] = useState({})
  const [view, setView] = useState('')
  const [modal, setModal] = useState(false)

  useEffect(()=>{

    if (!localStorage.getItem("visited")){
      localStorage.setItem("visited", 1)
    }

    fetch(`${fetchURL}/session`, {
        headers: {
            "Authorization": document.cookie,
        }
    })
    .then(res=>res.json())
    .then(json=>setUser({...user, ...json.user}))
    .catch(()=>{setModal(true)})
  }, [])

  return (
    <AuthUser.Provider value={[user, setUser]}>
      <ViewState.Provider value={[view, setView]}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
        <div className="App">
          < Routes />
          <Modal open={modal} onBackdropClick={()=>setModal(false)}>
            <p className='error'>
              Uh oh! <br />
              Thanks for checking out Teamster! Unfortunately, it looks like the backend is currently offline. For reference, if it's between 8PM-8AM EST, the backend is always offline at these times (Elastic Beanstalk is expensive!). Otherwise, I'm probably currently playing around with settings and have my backend offline while doing so. If you'd like to take a look with the backend running, feel free to send me a message <Link target='_blank' href='https://jayewe.com/contact'>here</Link>. 
            </p>
          </Modal>
        </div>
      </MuiPickersUtilsProvider>
      </ViewState.Provider>
    </AuthUser.Provider>
  );
}

 
