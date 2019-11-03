import React, {Component} from 'react'
import Breadcr from './Breadcr'
import Features from './Features'
import Team from './Team'
import AppInformation from './AppInformation'

class About extends Component{
    componentDidMount(){
        document.title = 'About us'
    }
    render(){
        return(
            <div>
                <Breadcr bheader="About CIMUR" bcurrent="About"/>
                <div className="about-container">
                    <AppInformation/>
                    <Features/>
                    <Team/>
                </div>
            </div>
        )
    }
}

export default About