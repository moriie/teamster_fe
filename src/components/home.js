import React, { useState, createContext } from 'react';
import Navbar from '../containers/navbar'
import Sidebar from '../containers/sidebar'
import Interface from '../containers/interface'

export const ViewState = createContext([{}, ()=>{}])

const Home = () => {

    const [sidebar, setSidebar] = useState(false)
    const [view, setView] = useState('')

    const viewSidebar = () => {
        return sidebar ? < Sidebar /> : null
    }

    const setGrid = () => {
        return sidebar ? 'home' : 'home no-sidebar'
    }
    
    return <div className={setGrid()}>
        <ViewState.Provider value={[view, setView]}>
            < Navbar />
            {viewSidebar()}
            < Interface />
        </ViewState.Provider>
    </div>
}

export default Home