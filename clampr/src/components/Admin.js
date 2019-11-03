import React, { Component } from 'react'
import Breadcr from './Breadcr'
import { MDBContainer, MDBIframe } from 'mdbreact'

class Admin extends Component{
    render(){
        return(
            <div>
                <Breadcr bheader="LTO Clamp Tracker" bcurrent="Admin"/>
                <div className="admin-container">
                    <MDBContainer>
                        <h1 className="text-center">
                            Map of Cebu City
                        </h1>
                        <p className="grey-text text-center">
                            Below is where the LTO sees the cars clamped
                        </p>
                        <MDBContainer className="text-center">
                            <MDBIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125594.97383477949!2d123.83873887393067!3d10.35444112918933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999258dcd2dfd%3A0x4c34030cdbd33507!2sCebu%20City%2C%20Cebu!5e0!3m2!1sen!2sph!4v1572481573149!5m2!1sen!2sph" />
                        </MDBContainer>
                    </MDBContainer>
                </div>
            </div>
        )
    }
}
export default Admin