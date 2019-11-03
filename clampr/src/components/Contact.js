import React from "react"
import Breadcr from "./Breadcr"
import { MDBIcon, MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact'

const Contact = () =>{
    document.title = "Contact us, Alpaca Squad out"
    return(
        <div>
            <Breadcr bheader="Contact Us" bcurrent="Contact"/>
            <div className="contact-container">
            <MDBContainer>
                <h1 className="f-header text-center">
                    Contact us
                </h1>
                <hr className="hr-features"/>
                <p className="text-center grey-text w-responsive mx-auto pb-5">
                   If you need to contact us, need a demo or just simply need to 
                   get in touch with us or our developers. Just fill out the necessary
                   details and we'll get right on it.
                </p>
                <MDBRow>
                    <MDBCol md="9" className="md-0 mb-5">
                    <form>
                        <MDBRow>
                        <MDBCol md="6">
                            <div className="md-form mb-0">
                            <MDBInput type="text" id="contact-name" label="Your name" />
                            </div>
                        </MDBCol>
                        <MDBCol md="6">
                            <div className="md-form mb-0">
                            <MDBInput
                                type="text"
                                id="contact-email"
                                label="Your email"
                            />
                            </div>
                        </MDBCol>
                        </MDBRow>
                        <MDBRow>
                        <MDBCol md="12">
                            <div className="md-form mb-0">
                            <MDBInput type="text" id="contact-subject" label="Subject" />
                            </div>
                        </MDBCol>
                        </MDBRow>
                        <MDBRow>
                        <MDBCol md="12">
                            <div className="md-form mb-0">
                            <MDBInput
                                type="textarea"
                                id="contact-message"
                                label="Your message"
                            />
                            </div>
                        </MDBCol>
                        </MDBRow>
                    </form>
                    <div className="text-center text-md-left">
                        <MDBBtn color="primary" size="md">
                        Send
                        </MDBBtn>
                    </div>
                    </MDBCol>
                    <MDBCol md="3" className="text-center">
                    <ul className="list-unstyled mb-0">
                        <li>
                        <MDBIcon icon="map-marker-alt" size="2x" className="blue-text" />
                        <p>KMC Tower 18th Floor, W Geonzon St, Cebu City, Cebu</p>
                        </li>
                        <li>
                        <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
                        <p>+09 273 410 621</p>
                        </li>
                        <li>
                        <MDBIcon icon="envelope" size="2x" className="blue-text mt-4" />
                        <p>teamalpacas@gmail.com</p>
                        </li>
                    </ul>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>
            </div>
        </div>
    )
}
export default Contact