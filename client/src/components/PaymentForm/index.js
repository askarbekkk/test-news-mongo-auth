import React, {useState} from 'react';
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import axios from "axios";

const PaymentForm = () => {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const CARD_OPTIONS = {}

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
                    <button type="submit">Pay</button>
                </form>) : (<div>Payment was successfully!</div>)
            }
        </>
    );
};

export default PaymentForm;