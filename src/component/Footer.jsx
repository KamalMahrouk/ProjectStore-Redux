import React from 'react';

const Footer = () => {
    const links = ["Company", "About Us", "Team", "Products", "Blog", "Pricing"];
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="mt-96 mb-0 px-8 py-4 bg-gray-500 text-white">
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-8 pb-4">
            <ul className="flex space-x-4 ">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="font-medium text-decoration-none text-white transition-colors hover:text-gray-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center text-gray-400">
            <span>{`© ${currentYear} Your Company Name. All rights reserved.`}</span>
          </div>
        </div>
      </footer>
    );
  };
  
export default Footer;