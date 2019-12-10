import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

function StripeCheckoutButton({ price }) {
  const priceInCents = price * 100;
  const publishableKey = 'pk_test_6qAKRAChruTu9IDNqOdnBiWk00XWF1WyaQ';

  const onToken = token => {
    console.log(token);
    alert('payment sucessful');
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