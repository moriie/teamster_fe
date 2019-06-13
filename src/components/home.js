import React, { useContext } from 'react';
import Navbar from '../containers/navbar'
import Sidebar from '../containers/sidebar'
import Interface from '../containers/interface'


const Home = () => {

    return <div className='home'>
        < Navbar />
        < Sidebar />
        < Interface />
    </div>
}

export default Home