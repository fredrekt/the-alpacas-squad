import React from 'react'
import Breadcrumb from './Breadcrumb'
import WelcomeSection from './Jumbotron'

const Home = () =>{
    return(
        <div>
            <div className="home-container">
                <Breadcrumb bheader="Unfortunate events" />
                <WelcomeSection/>
            </div>
        </div>
    )
}
export default Home