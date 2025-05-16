import { useState } from "react";
import Button from "../components/Button";
import { contactService } from "../service/ContacService";



const Contactme = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const handleNombreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value);
  };


  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMensaje(e.target.value);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      nombre,
      email,
      mensaje,
    };

    setLoading(true);
    setResponseMessage("");

    try {
      await contactService(userData);  
      setResponseMessage("¡Mensaje enviado correctamente!");
    } catch (error) {
      setResponseMessage("Hubo un error al enviar el mensaje.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-20 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] p-10 rounded-2xl shadow-2xl shadow-gray-800">
      <h2 className="text-4xl text-white font-extrabold text-center mb-8">Contáctanos</h2>
      
      <form onSubmit={handleSubmit}>
      <div className="mb-6">
          <label className="block text-white text-left text-sm font-semibold mb-2" htmlFor="email">
            Tu Nombre
          </label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={handleNombreChange}
            className="w-full p-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Rodrigo Peralta"
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-left text-sm font-semibold mb-2" htmlFor="email">
            Tu correo
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full p-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="ejemplo@email.com"
          />
        </div>

        <div className="mb-8">
          <label className="block text-white text-left text-sm font-semibold mb-2" htmlFor="message">
            Tu mensaje
          </label>
          <textarea
            id="message"
            value={mensaje}
            onChange={handleMessageChange}
            className="w-full p-3 h-32 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>
        </div>

        <div className="text-center">
          <Button text={loading ? "Enviando..." : "Enviar mensaje"} disabled={loading} />
        </div>
      </form>

      {responseMessage && (
        <div className="mt-4 text-center text-white">{responseMessage}</div>
      )}
    </div>
  );
};

export default Contactme;
