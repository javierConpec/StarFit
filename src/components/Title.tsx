import { motion } from "framer-motion";

const Title = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 150 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="flex items-center justify-center z-10 relative"
    >
      <div>
        <h1 className="text-white font-extrabold text-[60px] md:text-[75px] leading-tight text-left">
          <div>CONSTRUYE TU</div>
          <div>CUERPO SOÑADO</div>
        </h1>
        <p className="text-white text-xs font-bold mt-5">
          Entrenar aquí no es solo ejercicio, es confianza, energía y bienestar.
          Tu transformación comienza ahora
        </p>
      </div>
    </motion.div>
  );
};
export default Title;
