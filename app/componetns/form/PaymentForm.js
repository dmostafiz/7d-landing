"use client";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider";
import Axios from "@/Helpers/Axios";
import Cookies from "js-cookie";

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

function CheckoutForm({ clientSecret }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // where Stripe redirects after 3D Secure, etc.
        return_url: "http://localhost:3000/payment-success",
      },
      redirect: "if_required", // keep user on same page if no redirect needed
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      // Inform your backend
      const res = await Axios.post("/", {

      });

      Cookies.remove('intent')
      Cookies.remove('token')
      Cookies.remove('sponsor')
      
      alert("Payment successful!");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      {error && <p>{error}</p>}

      <button type="submit" className="form-btn" data-v-bb614710="">
        <span className="main-text" data-v-bb614710="">
          {loading ? "Processing..." : "Pay Now"}
        </span>
      </button>
    </form>
  );
}

export default function PaymentForm({ clientSecret }) {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        // appearance: { theme: "stripe" },
      }}
    >
      <CheckoutForm clientSecret={clientSecret} />
    </Elements>
  );
}
