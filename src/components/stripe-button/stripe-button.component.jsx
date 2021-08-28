import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JTS9hLhihVLNFuATn8Rcbzrd4mNxaTYN4tYttysJrBfvEbF8Z8WEfsthaRvFmw3sxNsMbKkWVoMRJcEo49I3q8q00kpsLiuHk';

    const onToken = token => {
        console.log(token);
    }

    return (
        <StripeCheckout
            label='Pay now'
            name='Tenacious-Clothes Ltd.'
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;