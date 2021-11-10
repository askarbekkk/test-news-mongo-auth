const stripe = require("stripe")(process.env.PRIVATE_KEY)

const payment = async (req, res) => {
    let {amount, id} = req.body
    try{
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "Blog membership",
            payment_method: id,
            confirm: true
        })
        console.log("Payment", payment)
        res.json({message: "Payment successfully!", success: true})
    } catch (e) {
        res.json({message: "Payment failed!", success: false})
    }
}