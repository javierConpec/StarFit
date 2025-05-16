
import type { StripeSessionResponse } from "../interface/IStripe";

export const createStripeSession = async (priceId: string): Promise<StripeSessionResponse> => {
  const res = await fetch("https://contacto-19h2.onrender.com/api/create-checkout-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ priceId }),
  });

  if (!res.ok) {
    throw new Error("Error al crear la sesión de Stripe");
  }

  return res.json();
};
