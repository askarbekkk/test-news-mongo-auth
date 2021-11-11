import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentForm from "../PaymentForm";

const stripePromise = loadStripe("pk_test_51Ju7TGBYdOVpnrHgpCWc2AaosSkVbuPC3RxF1QVfbGju9iI7ThehsXWbnh24s0lOIrHNghVgog1tc3Gu4bDd3Hpa00wBovRe74")

const StripeContainer = () => {
    return (
        <div>
            <Elements stripe={stripePromise} >
               <PaymentForm />
            </Elements>
        </div>
    );
};

export default StripeContainer;