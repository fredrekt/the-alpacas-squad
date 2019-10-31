import { PayPalButton } from "react-paypal-button-v2";
import React from 'react'
import { MDBIcon } from 'mdbreact'

//toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notifySuccess = () => {
  toast.success(
  <div>
  <MDBIcon size='lg' icon="check-circle" />
  <span className="success-h"> Welcome! User has been verified!</span></div>, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose:1200
    });
}


const PayPalBtn = () =>{

  
    return(
      <div>
        <ToastContainer/>
      
        <PayPalButton
        currency="PHP"
        amount="1780"
        onSuccess={(details, data) => {
          this.notifySuccess()
          console.table(details)
          console.log("id:",details.id)
          console.log("status:",details.status)
          console.table(data)
 
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderId: data.orderID
            })
          });
        }}
        options={{
          clientId: "AUAKWLkbJBgMoLMtKraEg8u2QBEKC8RVsIxSpX-gERdVtVaNMOKwkKfoWBFQjpdooejZZkfiKa3riLgv"
        }}
        style={{
          layout:  'vertical',
          color:   'blue',
          shape:   'rect',
          label:   'paypal'
        }}
      />
      </div>
    )
}
export default PayPalBtn
