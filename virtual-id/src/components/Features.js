import React from 'react'
import { MDBCol, MDBIcon, MDBRow,
        MDBContainer
} from 'mdbreact'
const Features = () =>{
    return(
        <div>
            <h1 className="f-header text-center">
                Awesome Features
            </h1>
            <hr className="hr-features"/>

            <MDBContainer>
            <section className="my-5">
                <p className="lead grey-text w-responsive text-center mx-auto mb-5">
                Developed and Designed to make the users feel comfortable
                </p>

                <MDBRow>
                <MDBCol md="4">
                    <MDBRow className="mb-3">
                    <MDBCol size="2">
                        <MDBIcon
                        icon="flag-checkered"
                        size="2x"
                        className="deep-purple-text"
                        />
                    </MDBCol>
                    <MDBCol size="10">
                        <h5 className="font-weight-bold mb-3">International</h5>
                        <p className="grey-text">
                        This Web Application has been developed for local LTO but can be
                        adapted Globally.
                        </p>
                    </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3">
                    <MDBCol size="2">
                        <MDBIcon icon="flask" size="2x" className="deep-purple-text" />
                    </MDBCol>
                    <MDBCol size="10">
                        <h5 className="font-weight-bold mb-3">Experimental</h5>
                        <p className="grey-text">
                        This is a solution to automate Government Penalties and 
                        implement them.
                        </p>
                    </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol md="4" className="text-name">
                    <img
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Mockups/Transparent/Small/iphone-portfolio1.png"
                    alt=""
                    />
                </MDBCol>
                <MDBCol md="4">
                    <MDBRow className="mb-3">
                    <MDBCol size="2">
                        <MDBIcon icon="bolt" size="2x" className="deep-purple-text" />
                    </MDBCol>
                    <MDBCol size="10">
                        <h5 className="font-weight-bold mb-3">Rapid</h5>
                        <p className="grey-text">
                        When the user gets clamped, it response after payment is rapid.
                        </p>
                    </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3">
                    <MDBCol size="2">
                        <MDBIcon icon="magic" size="2x" className="deep-purple-text" />
                    </MDBCol>
                    <MDBCol size="10">
                        <h5 className="font-weight-bold mb-3">Magical</h5>
                        <p className="grey-text">
                        Before you know it you are already done and have paid for 
                        your mistakes.
                        </p>
                    </MDBCol>
                    </MDBRow>
                </MDBCol>
                </MDBRow>
      </section>
      </MDBContainer>
        </div>
    )
}
export default Features