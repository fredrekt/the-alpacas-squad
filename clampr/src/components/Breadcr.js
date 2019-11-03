import React from 'react'
import b1 from '../img/breadc-1.jpeg'
import { MDBMask } from 'mdbreact'
const Breadcr = (props) =>{
    return(
        <div>
            <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
                    <div className="breadcrumb-main">
                        <div className="layer">
                            <div className="brc-content">
                                <div className="brc-ins-cont">
                                    <h1 className="brc-header">{props.bheader}</h1>
                                    <a className='brc-bread-link' href="/">Home</a> / <span className="grey-text">{props.bcurrent}</span>
                                </div>
                            </div>
                        </div>
                    </div>   
            </MDBMask>   
        </div>
    )
}

export default Breadcr