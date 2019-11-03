import React from 'react'
import { MDBIcon, MDBJumbotron, MDBRow, MDBCol,
    MDBBtn, MDBCard, MDBCardText, MDBContainer, 
    MDBCardBody, MDBCardTitle
} from 'mdbreact'
const AppInformation = () =>{
    return(
        <div>
            <MDBContainer className="mt-5 text-center">
                <MDBRow>
                    <MDBCol>
                    <MDBJumbotron className="home-container3">
                        <MDBCardBody>
                        <MDBCardTitle style={{'font-size':'40px'}} className="f-header">
                            ABOUT CLAMPR
                        </MDBCardTitle>
                        <p className="blue-text font-weight-bold">
                            A powerful and free web application 
                        </p>
                        <MDBCardText className="font-weight-500">
                            CIMUR is a Web based application, developed for vehicle owners especially 
                            Filipinos to have an easy and hassle free transaction with the LTO. These 
                            vehicles that belongs to the owner is being clamped and must need to pay 
                            a fee to get their vehicle unclamped. CIMUR helps people and has an <a href="https://www.impact2050.com/impact-hackathon/">impact </a> 
                            on society. 
                        </MDBCardText>
                        <hr className="my-4" />
                        <div className="pt-2">
                            <MDBBtn
                            
                            color="primary"
                            className="waves-effect"
                            >
                            Get started 
                            </MDBBtn>
                        </div>
                        </MDBCardBody>
                    </MDBJumbotron>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}
export default AppInformation