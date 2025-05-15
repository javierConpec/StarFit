import { motion } from "framer-motion";
import chicoBanner from "../assets/Banner.png";
import Title from "../components/Title";

const Banner = () => {
  return (
    <div className="flex w-full h-[100vh]">
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: -20 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-auto relative flex justify-start items-center"
      >
        <div className="absolute bg-yellow-300 h-[700px] w-[700px] rounded-full z-0 top-1/2 -translate-y-1/2 -left-[120px]"></div>
        <img
          src={chicoBanner}
          alt="Imagen de banner"
          className="object-cover h-full w-full z-10 relative"
        />
      </motion.div>

      <div className="w-3/4 flex items-center justify-center">
        <Title />
      </div>
    </div>
  );
};
export default Banner;
