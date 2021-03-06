import React from "react"
import {loadStripe} from '@stripe/stripe-js';

const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#fff",
  outline: "none",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}

const stripePromise = loadStripe("pk_test_XUVtAanMdJaMMhWby65ShRSz00QEGbxVuE")

const redirectToCheckout = async event => {
  event.preventDefault()
  const stripe = await stripePromise
  const { error } = await stripe.redirectToCheckout({
    items: [{ plan: "plan_Grf1ADYVZdUwWI", quantity: 1 }],
    successUrl: `http://westernknights56.org/success/`,
    cancelUrl: `http://westernknights56.org/`,
  })

  if (error) {
    console.warn("Error:", error)
  }
}

const Checkout = () => {
  return (
    <button style={buttonStyles} onClick={redirectToCheckout}>
       Pay Lodge Dues
    </button>
  )
}

export default Checkout
