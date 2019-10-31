import React from 'react'
import { MDBContainer, MDBCol, 
    MDBRow, MDBCard, MDBBtn,
    MDBTable, MDBTableHead, MDBTableBody
} from 'mdbreact'
import Breadcr from './Breadcr'

const Runner = () =>{
    return(
        <div>
            <Breadcr bheader="Service Provider" bcurrent="Runner" />
                <div className="runner-container">
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol>
                                
                                <h1 className="run-header">
                                    tasks
                                </h1>
                                <p className="grey-text ml-3">
                                    Service Provider can choose to accept to 
                                    do this
                                </p>
                                
                            </MDBCol>

                            <MDBCol>
                                <MDBCard className="run-card-container">
                                    <h4 className="text-center">
                                        Do you wish to accept this 
                                        booking?
                                    </h4>
                                    <div>
                                    <MDBTable borderless>
                                        <MDBTableHead>
                                            <tr>
                                            <th>Client</th>
                                            <th>Fee</th>
                                            <th>Service</th>
                                            <th>Total</th>
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                            <tr>
                                            <td>Mark</td>
                                            <td><span>&#8369;</span> 1700</td>
                                            <td><span>&#8369;</span> 80</td>
                                            <td><span>&#8369;</span> 1780</td>
                                            </tr>
                                        </MDBTableBody>
                                        </MDBTable>
                                        </div>
                                    <p className="grey-text">

                                    </p>
                                    <div className="run-btn-container">
                                        <MDBRow>
                                            <MDBCol>
                                                <MDBBtn color="success"
                                                href="/runner-success"
                                                >
                                                    Accept
                                                </MDBBtn>
                                            </MDBCol>
                                            <MDBCol>
                                                <MDBBtn color="danger">
                                                    Decline
                                                </MDBBtn>
                                            </MDBCol>
                                        </MDBRow>
                                    </div>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
        </div>
    )
}
export default Runner