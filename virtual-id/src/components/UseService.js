import React, { Component } from 'react'
import { MDBContainer, MDBJumbotron, MDBAnimation,
            MDBBtn, MDBInput, MDBCol, MDBRow, MDBAlert,
            MDBIcon
} from 'mdbreact'
import Breadcr from './Breadcr'

//bs stepper
import 'bs-stepper/dist/css/bs-stepper.min.css';
import Stepper from 'bs-stepper'
import Geolocation from './GeoLocation';
import PayPalButton from './PayPaylButton'

class UseService extends Component{
    constructor(props){
        super(props)
        this.state = {
            user: {
                long: '',
                lat: '',
                plate:''

            },
            payname: 'confirm payment',
            hidestatus: 'visible'
        }
    }
    onSubmit = (event) =>{
        event.preventDefault()
            this.setState({payname: 
                <div class="spinner-border white-text" role="status">
                    <span class="sr-only">Loading...</span>
                </div>,
                hidestatus: 'hidden'
                })

        
    }
    componentDidMount() {
        this.stepper = new Stepper(document.querySelector('#stepper1'), {
          linear: false,
          animation: true
        })
      }
    render(){
        return(
        <div>
                <Breadcr bheader="Payment Processing" bcurrent="Clamp Process"/>
                    <div className="container-margin-app">
                        <MDBContainer>
                            <MDBAnimation type="slideInDown">
                                <MDBAlert color="info" dismiss>
                                   Hello there! This is where you get your <strong>Vehicle Unclamped!</strong>
                                </MDBAlert>
                            </MDBAnimation>

                            <div className="app-container">
                                <h3 className="app-header text-left">
                                    Personal Information
                                </h3>
                                <p style={{'font-size':'15px'}} className="grey-text">
                                    Please fill out the necessary fields
                                </p>
                                <MDBContainer>
                                    <MDBJumbotron>
                                <div>
                                    {/* <Hello name={this.state.name} /> */}
                                    <div id="stepper1" class="bs-stepper">
                                    <div class="bs-stepper-header">
                                        <div class="step" data-target="#test-l-1">
                                        <button class="step-trigger">
                                            <span class="bs-stepper-circle">1</span>
                                            <span class="bs-stepper-label">Location</span>
                                        </button>
                                        </div>
                                        <div class="line"></div>
                                        <div class="step" data-target="#test-l-2">
                                        <button class="step-trigger">
                                            <span class="bs-stepper-circle">2</span>
                                            <span class="bs-stepper-label">Driver Validation</span>
                                        </button>
                                        </div>
                                        <div class="line"></div>
                                        <div class="step" data-target="#test-l-3">
                                        <button class="step-trigger">
                                            <span class="bs-stepper-circle">3</span>
                                            <span class="bs-stepper-label">Payment Option</span>
                                        </button>
                                        </div>
                                    </div>
                                    <div class="bs-stepper-content">
                                        <form onSubmit={this.onSubmit}>
                                        <div id="test-l-1" class="content">
                                            <h5 className="grey-text text-center">
                                                Please press the button below to give your current location
                                            </h5>
                                            <div className="text-center">
                                                <Geolocation/>
                                            </div>
                                            <br/>
                                            <button class="btn btn-primary" onClick={() => this.stepper.next()}>Next</button>
                                        </div>
                                        <div id="test-l-2" class="content">
                                        <h5 className="grey-text text-center">
                                                Please enter your vehicle plate number
                                            </h5>
                                                <div className="text-center">
                                                    <div className="text-center">
                                                        <MDBInput
                                                            group
                                                            style={{'width':'40%','margin-left':'31%'}}
                                                            type="number"
                                                            validate
                                                            error="wrong"
                                                            success="right"
                                                            />
                                                    </div>
                                                </div>

                                            <div className="open-file-container">
                                                <div style={{'width':'60%'}} className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="inputGroupFileAddon01">
                                                        Upload
                                                        </span>
                                                    </div>
                                                    <div className="custom-file">
                                                        <input
                                                        type="file"
                                                        className="custom-file-input"
                                                        id="inputGroupFile01"
                                                        aria-describedby="inputGroupFileAddon01"
                                                        />
                                                        <label className="custom-file-label" htmlFor="inputGroupFile01">
                                                        Choose file
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <button class="btn btn-primary" onClick={() => this.stepper.next()}>Next</button>
                                        </div>
                                        <div id="test-l-3" class="content text-center">
                                            <h5 className="grey-text text-center">
                                                Please select your mode of payment
                                            </h5>
                                            <div className="text-center">
                                                {/* <MDBIcon size="4x" fab icon="cc-paypal" /> */}
                                            </div>
                                            {/* <button type="submit" class="btn btn-primary mt-5">{this.state.payname}</button> */}
                                                <div style={{'visibility':'hidden'}}>
                                                    <PayPalButton style={{'visibility':'hidden'}}/>
                                                </div>
                                        </div>
                                        </form>
                                    </div>
                                    </div>
                                </div>
                                    </MDBJumbotron>
                                </MDBContainer>
                            </div>
                        </MDBContainer>
                    </div>
            </div>
        )
    }
}
export default UseService