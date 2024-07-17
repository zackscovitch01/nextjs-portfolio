"use client";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
const Header = () => {
  return (
    <header className="flex justify-between sticky p-5 top-0 items-start max-w-7xl mx-auto z-20">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center gap-4"
      >
        {/* social icons */}
        <a href="https://x.com/Zackscovitch01">
          <FaXTwitter className="w-6 h-6 text-gray-400" />
        </a>
        <a href="https://www.facebook.com/moubarack.z.bagoudou/">
          <FaFacebook className="w-6 h-6 text-gray-400" />
        </a>
        <a href="https://www.linkedin.com/in/moubarackbagoudou/">
          <FaLinkedin className="w-6 h-6 text-gray-400" />
        </a>
        <a href="https://www.linkedin.com/in/moubarackbagoudou/">
          <FaGithub className="w-6 h-6 text-gray-400" />
        </a>
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center cursor-pointer gap-2"
      >
        <HiOutlineMail className="w-6 h-6 text-gray-400" />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
};
export default Header;
