import React from 'react';
import axios from 'axios';

import StripeCheckout from 'react-stripe-checkout';

function StripeCheckoutButton({ price }) {
  const priceInCents = price * 100;
  const publishableKey = 'pk_test_6qAKRAChruTu9IDNqOdnBiWk00XWF1WyaQ';

  const onToken = token => {
    // console.log(token);
    // alert('payment sucessful');
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceInCents,
        token
      }
    }).then((response) => {
      console.log(response);
      alert('Payment successful!');
    }).catch((error) => {
      console.log(JSON.parse(error));
      alert('Payment failed. Please use make sure to use a valid credit card.');
    })
  }

  return (
    <StripeCheckout 
      label='Pay now'
      name='CRWN clothing'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceInCents}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;