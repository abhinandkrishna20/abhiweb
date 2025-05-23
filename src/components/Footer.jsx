import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram , FaLinkedinIn, FaGithub} from 'react-icons/fa';

const Footer = () => {
  const iconStyle =
    'border border-white rounded-full p-3 hover:bg-white hover:text-black transition duration-300';

  return (
    <footer className=" border-t-2 border-blue-200 text-white py-6 mt-10">
      <div className="text-center text-sm mb-4">
        © {new Date().getFullYear()} All rights reserved | <span className="font-semibold">Abhinand Krishna</span>
      </div>

      <div className="flex justify-center gap-6 text-xl">
        <a href="https://www.facebook.com/abhisha2002/" target="_blank" rel="noopener noreferrer" className={iconStyle}>
          <FaFacebookF />
        </a>
        <a href="https://x.com/AbhinandCoder" target="_blank" rel="noopener noreferrer" className={iconStyle}>
          <FaTwitter />
        </a>
        {/* <a href="https://www.instagram.com/abhin_krishna20/" target="_blank" rel="noopener noreferrer" className={iconStyle}>
          <FaInstagram />
        </a> */}
        <a href="https://www.linkedin.com/in/abhinandkrishna/" target="_blank" rel="noopener noreferrer" className={iconStyle}>
          <FaLinkedinIn className="text-xl" />
        </a>
        <a href="https://github.com/abhinandkrishna20" target="_blank" rel="noopener noreferrer" className={iconStyle}>
          <FaGithub className="text-xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
