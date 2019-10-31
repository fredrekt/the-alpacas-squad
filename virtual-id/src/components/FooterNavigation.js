import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact"

const FooterNavigation = () =>{
    return(
        <MDBFooter color="elegant-color" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">The Alpacas</h5>
            <p>
              Five Alpacas lead by Gian Carlo and with sidekick John Romer 
              Donaire and the amazing pretty Fred.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Facebook</a>
                <span className="grey-text">  - facebook account is here</span>
              </li>
              <li className="list-unstyled">
                <a href="#!">Discord</a>
                <span className="grey-text">  - discord channel is here</span>
              </li>
              <li className="list-unstyled">
                <a href="#!">Event</a>
                <span className="grey-text">  - event sponsor are all here</span>
              </li>
              <li className="list-unstyled">
                <a href="#!">Presentation</a>
                <span className="grey-text">  - our business plan is here</span>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> The Alpacas </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    )
}
export default FooterNavigation