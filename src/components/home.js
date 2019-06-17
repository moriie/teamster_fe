import React, { useState, useContext } from 'react';
import Navbar from '../containers/navbar'
import Sidebar from '../containers/sidebar'
import Interface from '../containers/interface'


const Home = () => {

    const [sidebar, setSidebar] = useState(false)

    const viewSidebar = () => {
        return sidebar ? < Sidebar /> : null
    }

    const setGrid = () => {
        return sidebar ? 'home' : 'home no-sidebar'
    }

    return <div className={setGrid()}>
        < Navbar />
        {viewSidebar()}
        < Interface />
    </div>
}

export default Home