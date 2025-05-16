// src/hooks/useStripe.ts
import { loadStripe } from "@stripe/stripe-js";
import { createStripeSession } from "../service/StripeService";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY!);

export const useStripeCheckout = () => {
  const redirectToCheckout = async (priceId: string) => {
    const stripe = await stripePromise;
    const { id } = await createStripeSession(priceId);
    await stripe?.redirectToCheckout({ sessionId: id });
  };

  return { redirectToCheckout };
};
