import axios from "axios";
import type { StripeSessionResponse } from "../interface/IStripe";

export const createStripeSession = async (priceId: string): Promise<StripeSessionResponse> => {
  try {
    const response = await axios.post<StripeSessionResponse>(
      "https://contacto-19h2.onrender.com/api/checkout",
      { priceId },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("Error al crear la sesión de Stripe");
  }
};
