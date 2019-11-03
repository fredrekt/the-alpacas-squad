import React from 'react'
import { MDBJumbotron, MDBContainer, MDBBtn, 
    MDBCol, MDBRow } from 'mdbreact'

const WelcomeSection = () =>{
    return(
        <MDBContainer style={{'margin-bottom':'-1.6%'}} className="mt-5 text-center">
            <MDBRow>
                <MDBCol>
                <MDBJumbotron>
                    <h2 className="h1 display-3">
                        You have been clamped!
                    </h2>
                    <p className="lead">
                        Sorry for the inconvenience, but in accordance to <a href="https://www.lawphil.net/statutes/repacts/ra1964/ra_4136_1964.html"> Republic Act No. 4136 </a>
                        , your vehicle has been illegally parked and therefore has been clamped. Please pay the due and your vehicle will be unclamped. 
                        You can either choose to go to the LTO'S office and pay them yourself or let us do our magic!
                    </p>
                    <hr className="my-2" />
                    <p className="grey-text">
                    This web application is developed and designed to handle these
                    situations.
                    </p>
                    <p className="lead">
                        <MDBRow>
                            <MDBCol>
                                <MDBBtn 
                                outline
                                href="/use-service"
                                color="success">
                                Use our Service
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol>
                                <MDBBtn 
                                outline
                                href="/pay-lto"
                                color="danger">
                                Pay Yourself
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </p>
                </MDBJumbotron>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}
export default WelcomeSection 