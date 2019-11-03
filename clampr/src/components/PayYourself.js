import React from 'react'
import { MDBContainer, MDBJumbotron, MDBBtn,
            MDBCol, MDBRow, MDBIframe
    } from 'mdbreact'
import Breadcr from './Breadcr'
const PayYourself = () =>{
    return(
        <div>
            <Breadcr bheader="Let us help you" bcurrent="LTO" />
            <MDBContainer className="mt-5 text-center">
                <MDBRow>
                    <MDBCol>
                    <MDBJumbotron>
                        <h2 className="h1 display-4" style={{'text-transform':'uppercase'}}>
                            LTO Office Location
                        </h2>
                        <p className="grey-text">
                        You can go here, it is where the LTO Office is located, where you can pay them.
                        </p>
                        <MDBIframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d15701.611432309559!2d123.87461454550392!3d10.30960857891245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x33a9995621d061f9%3A0xfc10940a2e4e48a0!2sLand%20Transportation%20Office%20Region%20VII%2C%20Natalio%20B.%20Bacalso%20Ave%2C%20Cebu%20City%2C%20Cebu!3m2!1d10.2982183!2d123.89288959999999!5e0!3m2!1sen!2sph!4v1572441759008!5m2!1sen!2sph" />
                    </MDBJumbotron>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}
export default PayYourself