import React from 'react'
import { MDBContainer, MDBCol, 
    MDBRow, MDBCard, MDBBtn,
    MDBTable, MDBTableHead, MDBTableBody,
    MDBAlert, MDBAnimation, MDBIcon
} from 'mdbreact'
import Breadcr from './Breadcr'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const notifySuccess = () => {
    toast.success(
    <div>
    <MDBIcon size='lg' icon="check-circle" />
    <span className="success-h"> Transaction Successful!</span></div>, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose:1200
      });
}
const successfulTrans = () =>{
    setTimeout(()=>{
        notifySuccess()
    },1000)
}


const SuccessRunner = () =>{
    
    return(
      <div>
        <Breadcr bheader="Service Provider" bcurrent="Runner" />
            <ToastContainer/>
            <div className="runner-container">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol>
                            
                            <h1 className="run-header">
                                tasks
                            </h1>
                            <p className="grey-text ml-3">
                                Service Provider has done its job and now 
                                for confirmation
                            </p>
                            
                        </MDBCol>

                        <MDBCol>
                        <div className="p-1">
                                    <MDBAnimation type="slideInUp">
                                        <MDBAlert color="info" dismiss>
                                            <strong>Holy Moly! </strong>Good thing you helped out that poor guy
                                        </MDBAlert>
                                    </MDBAnimation>
                                </div>
                            <MDBCard className="run-card-container">
                                <h4 className="text-center">
                                    Finished Processing?
                                </h4>
                                <p className="grey-text">

                                </p>
                                <div className="run-btn-container">
                                    <MDBRow>
                                        <MDBCol>
                                            <MDBBtn onClick={()=>{successfulTrans()}} color="success">
                                                Approved
                                            </MDBBtn>
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBBtn color="danger">
                                                Home
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
export default SuccessRunner