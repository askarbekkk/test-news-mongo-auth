import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentForm from "../PaymentForm";

const stripePromise = loadStripe(process.env.PUBLIC_KEY)

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