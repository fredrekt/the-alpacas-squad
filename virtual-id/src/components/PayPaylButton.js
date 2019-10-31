import { PayPalButton } from "react-paypal-button-v2";
import React from 'react'

const PayPalBtn = () =>{
    return(
        <PayPalButton
        currency="PHP"
        amount="1500"
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details);
          console.table(details)
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
    )
}
export default PayPalBtn
