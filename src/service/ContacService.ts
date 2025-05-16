import axios from "axios";
import type { IContacto } from "../interface/IContacto";


export const contactService = async (data: IContacto) => {
  return await axios.post("https://contacto-19h2.onrender.com/api/contacto", data);
};
