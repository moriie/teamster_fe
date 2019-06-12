import React, { useContext } from 'react';
import Navbar from '../containers/navbar'
import Sidebar from '../containers/sidebar'


const Home = () => {
    // debugger;
    return <div className='home'>
        < Navbar />
        < Sidebar />
    </div>
}

export default Home