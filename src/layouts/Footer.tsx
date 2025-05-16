import Logo from "../assets/Logo.png";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <footer className="mt-20">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="/home"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={Logo} className="h-12" alt="Flowbite Logo" />
              <span className="self-center text-lg whitespace-nowrap text-white">
                The best GYM
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 space-x-5">
              <li>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-blue-500 text-4xl"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="text-pink-500 text-4xl"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="text-blue-500 text-4xl"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-purple-500 text-4xl"
                />
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="/home" className="hover:underline">
              STARTFIT™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};
export default Footer;
