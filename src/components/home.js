import React, { useState, createContext } from 'react';
import Navbar from '../containers/navbar'
import Sidebar from '../containers/sidebar'
import Interface from '../containers/interface'

export const ViewState = createContext([{}, ()=>{}])

const Home = () => {

    const [view, setView] = useState('')
    
    return <div className='home'>
        <ViewState.Provider value={[view, setView]}>
            < Navbar />
            < Interface />
        </ViewState.Provider>
    </div>
}

export default Home