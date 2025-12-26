import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// const stripeKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
const stripeKey =
  "pk_test_51SiVtr91jJAgnThsvKV9EXIjccLJ7xP3RAxPAKxFMhipV8EJiLjjZ8hsvRcpRV3icS5jxBdD4XXmdayjWGZmBNlL00b5oKhgfZ";
const stripePromise = loadStripe(stripeKey);

function StripeProvider({ children }) {
  console.log("Stripe key:", stripeKey);

  return <Elements stripe={stripePromise}>{children}</Elements>;
}

export default StripeProvider;
