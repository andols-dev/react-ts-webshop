import React, { useState } from "react";

export const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  console.log(isMenuOpen);
  return (
    <div className="bg-gray-900">
      <div>
        <div className="px-6 py-2 flex justify-between items-center">
          <div className="text-white">
            <p>WebShop</p>
          </div>

          <div className="text-white " onClick={toggleMenu}>
            {!isMenuOpen ? (
              <svg
                className="w-6 h-6 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="text-white text-center font-semibold px-6 py-6 ">
          <a href="#" className="block hover:bg-gray-800 pt-2 pb-2">
            Home
          </a>
          <a href="#" className="block hover:bg-gray-800 pt-2 pb-2">
            Home
          </a>
          <a href="#" className="block hover:bg-gray-800 pt-2 pb-2">
            Home
          </a>
        </div>
      )}
    </div>
  );
};
