import React from 'react'
import b1 from '../img/breadc-1.jpeg'
import { MDBMask, MDBView } from 'mdbreact'
const Breadcrumb = (props) =>{
    return(
        <div>
            <MDBView className="breadcrumb-main">
                <MDBMask overlay="stylish-strong" className="flex-center flex-column text-white text-center">
                        <div className="breadcrumb-main">
                                <div className="brc-content">
                                    <div className="brc-ins-cont">
                                        <h1 className="brc-header">{props.bheader}</h1>
                                    </div>
                                </div>
                        </div>   
                </MDBMask>   
            </MDBView>
            {/* <MDBView>
    <img
      src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg"
      className="img-fluid"
      alt=""
    />
    <MDBMask overlay="black-strong" className="flex-center">
        <p className="white-text">strong overlay</p>
      </MDBMask>
  </MDBView> */}
        </div>
    )
}

export default Breadcrumb