import React, {useState} from 'react';
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import axios from "axios";

const CARD_OPTIONS = {
    iconStyle: 'solid',
    style: {
        iconColor: '#c4f0ff',
        color: "white",
        backgroundColor: '#757575',
        fontWeight: 500,
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': {color: '#fce883'},
        '::placeholder': {color: '#87bbfd'}
    },
    invalid: {
        iconColor: '#ffc7ee',
        color: '#ffc7ee',
    }
}

const PaymentForm = () => {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
      e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
        if (!error){
            try {
                const {id} = paymentMethod
                const response = await axios.post("http://localhost:8000/api/v1/payment", {amount: 1000, id})
                if (response.data.success){
                    console.log("Payment successfully")
                    setSuccess(true)
                }
            } catch (e) {
                console.log("Error", e)
            }
        } else {
            console.log(error.message)
        }
    }

    return (
        <>
            {!success ?
                (<form onSubmit={handleSubmit}>
                    <div className="FormRow">
                        <CardElement options={CARD_OPTIONS}/>
                    </div>
                    <button type="submit" className="bg-indigo-700 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-lg">Pay</button>
                </form>) : (<div>Payment was successfully!</div>)
            }
        </>
    );
};

export default PaymentForm;