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
        <motion.svg
  viewBox="0 0 500 500"
  className="absolute h-[700px] w-[700px] z-0 top-1/2 -translate-y-1/2 -left-[120px]"
  xmlns="http://www.w3.org/2000/svg"
>
  <motion.path
    fill="#facc15"
    initial={false}
    animate={{
      d: [
        "M421.5,319.5Q390,389,319.5,439Q249,489,174.5,439Q100,389,98.5,304.5Q97,220,153,146Q209,72,294.5,95.5Q380,119,424,184.5Q468,250,421.5,319.5Z",
        "M449,324.5Q408,399,324.5,424Q241,449,164.5,407.5Q88,366,85,281.5Q82,197,146.5,136.5Q211,76,298,91Q385,106,437.5,178Q490,250,449,324.5Z",
        "M421.5,319.5Q390,389,319.5,439Q249,489,174.5,439Q100,389,98.5,304.5Q97,220,153,146Q209,72,294.5,95.5Q380,119,424,184.5Q468,250,421.5,319.5Z",
      ],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
</motion.svg>
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
