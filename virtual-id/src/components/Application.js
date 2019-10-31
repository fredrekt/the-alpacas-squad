import React, { Component } from 'react'
import Breadcr from './Breadcr'
import { MDBContainer, MDBCard, 
    MDBAlert, MDBAnimation, MDBInput, MDBRow,
    MDBCol, MDBBtn
} from 'mdbreact'

class Application extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <Breadcr bheader="Application for Virtual Identification" bcurrent="Application"/>
                    <div className="container-margin-app">
                        <MDBContainer>
                            <MDBAnimation type="slideInDown">
                                <MDBAlert color="info" dismiss>
                                   Hello there! This is where you get your <strong>Virtual Identification!</strong>
                                </MDBAlert>
                            </MDBAnimation>

                            <div className="app-container">
                                <h3 className="app-header text-left">
                                    Personal Information
                                </h3>
                                <MDBContainer>
                                        <form>
                                            <div className="grey-text">
                                            <MDBRow>
                                            <MDBCol>
                                                <MDBInput
                                                    label="First Name"
                                                    group
                                                    type="text"
                                                    validate
                                                    error="wrong"
                                                    success="right"
                                                />
                                            </MDBCol>
                                            <MDBCol>
                                                <MDBInput
                                                    label="Last Name"         
                                                    group
                                                    type="text"
                                                    validate
                                                    error="wrong"
                                                    success="right"
                                                />
                                            </MDBCol>
                                            </MDBRow>
                                            <MDBInput
                                                label="Last Name"         
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                            />
                                            <MDBInput
                                                label="Last Name"         
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                            />
                                            <MDBInput
                                                label="Last Name"         
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                            />

                                            <MDBInput
                                                label="Email"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                            />
                                            <MDBInput
                                                label="Your password"
                                                
                                                group
                                                type="password"
                                                validate
                                            />
                                            </div>
                                            <div className="text-center">
                                            <MDBBtn color="primary">Register</MDBBtn>
                                            </div>
                                        </form>
                                </MDBContainer>
                            </div>
                        </MDBContainer>
                    </div>
            </div>
        )
    }
}
export default Application